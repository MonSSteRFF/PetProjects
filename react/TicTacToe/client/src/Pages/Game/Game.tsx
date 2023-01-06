import { Typography } from '@mui/material';
import React from 'react';

import styles from './Game.module.scss';
import useGame from './store/useGame';
import Table from './Table';

const Game = () => {
  const table = useGame(({ state }) => state.table);
  const currentPlayer = useGame(({ state }) => state.currentPlayer);
  const endGame = useGame(({ state }) => state.endGame);

  return (
    <>
      <div className={styles.headerGame}>
        <Typography variant="h3" component="h1" className={styles.title}>
          Tic Tac Toe
        </Typography>
        <Typography variant="h5" component="p">
          {endGame ? `game end` : `current player: ${currentPlayer}`}
        </Typography>
      </div>

      <Table table={table} />
    </>
  );
};

export default Game;
