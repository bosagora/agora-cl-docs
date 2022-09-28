---
id: prepare-for-merge
title: Prepare for The Merge
sidebar_label: Prepare for The Merge
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JwtGuidancePartial from '@site/docs/partials/_jwt-guidance-partial.md';


:::info New user?

This guidance is targeted at users who are already running Agora-cl. If you're starting from scratch, see our [Quickstart](./install/install-with-script.md).

:::

## Select a configuration

import MultidimensionalContentControlsPartial from '@site/docs/partials/_multidimensional-content-controls-partial.md';

<MultidimensionalContentControlsPartial />


## Merge preparation checklist


<div class='hide-tabs mergeprep-guide'>

<div class='checklist'>
    <div class='task'>
        <div class='input-container'><input id="cl-1" type='checkbox'/><span class='done'></span></div>
        <div class='guidance-container'>
            <label for="cl-1">Use Agora-cl v3.1.1</label>
            <p><a href='https://github.com/zeroone-boa/agora-cl/releases/tag/v3.1.1'>Agora-cl v3.1.1</a> is a <strong>Merge-ready release</strong>. Review the <a href='https://github.com/zeroone-boa/agora-cl/releases/tag/v3.1.1'>release notes</a> to understand how this release impacts your configuration.</p>
        </div>
    </div>
    <div class='task'>
        <div class='input-container'><input id="cl-5" type='checkbox'/><span class='done'></span></div>
        <div class='guidance-container'>
            <label for="cl-5">Unset <code>USE_PRYSM_VERSION</code></label>
            <p>If you've ever set the <code>USE_PRYSM_VERSION</code> environment variable to use a release candidate, either clear it via <code>UNSET USE_PRYSM_VERSION</code> (Linux/MacOS) or <code>set USE_PRYSM_VERSION=</code> (Windows).</p>
        </div>
    </div>
        <div class='task'>
        <div class='input-container'><input id="cl-6" type='checkbox'/><span class='done'></span></div>
        <div class='guidance-container'>
            <label for="cl-6">Verify your Agora-cl version</label>
            <p>Verify that you're running Agora-cl <code>v3.1.1</code> by issuing the following command: <code>agora-cl.sh beacon-chain --version</code> (Linux) <code>agora-cl.bat beacon-chain --version</code> (Windows).</p>
        </div>
    </div>
    <div class='task'>
        <div class='input-container'><input id="cl-2" type='checkbox'/><span class='done'></span></div>
        <div class='guidance-container'>
            <label for="cl-2">Review "Before and now"</label>
            <p>The <a href='#the-merge-before-and-now'>Before and now</a> section below gives you a high-level overview of the items that you need to keep in mind while preparing for The Merge. <a href='https://launchpad.bosagora.io/en/merge-readiness'>Merge readiness checklist</a> for more detailed information.</p>
        </div>
    </div>
    <div class='task'>
        <div class='input-container'><input id="cl-prereqs" type='checkbox'/><span class='done'></span></div>
        <div class='guidance-container'>
            <label for="cl-prereqs">Review system requirements</label>
            <p>Review the <a href='#post-merge-system-requirements'>post-Merge system requirements</a> section below to ensure that your configuration will support The Merge. Note that <strong>a 2TB+ SSD is highly recommended</strong>.</p>
        </div>
    </div>
    <div class='task'>
        <div class='input-container'><input id="cl-3" type='checkbox'/><span class='done'></span></div>
        <div class='guidance-container'>
            <label for="cl-3">Use a Merge-ready version of your execution client</label>
            <p>
                <Tabs className="tabgroup-with-label" groupId="execution-clients" defaultValue="agora-el" values={[
                {label: 'Execution client:', value: 'label'},
                {label: 'Agora', value: 'agora-el'}
                ]}>
                    <TabItem value="agora-el">Use <code>agora-el version</code> to check the version. See <a href='https://github.com/zeroone-boa/agora-el/releases'>Agora-el's releases page</a> and join <a href='(https://t.me/bosagora_eng'>Telegram</a> to stay up to date as we approach Mainnet Merge.</TabItem>
                </Tabs>
            </p>
        </div>
    </div>
    <Tabs className="tabgroup-with-label" groupId="protocol" defaultValue="jwt" values={[
        {label: 'EN-BN connection:', value: 'label'},
        {label: 'HTTP-JWT', value: 'jwt'},
        {label: 'IPC', value: 'ipc'}
    ]}>
        <TabItem value="jwt">
            <div class='task'>
                <div class='input-container'><input id="cl-7" type='checkbox'/><span class='done'></span></div>
                <div class='guidance-container'>
                    <label for="cl-7">Configure JWT</label>
                    <p>If you're not using IPC to connect your Agora node and execution node, ensure that both your execution node and Agora node are configured to use JWT authentication. These instructions are included below, and are also available here: <a href='./execution-node/authentication'>Configure JWT</a></p>
                </div>
            </div>
        </TabItem>
        <TabItem value="ipc"></TabItem>
    </Tabs>
    <div class='task'>
        <div class='input-container'><input id="cl-8" type='checkbox'/><span class='done'></span></div>
        <div class='guidance-container'>
            <label for="cl-8">Update your firewall</label>
            <p>If you're not using IPC to connect your Agora node and execution node, your Agora node will need to connect to its execution node on port <code>8551</code>. Previously, port <code>8545</code> was used. If your Agora node and execution node are on different host machines, ensure that your firewall rules are updated accordingly, and refer to <a href='./agora-cl-usage/p2p-host-ip'>Configure ports and firewalls for improved network connectivity</a> for general connectivity improvement tips.</p>
        </div>
    </div>
    <div class='task'>
        <div class='input-container'><input id="cl-9" type='checkbox'/><span class='done'></span></div>
        <div class='guidance-container'>
            <label for="cl-9">Configure a fee recipient address</label>
            <p>If you're running a validator, configuring a fee recipient address will allow you to earn what were previously miners' transaction fee tips. Instructions are provided below, and also here: <a href='./execution-node/fee-recipient'>Configure a Fee Recipient address</a>.</p>
        </div>
    </div>
    <div class='task'>
        <div class='input-container'><input id="cl-expected" type='checkbox'/><span class='done'></span></div>
        <div class='guidance-container'>
            <label for="cl-expected">Ensure that Agora-cl is running as expected</label>
            <p>See <a href='./monitoring/checking-status'>Check node and validator status</a> to learn how to check the status of your execution node, Agora node, and validator node.</p>
        </div>
    </div>
</div>


## The Merge: Before and now

| Before                                                                                                         | Now                                                                                                                                      |
|----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| You don't need to run a local execution client. You can use a service like Infura instead.                     | You **do** need to run an execution client. You **can't** use Infura as an execution endpoint provider.                                  |
| The HTTP connection between Agora node and execution node doesn't need to be authenticated using a JWT token. | The HTTP connection between Agora node and execution node **does** need to be authenticated using a JWT token.                          |
| Beacon nodes connect to execution nodes on port `8545` by default when using HTTP.                             | Beacon nodes connect to execution nodes on port **`8551`** by default when using HTTP.                                                   |
| Miners receive transaction fee tips.                                                                           | **Validators** receive transaction fee tips. The "fee" is now a base fee that's burned - block producers earn only transaction fee tips. |
| A fee recipient address does not need to be specified.                                                         | A fee recipient address **does** need to be specified.                                                                                   |
| A 1TB hard drive is enough.                                                                                    | A **2TB+ SSD** is highly recommended.                                                                                                    |


## Post-Merge system requirements

import QuickstartPrereqsPartial from '@site/docs/install/partials/_quickstart-prereqs.md';

<QuickstartPrereqsPartial />


<Tabs className="tabgroup-with-label hidden-in-jwt-guide" defaultValue="jwt" groupId="protocol" values={[
        {label: 'EN-BN connection:', value: 'label'},
        {label: 'HTTP-JWT', value: 'jwt'},
        {label: 'IPC', value: 'ipc'}
    ]}>
    <TabItem value="jwt">

<h2>Configure JWT authentication</h2>

<JwtGuidancePartial />

</TabItem>
<TabItem value="ipc"></TabItem>
</Tabs>

</div>

## Configure validator node

import FullSyncWarningPartial from '@site/docs/partials/_full-sync-warning-partial.md';

<FullSyncWarningPartial />

Other than ensuring that you're using the [latest stable Agora-cl release](https://github.com/zeroone-boa/agora-cl/releases), validator client configuration doesn't need to be updated for The Merge. A fee recipient address can optionally be configured on your validator node if you want redundancy or multiple fee recipient addresses. See [Configure a Fee Recipient address](./execution-node/fee-recipient.md) to learn more.

import SingletonWarningPartial from '@site/docs/partials/_singleton-warning-partial.md';

<SingletonWarningPartial />


:::tip Congratulations!

You’re now ready for The Merge. If you have any questions, feel free ask them on our [Telegram](https://t.me/bosagora_eng).

:::


## Frequently asked questions

**I'm currently running a validator on Ethereum Mainnet. When should I make changes?** <br />
You can now make these changes, regardless of the network you're running on.

**Can I use IPC post-Merge?** <br />
Yes. You also won't have to worry about JWT if you use IPC. See our [Quickstart](./install/install-with-script.md) for IPC instructions.

**Can I use a light node with Agora-cl, or do I need to run a full execution node?** <br />
No - at this time, a full node is required.


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
