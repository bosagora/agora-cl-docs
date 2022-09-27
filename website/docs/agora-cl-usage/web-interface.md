---
id: web-interface
title: Use Agora-cl's web UI
sidebar_label: Use Agora-cl's web UI
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget />

## What is Agora-cl's web UI?

The Agora-cl Web UI is a locally hosted website that is launched from the validator client to provide users with a visual alternative to the validator cli( command-line interface).

The website will provide users with a visual way to set up their Agora-cl Wallet, manage their keys, and provide information on the current state of their validator. You will also be able to see a peer map for users who decide to share their location among the peers in their network.

The website at this time does not provide additional metrics over those that you would find on your Grafana dashboards or beaconcha.in.

## Launching and Logging In

To begin, follow the instructions to run Agora-cl in mainnet or testnet:

- [Joining Mainnet](/docs/install/install-with-script)

To launch the web interface, you will need to restart your validator client from step 1 with the `--web` flag. This will allow you to access the web interface by default on `http://localhost:7500` if running on the same computer as your validator client and using `agora-cl.sh`, `agora-cl.bat` or building from source.

Agora-cl protects web users with a special URL for authentication instead of requiring the user to remember a password. The URL can be retrieved in the terminal logs where the `validator --web` command was run. please copy it into a web browser to initialize the website with authentication. The base url `http://127.0.0.1:7500` or `http://localhost:7500` may differ based on your own validator settings.

example of URL in logs

```
[2021-10-21 14:07:28]  INFO rpc: Once your validator process is running, navigate to the link below to authenticate with the Agora-cl web interface
[2021-10-21 14:07:28]  INFO rpc: http://127.0.0.1:7500/initialize?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQzMzIyOTJ9.EgkawrXjxSkO26FcwuiB6IFI-KUMyLAc9FKkuLOTHl8&expiration=1634332292
```

:::tip Print your unique authentication URL again
Sometimes your browser cache gets cleared requiring you to reauthenticate, or you want to retrieve a new URL with token without restarting the validator.
In that case, you can run the following command `validator web generate-auth-token`
:::

:::warning Auth Token must be located inside the wallet directory you are running the validator on
The `--wallet-dir` flag can also be added to the `validator web generate-auth-token` command to specify the specific location where the auth token would apply. This is important when running the validator with a wallet directory that is not in the default directory. When this happens the website may return an invalid token page.
:::

:::tip 3rd party tools
Third party tools such as DAppNode will initialize the user without use of the cli commands and will automatically redirect users to the dashboard. These tools will typically use the generated `auth-token` file located in the Agora-cl Wallet directory.
:::

If it is the first time you have ran your Agora-cl validator and have not yet created a wallet, you will be faced with a wallet creation screen allowing you to import the keystores generated from the Ethereum `deposit-cli`.

![Image](/img/walletcreate.png)

upon completion of onboarding, your web page should always redirect you to the main dashboard.

## Configuration

### Managing Ports

The web UI runs by default on port 7500 of the validator client if you are running with the `--web` flag. To customize this port, change the following flag to your liking:

```
--grpc-gateway-port (default: 7500 for validator)
```

The available parameters to customize are:

| Flag                  | Usage                                                                  |
|-----------------------|:-----------------------------------------------------------------------|
| `--grpc-gateway-host` | The host for the validator client's JSON-HTTP API, default `127.0.0.1` |
| `--grpc-gateway-port` | The port for the validator client's JSON-HTTP API, default `7500`      |

### Wallet Directory

the `--wallet-dir` flag will determine the location where your auth token as well as other related configurations are stored. you can provide this flag with a file director to change it from the default location.

### Accessing the web interface from a remote computer

If you are running your Agora node and validator on some server that you want to access from the outside, we recommend SSH local port forwarding to access it. For example, you would do the following from your home computer:

```
ssh -L 7500:127.0.0.1:7500 user@host_ip
```

where you replace `user@host_ip` with the user and host ip address of the remote machine you are trying to access. This will forward all requests from your home computer's localhost:7500 to the remote instance's localhost:7500, allowing you to visit `http://localhost:7500` from your favorite browser and then access the validator web interface! This is the safest approach to access it, as you are exposing the web interface to the open Internet.

:::warning Please use HTTPS
If you plan to expose the website to the open Internet, please look into protecting yourself with HTTPS. Agora-cl web does not come with certificates or HTTPS pre-configured. If you are running Agora-cl Web on the open internet without HTTPS you are running at your own risk.
:::

## Troubleshooting

### Issues logging in

If your browser cache was cleared, you're running on a new browser, or validator was restarted you may be stuck on the initialize page. All you need to do is retrieve the special URL again and you should be re-authenticated which will redirect you to the main dashboard.

![Dialog-expanded](/img/dialog-error-expanded.png "dialog error expanded")

### HTTP Error Codes

| Error Code | Reason                                                                                                                                                         |
|------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 503 or 0   | No server response, services having difficulty communicating, meaning network problems, or services being un available, or even firewalls or adblock settings. |
| 401        | Unauthorized, requiring to reauthenticate with the special url                                                                                                 |
| 500        | Internal Server Error, something failed internally in Agora-cl services                                                                                           |
| 404        | API endpoint is not found                                                                                                                                      |

### Reporting Issues

Please create a [github issue](https://github.com/Bosagora) or contact the team on [Telegram](https://t.me/bosagora_eng) to report an issue

## Contributing

The web interface is open source and located at [github.com/zeroone-boa/agora-cl-web-ui](https://github.com/zeroone-boa/agora-cl-web-ui). It is an Angular application, and we always welcome your help!

### Prerequisites

- latest node
- ide (i.e. visual studio code)

after cloning the repo navigate to where the `package.json` file and run `npm install` to retrieve the dependencies you will need.

### Running in Develop

run `npm start` in the folder path where `package.json` lives and open the website on `localhost:4200`.

:::warning Web UI in development mode uses mock data by default
The recommended way to run agora-cl web is from the validator client itself via the `--web` flag. If you are building the web UI from source and doing `npm start`, you **will be using fake, mock data!** Keep that in mind if you are trying to use real accounts with the web UI.
:::

:::tip Develop URL login
for authentication in develop you may use any token in the url query parameter i.e. `localhost:4200/initialize?token=anytoken`
:::

### Running in Staging

run `npm run start:staging` will run a 'like' production build where the backend expects to be connected to `localhost:7500`. You will need to start the validator client with `--web` but interact with your angular application on `localhost:4200`.


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
