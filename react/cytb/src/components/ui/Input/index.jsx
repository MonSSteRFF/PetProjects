import React, { useEffect, useRef, useState } from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  const { type, autocomplete, placeholder, value, onChange } = props;

  const ref = useRef();
  const [dif, setDif] = useState(0);
  const [lines, setLines] = useState([false, false, false, false]);

  const handleChange = (e) => {
    onChange(e);
    ref.current?.setAttribute("active", e.target.value.length > 0);
  };

  const handleChangePass = (e) => {
    onChange(e);
    ref.current?.setAttribute("active", e.target.value.length > 0);

    setLines([
      e.target.value.length > 8,
      e.target.value.length > 16,
      !/^[a-zA-Z0-9]+$/.test(e.target.value) && e.target.value.length > 0,
      e.target.value.replace(/^[a-zA-Z]+$/, "").length > 6,
    ]);
  };

  useEffect(() => {
    let int = 0;
    lines.forEach((item) => {
      if (item) {
        int = int + 1;
      }
    });
    setDif(int);
  }, [lines]);

  const Rows = ({ num }) => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(i < num);
    }
    return arr.map((item, index) => {
      return item === true ? (
        <div className={styles.lineTrue} key={index}>
          {item}
        </div>
      ) : (
        <div className={styles.line} key={index}>
          {item}
        </div>
      );
    });
  };

  return (
    <label className={styles.label}>
      {type === "password" ? (
        <input
          className={styles.input}
          ref={ref}
          type={type}
          autoComplete={autocomplete}
          value={value}
          onChange={(e) => handleChangePass(e)}
        />
      ) : (
        <input
          className={styles.input}
          ref={ref}
          type={type}
          autoComplete={autocomplete}
          value={value}
          onChange={(e) => handleChange(e)}
        />
      )}

      <span className={styles.placeholder} style={{ color: value }}>
        {placeholder}
      </span>

      {type === "password" ? (
        <div className={styles.lines}>{<Rows num={dif} />}</div>
      ) : null}
    </label>
  );
};

export default Input;
