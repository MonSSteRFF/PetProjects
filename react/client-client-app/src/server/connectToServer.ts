import Peer from 'peerjs';

import { peerOptions } from './useServerState';
import { DataInterface, serverState } from './useServerState.types';

type T_connectToServer = (
  client: string,
  servername: string,
  state: serverState,
) => Promise<serverState | Partial<serverState>>;

const connectToServer: T_connectToServer = (client, servername, state) => {
  return new Promise((resolve) => {
    const newPeer = new Peer(client, peerOptions);

    const connect = newPeer.connect(servername);
    connect.on('open', () => {
      connect.send({ clientId: client });
    });

    newPeer.on('connection', function (connect) {
      connect.on('data', (data) => {
        const Data: DataInterface = data as DataInterface;

        if (Data.state !== undefined) {
          resolve({ state: Data.state, username: client });
        }
      });

      resolve({ client: { ...state.client, server: connect }, username: client });
    });
  });
};

export { connectToServer };
