import create from 'zustand';

import { checkWin, createTable } from '../Game.module';
import { E_Player, I_Table } from '../Game.types';

interface I_useGame_State {
  table: I_Table;
  currentPlayer: E_Player;
  endGame: boolean;
}

interface I_useGame_modules {
  nextStep: (x: number, y: number) => void;
}

interface I_useGame {
  state: I_useGame_State;
  modules: I_useGame_modules;
}

const useGame = create<I_useGame>((set) => ({
  state: {
    table: createTable(),
    currentPlayer: E_Player.x,
    endGame: false,
  },
  modules: {
    nextStep: (x, y) =>
      set((store) => {
        const state = Object.assign({}, store.state);
        let nextPlayer: E_Player;

        const newTable = state.table.map((rows, Y_index) =>
          rows.map((item, X_index) => {
            if (Y_index === y && X_index === x) {
              return state.currentPlayer;
            }
            return item;
          }),
        );

        const endGame = checkWin(newTable);

        if (endGame) {
          nextPlayer = state.currentPlayer;
        } else {
          switch (state.currentPlayer) {
            case E_Player.x: {
              nextPlayer = E_Player.o;
              break;
            }
            case E_Player.o: {
              nextPlayer = E_Player.x;
              break;
            }
          }
        }

        return {
          state: { table: newTable, currentPlayer: nextPlayer, endGame: endGame },
        };
      }),
  },
}));

export default useGame;
