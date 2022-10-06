import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JwtGenerationPartial from '@site/docs/partials/_jwt-generation-partial.md';

<JwtGenerationPartial />

## Configure execution node

Your execution node needs to **expose a new port** and then **use the JWT token** to authenticate your Agora node's connection to that port.

<p class="hidden-in-mergeprep-guide">Using the latest version of your execution client software, issue the following command to configure your execution node's JWT token and Engine API endpoint:</p>

import QuickstartRunExecutionNodeJWTPartial from '@site/docs/install/partials/_quickstart-run-agora-el-node.md';

<QuickstartRunExecutionNodeJWTPartial />

## Configure Agora node

Next, we'll configure your Agora node to consume your JWT token so it can form an authenticated HTTP connection with your execution node.

import QuickstartRunBeaconNodePartial from '@site/docs/install/partials/_quickstart-run-agora-cl-node.md';

<QuickstartRunBeaconNodePartial />
