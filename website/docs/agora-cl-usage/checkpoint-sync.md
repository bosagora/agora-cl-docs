---
id: checkpoint-sync
title: Sync from a checkpoint
sidebar_label: Sync from a checkpoint
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution Public Preview

**This feature is currently in public preview** and may change significantly as we receive feedback from users like you. Join our [Bosagora Telegram](https://t.me/bosagora_eng) to share your feedback.

:::

**Checkpoint sync** is a feature that significantly speeds up the initial sync between your Agora node and the Agora Chain. With checkpoint sync configured, your Agora node will begin syncing from a recently finalized checkpoint instead of syncing from genesis. This can make installations, validator migrations, recoveries, and testnet deployments *way* faster.

To sync from a checkpoint, your Agora-cl Agora node needs three pieces of information: the latest finalized `BeaconState`, the `SignedBeaconBlock`, and (if you're on a testnet) the genesis state for the network you're using. Together, the `BeaconState` and `SignedBeaconBlock` represent a single **checkpoint state**.

These three pieces of information can be retrieved either via a **network request**, or via **file export/import**. Syncing via network is the method we recommend to most users because it's more straightforward.

After configuring checkpoint sync, we strongly recommend [verifying the authenticity of your Agora node's checkpoint](#verify-the-authenticity-of-your-beacon-nodes-checkpoint) as a way to "trust but verify" the integrity of your checkpoint data.

## Option 1: Configure checkpoint sync via network request

Start your Agora-cl Agora node with the `--checkpoint-sync-url` flag set to a fully synced Agora node's RPC gateway provider endpoint. This endpoint is usually exposed via port `3500`. Set the `--genesis-beacon-api-url` flag to the same URL if you want to fetch the genesis state along with the `BeaconState` and `SignedBeaconBlock`.

The following command starts a Agora node with checkpoint sync configured to pull checkpoint state from another local Agora node's RPC endpoint using port `3500`:

<Tabs groupId="os" defaultValue="others" values={[
    {label: 'Windows', value: 'win'},
    {label: 'Linux, MacOS, Arm64', value: 'others'}
]}>
  <TabItem value="win">

```
./agora-cl.bat beacon-chain --checkpoint-sync-url=http://localhost:3500 --genesis-beacon-api-url=http://localhost:3500
```

  </TabItem>
  <TabItem value="others">

```bash
./agora-cl.sh beacon-chain --checkpoint-sync-url=http://localhost:3500 --genesis-beacon-api-url=http://localhost:3500
```

  </TabItem>
</Tabs>

To confirm that checkpoint sync has succeeded, look for the following output:

```
level=info msg="requesting <your configured checkpoint sync endpoint>"
```

### Serve checkpoint sync requests

The above instructions tell you how to **request** checkpoint state from another node. If you want to **serve** these requests, run a fully synced node with the following flags:

 - `--enable-debug-rpc-endpoints`: The [Agora Node API for retrieving a BeaconState](https://ethereum.github.io/beacon-APIs/#/Debug/getStateV2) is a debug endpoint - this flag tells Agora-cl to enable the endpoint so checkpoint sync requests can be served through your Agora node's RPC gateway provider endpoint.

Note that **this is entirely optional**. The Agora node *requesting* the checkpoint state from this node doesn't need these flags.


## Option 2 (Advanced): Configure checkpoint sync via file export/import

:::info

`Go` needs to be installed on the machine that hosts your synced Agora node if you use this method. See [go.dev](https://go.dev/) for installation instructions.

:::

When you sync via **network request**, the `BeaconState`, `SignedBeaconBlock`, and genesis state files are delivered from one Agora node to another using a peer-to-peer connection. When you sync via **file export/import**, you manually export these files from one Agora node and import them into another. This can be useful if you don't want your Agora node to expose an RPC gateway provider endpoint. Block explorers and client teams can also host these exported files statically as a trusted checkpoint sync source.

Issue the following commands to export the `BeaconState` and `SignedBeaconBlock` files from a synced Agora node using `prysmctl`. Until `prysmctl` is included in Agora-cl's binary release package, it is necessary to run it from a local source checkout:

:::info

Installing `prysmctl` via `agora-cl.sh`, or downloading it from agora-cl's github release page, will be possible in an upcoming stable release.

:::

```bash
$ git clone git@github.com:zeroone-boa/agora-cl.git
Cloning into 'agora-cl'...
remote: Enumerating objects: 167386, done.
remote: Counting objects: 100% (332/332), done.
remote: Compressing objects: 100% (234/234), done.
remote: Total 167386 (delta 118), reused 220 (delta 93), pack-reused 167054
Receiving objects: 100% (167386/167386), 154.30 MiB | 39.56 MiB/s, done.
Resolving deltas: 100% (127482/127482), done.

$ go run github.com/zeroone-boa/agora-cl/v3/cmd/prysmctl checkpoint-sync download --beacon-node-host=http://localhost:3500
```

You should see the following output if your export was successful:

```bash
INFO[0000] requesting http://localhost:3500/eth/v2/debug/beacon/states/finalized
INFO[0001] detected supported config in remote finalized state, name=goerli, fork=bellatrix
INFO[0001] requesting http://localhost:3500/eth/v2/beacon/blocks/0x766bdce4c70b6ee991bd68f8065d73e3990895b1953f6b931baae0502d8cbfcf
INFO[0001] BeaconState slot=3041920, Block slot=3041920
INFO[0001] BeaconState htr=0x34ebc10f191706afbbccb0c3c39679632feef0453fe842bda264e432e9e31011d, Block state_root=0x34ebc10f191706afbbccb0c3c39679632feef0453fe842bda264e432e9e31011
INFO[0001] BeaconState latest_block_header htr=0x766bdce4c70b6ee991bd68f8065d73e3990895b1953f6b931baae0502d8cbfcfd, block htr=0x766bdce4c70b6ee991bd68f8065d73e3990895b1953f6b931baae0502d8cbfcf
INFO[0001] saved ssz-encoded block to to block_goerli_bellatrix_3041920-0x766bdce4c70b6ee991bd68f8065d73e3990895b1953f6b931baae0502d8cbfcf.ssz
INFO[0001] saved ssz-encoded state to to state_goerli_bellatrix_3041920-0x34ebc10f191706afbbccb0c3c39679632feef0453fe842bda264e432e9e31011.ssz
```

The two exported `*.ssz` files are your `BeaconState` and `SignedBeaconBlock` files. Their filenames combine their file type (`state`, `block`), the network (`goerli`), the fork name (`bellatrix`), the slot (`2397120`) and the state or block root in hex encoding. The `checkpoint save` command doesn't export the required genesis state, but the genesis state can be downloaded via `curl` or `wget` using the following command:

```
curl -H "Accept: application/octet-stream"  http://localhost:3500/eth/v1/debug/beacon/states/genesis > genesis.ssz
```

You can also just manually download the genesis state from GitHub: [Goerli-Prater](https://github.com/eth-clients/eth2-networks/raw/master/shared/prater/genesis.ssz) | [Sepolia](https://github.com/eth-clients/merge-testnets/blob/main/sepolia/genesis.ssz) | [Ropsten](https://github.com/eth-clients/merge-testnets/blob/main/ropsten-beacon-chain/genesis.ssz)

Use the following command to start your Agora node with checkpoint sync configured to use this checkpoint state:

<Tabs groupId="os" defaultValue="others" values={[
    {label: 'Windows', value: 'win'},
    {label: 'Linux, MacOS, Arm64', value: 'others'}
]}>
  <TabItem value="win">

```bash
./agora-cl.bat beacon-chain \
--checkpoint-block=$PWD/block_goerli_bellatrix_3041920-0x766bdce4c70b6ee991bd68f8065d73e3990895b1953f6b931baae0502d8cbfcf.ssz \
--checkpoint-state=$PWD/state_goerli_bellatrix_3041920-0x34ebc10f191706afbbccb0c3c39679632feef0453fe842bda264e432e9e31011.ssz \
--genesis-state=$PWD/genesis.ssz
```

  </TabItem>
  <TabItem value="others">

```bash
./agora-cl.sh beacon-chain \
--checkpoint-block=$PWD/block_goerli_bellatrix_3041920-0x766bdce4c70b6ee991bd68f8065d73e3990895b1953f6b931baae0502d8cbfcf.ssz \
--checkpoint-state=$PWD/state_goerli_bellatrix_3041920-0x34ebc10f191706afbbccb0c3c39679632feef0453fe842bda264e432e9e31011.ssz \
--genesis-state=$PWD/genesis.ssz
```

  </TabItem>
</Tabs>



## Verify the authenticity of your Agora node's checkpoint

To verify that the checkpoint state you're using is legitimate, follow these steps after starting your Agora node with checkpoint sync enabled:

1. Navigate to `http://localhost:3500/eth/v1/beacon/headers/finalized` using your browser.
2. Find the `slot` number and `state_root` value.
3. Use a trusted blockchain explorer to verify the `state_root`. To be extra safe, follow this procedure using multiple blockchain explorers. Using `beaconcha.in` as an example, navigate to one of the following pages, replacing `SLOT` with the `slot` you pulled from your browser:
   - Prater: https://prater.beaconcha.in/block/SLOT
   - Sepolia: https://sepolia.beaconcha.in/block/SLOT
   - Ropsten: https://ropsten.beaconcha.in/block/SLOT
   - Mainnet: https://beaconcha.in/block/SLOT
4. Ensure that the `state_root` reported by the blockchain explorer matches the `state_root` you pulled from your browser. If you don't see a match, feel free to reach out to us on [Telegram](https://t.me/bosagora_eng) and we'll help you troubleshoot.

Note that there are many blockchain explorers - we recommend doing your own research to identify the latest, most trustworthy services. We've used `beaconcha.in` only as an example, not as a recommendation.

## Frequently asked questions

**Is checkpoint sync less secure than syncing from genesis?** <br/>
No. It's actually considered *more* secure thanks to the protections against long-range attacks afforded by [Weak Subjectivity](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/).

<!--
**How and when are "finalized checkpoints" created?** <br/>
TODO
-->

**Does Agora-cl's implementation of checkpoint sync support backfilling?**
Agora-cl's current implementation syncs forward-only. Backfilling will be supported in a future Agora-cl release. Note that backfilling isn't required to run a validator - it's only required if you want to run an archive node, support other peers, or query chain history through your Agora node.

**Can I use checkpoint sync on any network?** <br/>
Yes. Checkpoint sync is a network-agnostic feature. You can even use it on local devnets.

**Can I use checkpoint sync with an existing, partially synced database?** <br/>
No - checkpoint sync requires a fresh, unused data directory.

**Are there any publicly available, trustworthy checkpoint sync endpoints that I can use?** <br/>
The Ethereum Foundation DevOps team runs a handful of checkpoint sync endpoints that can be used for testnets:

 - Goerli/Prater: https://goerli.checkpoint-sync.ethdevops.io
 - Ropsten: https://ropsten.checkpoint-sync.ethdevops.io
 - Sepolia: https://sepolia.checkpoint-sync.ethdevops.io

Feel free to ask on our [Bosagora Telegram](https://t.me/bosagora_eng) if you need help identifying a **Mainnet** checkpoint state provider.

**Do I need to provide a genesis state when using checkpoint sync on Mainnet?** <br/>
No. Mainnet's genesis state is embedded within Agora-cl.

**Will I be able to use Infura as a checkpoint state provider after The Merge?** <br/>
Yes. You won't be able to use Infura as an execution node endpoint provider post-Merge (see: [Prepare for The Merge](../prepare-for-merge.md)), but you can use it as a checkpoint state provider post-Merge.

**I started a Agora node with checkpoint sync enabled. Can I have other nodes pull checkpoint state from this node right away, or do I need to wait for it to become fully synced?** <br/>
Block and state are immediately finalized upon import, so your first node should be able to serve checkpoint sync requests to other clients without having to wait.

**Does my execution client need to be fully synced before my Agora node can use checkpoint sync?** <br/>
Similar to what happens when you sync from genesis, if your execution client isn't fully synced, your Agora node will go into optimistic sync mode. You'll be able to follow the chain, but any validators connected to your Agora node won't be able to propose.

**How does checkpoint sync relate to weak subjectivity checkpoints?**
Agora-cl offers a `--weak-subjectivity-checkpoint` flag that allows you to specify a weak subjectivity checkpoint. With this flag specified, your Agora node will ensure that it reconstructs a historical chain that matches the checkpoint root at the given epoch. This can offer the same level of weak subjectivity protection that checkpoint sync offers. See [Weak Subjectivity](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/) to learn more.

**Where can I learn more about checkpoint sync?** <br/>

 - [Checkpoint Sync Safety](https://www.symphonious.net/2022/05/21/checkpoint-sync-safety/) by Adrian Sutton
 - [How to: Checkpoint Sync](https://notes.ethereum.org/@launchpad/checkpoint-sync) by members of the Ethereum Foundation
 - [WS sync in practice](https://notes.ethereum.org/@djrtwo/ws-sync-in-practice) by Danny Ryan

Special thanks to the authors of *How to: Checkpoint Sync* for providing the endpoints and verification procedure used in this guide.


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
