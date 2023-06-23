---
id: deterministic
title: Create a Agora-cl wallet
sidebar_label: Create a Agora-cl wallet
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget />

## Background

Agora-cl features a built-in hierarchical deterministic (HD) wallet. HD wallets let you create new validator private keys deterministically from a seed phrase, shown as an English mnemonic following the [BIP-39 standard](https://en.bitcoin.it/wiki/Seed_phrase) upon wallet creation. If you created a deposit using the official [Ethereum launchpad](https://agora-staking.bosagora.org/) and want to run Agora-cl using it, see our dedicated instructions [here](/docs/install/install-with-script).

Validator private keys are encrypted with the wallet's password using the [EIP-2335](https://eips.ethereum.org/EIPS/eip-2335) keystore.json standard for storing BLS12-381 private keys. This keystore.json file, along with its derivation path, comprises an **account** in an HD wallet.

## Usage

### Wallet creation

To start using the HD wallet, you can create a new wallet using:

```bash
./agora.sh validator wallet create <folder>
```

### Wallet recovery

You can fully recover an HD wallet along with all its accounts from a 24-word english mnemonic phrase generated during the wallet's creation process (which you should have stored offline). To recover your HD wallet in Agora-cl, you can run

```bash
./agora.sh validator wallet recover <folder>
```

Output

```text
✔ Enter the wallet recovery phrase: layer write film stuff camp album strong ...
Enter a wallet directory: /Users/johndoe/Library/AgoraValidators/.agora-cl-wallet-v2
New wallet password: *********
Confirm password: *********
Enter how many accounts you would like to recover: 2
[2020-07-27 11:54:16]  INFO accounts: Successfully recovered HD wallet with 2 accounts. Please use accounts list to view details for your accounts. wallet-path=/Users/johndoe/Library/AgoraValidators/agora-cl-wallet-v2
```

:::info Recovering many accounts
Your accounts are generated deterministically from your recovery phrase, so you had 100 validator accounts on the wallet you want to recover, you can easily do so in Agora-cl.
:::

### List validator accounts

You can list all validator accounts in your HD wallet using the following command

```bash
./agora.sh validator accounts list
```

Where you'll see the following output

```bash
INFO accounts: (wallet path) /Users/johndoe/Library/AgoraValidators/agora-cl-wallet-v2

Showing **1** validator account
View the eth1 deposit transaction data for your accounts by running `validator accounts list --show-deposit-data

personally-conscious-echidna
[withdrawal public key] 0xa9c19b160cdc5c6dd74bf5a528d53b9a196ab8dda550e7e5858d84bf356952a310b826e269b9b462293f1c2812263161
[validating public key] 0x971d780edfe98743f41cdcdba8521548fc343ffcd958e90968c4f1cc5a2e9b6ea11a984397c34c6cc13e9d4e8d14ce1e
[created at] 16 minutes ago
```

import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
