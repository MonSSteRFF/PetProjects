import React, { FC } from "react";

import styles from "./Mybutton.module.scss";

interface I_Mybutton {
  children?: React.ReactNode;
  onClick: () => void;
}

const Mybutton: FC<I_Mybutton> = ({ children, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children !== undefined ? children : null}
    </button>
  );
};

export { Mybutton };
