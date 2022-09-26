---
id: web3signer
title: Use Web3Signer
sidebar_label: Use Web3Signer
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget />

[Web3Signer](https://github.com/ConsenSys/web3signer) is an open-source remote signing service developed by Consensys. Agora-cl users can use this tool as an alternative to storing keys locally. Web3Signer uses REST APIs.

Agora-cl supports the use of Web3Signer the following flags:

`--validators-external-signer-url` : base URL for the Web3Signer.

example:
```
--validators-external-signer-url=http://localhost:9000
```

It is recommended to use https for the web3signer url. Agora-cl currently supports one to one on web3signer and does not support multiple key management systems with the same validator client. Agora-cl does not support partial local and partial remote key management. Web3signer does not support authentication between the validator client and the signer.


`--validators-external-signer-public-keys`: comma separated list of public validator keys in hex format or an external url endpoint for the validator to retrieve public keys in JSON format.

hex example:
```
--validators-external-signer-public-keys=0xa99a...e44c,0xb89b...4a0b
```

url example:
```
--validators-external-signer-public-keys=https://web3signer.com/api/v1/eth2/publicKeys
```

URLs will only pull once and does not poll. Additional keys can be added or removed via the Remote Keymanager API.

:::tip Running Agora-cl with Web3Signer does not need Agora-cl Wallet Creation
Most Agora-cl keymanager types require a corresponding Agora-cl wallet for storing keys, the web3signer type doesn't use any locally stored Agora-cl wallet.
The `--wallet-dir` flag will still be needed if using the Remote Keymanager API for `auth-token` purposes.
:::

## Remote Keymanager API

[Keymanager APIs](https://github.com/ethereum/keymanager-APIs) is a recommended set of REST APIs that validator clients have agreed upon for managing keys.

The Remote Keymanager APIs allows Agora-cl users to list, update, and delete the public keys set on the validator for Web3Signer.

To use the Remote keymanager API, one would need to run the validator with the `--web` and `--validators-external-signer-url` flags with `--validators-external-signer-public-keys` being optional.
if `--validators-external-signer-public-keys` is not defined the validator client would simply run in a loop waiting for keys to be set.

example:
```
validator --web --validators-external-signer-url=http://localhost:9000
```

The `--web` flag will enable validator client APIs as well as the web ui ( not supported for web3signer ). A JWT token ( found on the second line of the auth-token file) will be generated in the agora-cl default wallet directory otherwise defined by `--wallet-dir` flag. the token will also be printed in the console:
```
[2022-04-15 14:07:39]  INFO rpc: http://127.0.0.1:7500/initialize?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.ck3J6tcvHcI74IiFjyJqcBH-MmNAq-fMr0ncyZkGvFM
```
The token needs to be copied and set in the header of the API request:
```
Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.ck3J6tcvHcI74IiFjyJqcBH-MmNAq-fMr0ncyZkGvFM`
```

For more information on Remote Keymanager API visit the [Keymanager APIs Github Repo](https://github.com/ethereum/keymanager-APIs).

:::warning Agora-cl Web Interface not supported for Web3Signer
Agora-cl Web Interface can only support local keys and will not support the Web3Signer keys.[eth2-keymanager-frontend](https://github.com/joaquim-verges/eth2-keymanager-frontend) is a front-end alternative to the Agora-cl UI for the Keymanager APIs.
:::

:::warning Only supports Web3Signer currently
the remote keymanager API only currently supports Web3Signer types, please use the regular keymanager API for locally stored keys.
:::

:::tip Beacon Chain needs to be synced for use
Both Keymanager APIs are only supported when the beacon chain syncs.
:::


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
