import Peer from 'peerjs';

import { peerOptions } from './useServerState';
import { DataInterface, serverState } from './useServerState.types';

type T_createServer = (
  client: string,
  servername: string,
  state: serverState,
) => Promise<serverState | Partial<serverState>>;

const createServer: T_createServer = (client, servername, state) => {
  return new Promise((resolve) => {
    const newPeer = new Peer(servername, peerOptions);

    newPeer.on('connection', function (connect) {
      connect.on('data', (data) => {
        const Data: DataInterface = data as DataInterface;
        if (Data.clientId !== undefined) {
          const conn = newPeer.connect(Data.clientId);

          resolve({
            server: {
              ...state.server,
              users: [...state.server.users, conn],
            },
            username: client,
          });

          conn.on('open', () => {
            conn.send({ clientId: Data.clientId });
          });
          conn.on('data', (data) => {
            const Data: DataInterface = data as DataInterface;

            if (Data.state !== undefined) {
              state.changeState(Data.state);
            }
          });
        }
      });
    });
  });
};

export { createServer };
