import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Install latest docker client for your OS following the instructions at https://docs.docker.com/engine/install/

<div>
<Tabs groupId="network" defaultValue="mainnet" values={[
        {label: 'Mainnet', value: 'mainnet'},
        {label: 'Testnet', value: 'testnet'}
    ]}>
  <TabItem value="mainnet">
Download an install network

```
mkdir agora-chain
cd agora-chain
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/bosagora/agora-chain/v0.x.x/agora.sh)"
```

This will result in the following folder structure:
```
📂 agora-chain
  ┣  📂 docs
  ┣  📂 networks
    ┣ 📂 devnet
    ┣ 📂 mainnet
    ┣ 📂 testnet
```

  <p>Change to <code>mainnet</code> network:</p>

```
./agora.sh network mainnet
```
  </TabItem>

  <TabItem value="testnet">
Download an install network

```
mkdir agora-chain
cd agora-chain
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/bosagora/agora-chain/v0.x.x/agora.sh)"
```

This will result in the following folder structure:
```
📂 agora-chain
  ┣  📂 docs
  ┣  📂 networks
    ┣ 📂 devnet
    ┣ 📂 mainnet
    ┣ 📂 testnet
```

  <p>Change to <code>testnet</code> network:</p>

```
./agora.sh network testnet
```

  </TabItem>
</Tabs>
</div>
