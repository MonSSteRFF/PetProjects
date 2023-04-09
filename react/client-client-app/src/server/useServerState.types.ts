import { DataConnection } from 'peerjs';

interface mutableState {
  count: number;
}

interface DataInterface {
  clientId: string;
  state: mutableState;
}

interface serverState {
  username: string;
  client: {
    server: DataConnection | undefined;
    connectToServer: (client: string, servername: string) => void;
  };
  server: {
    users: DataConnection[];
    createServer: (client: string, servername: string) => void;
  };
  state: mutableState;
  changeState: (newState: mutableState) => void;
}

export type { DataInterface, mutableState, serverState };
