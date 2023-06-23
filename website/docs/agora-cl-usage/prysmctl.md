---
id: prysmctl
title: Use agora-cl-ctl
sidebar_label: Use agora-cl-ctl
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget commaDelimitedContributors="James"/>

`agora-cl-ctl` is a command-line utility for common and one-off Ethereum proof-of-stake tasks, like helping users with validator exits or withdrawals. Most `prysmctl` commands require access to a fully synced beacon node.


### Run via binaries

Binaries for the latest `agora-cl-ctl` tool can be found on the [latest prysm release page](https://github.com/prysmaticlabs/prysm/releases). Each binary is a unique version with its own set of features. New releases may include new features for `prysmctl` that will need to be downloaded separately. The installed binaries will need to be renamed to `prysmctl` to use the example below.

:::info

Some users will need to give permissions to the downloaded binaries to be executable. Linux users can do this by right clicking the file, going to permissions, and clicking the `Allow executing file as program` checkmark. This may be different for each operating system.

:::

Example of running agora-cl-ctl by opening a terminal at the installed location after renaming.
```
./agora.sh exec cl-ctl --help
```

The binaries can be run through a terminal directly and won't need installation. Please refer to the **list commands** section for additional information.


### List commands

```
./agora.sh exec cl-ctl --help
```

**Using Docker**
```
docker run -it bosagora/agora-cl-ctl:v2.0.0 --help
```

The `—help` flag will provide a list of commands, subcommands, and flags to use.

### Frequently asked questions

**Q: One of the Agora-cl guides tells me to use a `agora-cl-ctl` command that isn't available. What do I do?**

A: You may be using an older version of `agora-cl-ctl` and are required to download a newer version.
