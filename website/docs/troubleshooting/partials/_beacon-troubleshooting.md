<table>
    <tr>
        <th style={{minWidth: 180 + 'px'}}>Scenario</th>
        <th>Solution</th>
    </tr>
    <tr>
      <td>Waiting for peers / peer disconnected / no active peers: <code>Waiting for enough suitable peers before syncing...</code> <code>msg="Peer disconnected" active=0</code></td>
      <td>Peers will continuously disconnect and reconnect, so don't worry about <code>Peer disconnected</code> messages. If your Agora node is struggling to find peers: <br/>
      <ul>
          <li>Your Agora node might be suffering from connectivity problems. Visit <a href='/docs/agora-cl-usage/p2p-host-ip'>Improve P2P connectivity</a> for connectivity troubleshooting guidance. Ensure that your firewall isn't restricting any <strong>outbound</strong> ports for Agora-cl.</li>
          <li>You may be using an incorrect genesis state or network flag. Every test network requires its own genesis state and network flag. Visit our <a href='../install/install-with-script'>Quickstart</a> for the latest test network parameters.</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>Beacon node is stuck during initial sync.</td>
      <td>If your node seems stuck (either doing nothing, or stuck in a loop) while syncing, a restart will usually resolve the problem. If you're on Windows, try selecting your console output window and hitting <code>ENTER</code> - this can "unpause" a paused console output stream.</td>
    </tr>
    <tr>
      <td>Node is currently optimistic and cannot serve validators: <code>level=error msg="Could not request attestation to sign at slot" error="rpc error: code = Unavailable desc = the node is currently optimistic and cannot serve validators" prefix=validator pubKey=0x01234 slot=65740</code></td>
      <td>This usually means that your execution client isn't yet synchronized. Visit <a href='../monitoring/checking-status'>Check Node and Validator Status</a> to learn how to check the sync status of your execution client.</td>
    </tr>
    <tr>
      <td><code>Could not read JWT secret</code>, <code>Could not access JWT secret</code></td>
      <td>You, your terminal window, or the script you're using may not have the permissions required in order to read or write your JWT token. Try elevating privileges or running as Administrator (if you're on Windows).</td>
    </tr>
    <tr>
      <td><code>could not get ancestor state: failed to unmarshal encoding: incorrect size</code></td>
      <td>This usually indicates that your Agora node's data has become corrupt. Try restarting your Agora node with a new or cleared data directory.</td>
    </tr>
    <tr>
      <td>
        <code>could not check configuration values between execution and consensus client error: timeout from http.Client</code><br/><br/>
        <code>403 signature invalid</code><br/><br/>
        <code>Could not connect to execution client endpoint" error="could not make initial request to verify execution chain ID: 401 Unauthorized</code><br/><br/>
        <code>level=error msg="Could not connect to execution client endpoint" error="could not make initial request to verify execution chain ID: Post "http://localhost:8551/": dial tcp 127.0.0.1:8551: connect: connection refused" prefix=powchain</code><br/><br/>
        <code>warning msg="Batch is not processed" error="could not process block in batch: timeout from http.Client: received an undefined ee error. </code><br/><br/>
        <code>warning msg="Batch is not processed" error="could not process block in batch: got an unexpected error in JSON-RPC response: 403 Forbidden: signature is invalid</code>
      </td>
    </tr>
    <tr>
      <td><code>Agora node doesn't have a parent in db with root...</code></td>
      <td>If you see blocks advancing, then this can usually be ignored. If you don't see blocks advancing, there are likely other warnings and/or errors that will help you troubleshoot.</td>
    </tr>
</table>
