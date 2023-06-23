---
id: exiting-a-validator
title: Exit your validator
sidebar_label: Exit your validator
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget  commaDelimitedContributors="James"/>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Voluntarily exiting your validator from the Ethereum network is a one time command using the prysmctl tool. Note that this operation was previously facilitated by a command exposed by the Prysm validator client, and can still be accessed that way. At a high level, you'll follow these steps to exit your validator:

1. Ensure that you have access to a fully synced beacon node.
2. Issue the `validator exit` command to your validator.
3. Select the account(s) that should be exited. This step can be skipped by specifying the account(s) via the `--public-keys` flag when issuing the `validator exit` command.
4. Confirm your understanding of the consequences of exiting your validator by typing `Exit my validator` when prompted.

After providing confirmation, voluntary exit request will be broadcasted through your beacon node.

:::caution

Voluntarily exiting will not withdraw fund, validators must have their `withdrawal_credentials` updated in addition to exiting to withdraw the entire balance. Learn more on how to withdraw earnings or fully withdraw your validator in [our guide](withdraw-validator.md)

The `validator-exit command` only supports gRPC, which means that the specified `beacon-rpc-provider` needs to be a Prysm beacon node (because Prysm's beacon node client is the only client that supports gRPC)

:::


<Tabs
groupId="operating-systems"
defaultValue="lin"
values={[
{label: 'Linux', value: 'lin'},
{label: 'Windows', value: 'win'},
{label: 'Mac', value: 'arm'},
]
}>
<TabItem value="lin">

```
./agora.sh validator exit
```


</TabItem>
<TabItem value="win">

```
./agora.bat validator exit 
```


</TabItem>
<TabItem value="arm">

```
./agora.sh validator exit 
```

</TabItem>
</Tabs>



