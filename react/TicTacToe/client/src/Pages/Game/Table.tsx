import React, { useEffect, useMemo } from 'react';

import { E_Player, I_Table } from './Game.types';
import useGame from './store/useGame';
import styles from './Table.module.scss';

const Table: React.FC<{ table: I_Table }> = ({ table }) => {
  const nextStep = useGame(({ modules }) => modules.nextStep);
  const endGame = useGame(({ state }) => state.endGame);

  const clickHandler = (X_index: number, Y_index: number, item: E_Player | string) => {
    if (item === '' && !endGame) {
      nextStep(X_index, Y_index);
    }
  };

  return useMemo(() => {
    return (
      <div className={styles.table}>
        {table.map((row, Y_index) => (
          <div key={Y_index} className={styles.tableRow}>
            {row.map((item, X_index) => (
              <button
                key={X_index}
                className={styles.tableItem}
                onClick={() => clickHandler(X_index, Y_index, item)}
              >
                {item === E_Player.x ? <span className={styles.item_x} /> : null}
                {item === E_Player.o ? <span className={styles.item_o} /> : null}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  }, [table]);
};

export default Table;
