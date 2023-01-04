import React from "react";

import style from "./FormUI.module.scss";

import Input from "../Input";
import Button from "../Button";
import Checkbox from "../checkbox";

const FormUI = (props) => {
  const { inputs, inputs2, formTitle, buttons, links, checkBoxes } = props;

  return (
    <div className={style.form}>
      <form
        className={
          inputs2 !== undefined
            ? style.form__wrapper__columns
            : style.form__wrapper
        }
      >
        {formTitle !== undefined ? (
          <p className={style.form__title}>{formTitle}</p>
        ) : null}

        <div className={style.inputsBox}>
          {inputs !== undefined ? (
            <div className={style.column}>
              {inputs?.map((item, index) => (
                <Input
                  key={index}
                  type={item.type}
                  placeholder={item.placeholder}
                  autocomplete={item.autocomplete}
                  value={item.value}
                  onChange={item.onChange}
                />
              ))}
            </div>
          ) : null}
          {inputs2 !== undefined ? (
            <div className={style.column}>
              {inputs2?.map((item, index) => (
                <Input
                  key={index}
                  type={item.type}
                  placeholder={item.placeholder}
                  autocomplete={item.autocomplete}
                  value={item.value}
                  onChange={item.onChange}
                />
              ))}
            </div>
          ) : null}
        </div>

        {checkBoxes !== undefined ? (
          <div className={style.checkboxes}>
            {checkBoxes?.map((item, index) => (
              <Checkbox item={item} key={index} />
            ))}
          </div>
        ) : null}

        {buttons !== undefined ? (
          <div className={style.buttons}>
            {buttons?.map((item, index) => (
              <Button
                key={index}
                onClick={item.onClick}
                {...(item?.attr !== undefined ? item.attr : "")}
              >
                {item.text}
              </Button>
            ))}
          </div>
        ) : null}

        {links !== undefined ? (
          <div className={style.links}>
            {links?.map((item, index) => (
              <button
                className={style.links__item}
                onClick={item.onClick}
                key={index}
              >
                {item.text}
              </button>
            ))}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default FormUI;
