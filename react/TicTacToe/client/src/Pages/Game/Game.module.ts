import { E_Player, I_Table } from './Game.types';

const createTable = (width?: number) => {
  width ||= 3;

  const _row = [];
  const _table = [];

  for (let i = 0; i < width; i++) {
    _row.push('');
  }
  for (let i = 0; i < width; i++) {
    _table.push(_row);
  }

  return _table;
};

const checkWin = (table: I_Table) => {
  const tableWidth: number = table[0].length;

  const checkRows = (table: I_Table) => {
    let win = false;

    for (let i = 0; i < tableWidth - 1; i++) {
      const row = table[i];
      const x_arr = row.filter((item) => item === E_Player.x);
      const y_arr = row.filter((item) => item === E_Player.o);

      if (x_arr.length === tableWidth) {
        win = true;
      }
      if (y_arr.length === tableWidth) {
        win = true;
      }
    }

    return win;
  };

  const checkColumns = (table: I_Table) => {
    const columns: I_Table = [];

    for (let i = 0; i < tableWidth; i++) {
      table.forEach((rows) => {
        if (columns[i] === undefined) {
          columns.push([]);
        }
        columns[i].push(rows[i]);
      });
    }

    return checkRows(columns);
  };

  const checkDiagonal = (table: I_Table) => {
    // tableWidth
    // todo: диагонали в таблице

    return false;
  };

  return checkColumns(table) || checkRows(table) || checkDiagonal(table);
};

export { checkWin, createTable };
