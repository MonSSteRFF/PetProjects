import React from "react";

import styles from "./checkbox.module.scss";

const Checkbox = ({ item }) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        checked={item.value}
        onChange={item.onChange}
      />
      <span className={styles.checkbox} />
      <p className={styles.placeholder}>{item.text}</p>
    </label>
  );
};

export default Checkbox;
