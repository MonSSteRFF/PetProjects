type I_TableRow = Array<string>;
type I_Table = Array<I_TableRow>;

enum E_Player {
  'x' = 'x',
  'o' = 'o',
}

export type { I_Table, I_TableRow };

export { E_Player };
