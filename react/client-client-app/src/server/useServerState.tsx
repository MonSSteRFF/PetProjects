import Peer from 'peerjs';
import create from 'zustand';

import { connectToServer } from './connectToServer';
import { createServer } from './createServer';
import { DataInterface, serverState } from './useServerState.types';

export const peerOptions = {
  host: '26.16.126.211',
  port: 9000,
  path: '/',
};

const useServerState = create<serverState>((set, get) => ({
  username: '',
  client: {
    server: undefined,
    connectToServer: async (client, servername) => {
      set(await connectToServer(client, servername, get()));

      setTimeout(() => {
        if (get().client.server === undefined) {
          alert('название сервера неверное или username уже занят');
        }
      }, 1000);
    },
  },
  server: {
    users: [],
    createServer: async (client, servername) => {
      set(await createServer(client, servername, get()));
    },
  },
  state: {
    count: 0,
  },
  changeState: (newState) =>
    set((state) => {
      if (newState !== state.state) {
        const serverState = { state: { ...state.state, ...newState } };

        if (state.client.server !== undefined) {
          state.client.server.send(serverState);
        }
        if (state.server.users.length !== 0) {
          state.server.users.forEach((user) => {
            user.send(serverState);
          });
        }
        return serverState;
      }
      return state;
    }),
}));

export default useServerState;
