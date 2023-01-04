import React, { FC } from "react";

const Translate: FC<{ text: string }> = ({ text }) => {
  const splitedText = text.split("|");

  const values = splitedText.map((text, href) => {
    if (text.charAt(0) === "%") {
      const textArr = text.slice(1, text.length - 1).split("?", 2);
      const textAttr = textArr[1].split("&");
      const gAttr: { href: string; color: string } = {
        href: "",
        color: "",
      };

      textAttr.forEach((attr) => {
        const _attr: string[] = attr.split("=");

        switch (_attr[0]) {
          case "link":
            gAttr.href = _attr[1];
            break;
          case "color":
            gAttr.color = _attr[1];
            break;
        }
      });

      const colorClass = gAttr.color !== "" ? `color__${gAttr.color}` : "";

      if (gAttr.href !== "") {
        return (
          <a href={gAttr.href} className={colorClass}>
            {textArr[0]}
          </a>
        );
      } else {
        return <span className={colorClass}>{textArr[0]}</span>;
      }
    } else {
      return text;
    }
  });

  return (
    <>
      {values.length === 0 ? (
        <React.Fragment>{values[0]}</React.Fragment>
      ) : (
        values.map((text, index) => (
          <React.Fragment key={index}>{text}</React.Fragment>
        ))
      )}
    </>
  );
};

type T_useTranslate = (
  availableLangs: string[],
  currentLang: string
) => { files: any; Tran: FC<{ text: string }> };

const useTranslate: T_useTranslate = (availableLangs, currentLang) => {
  const langFiles = {};

  availableLangs.forEach((lang) => {
    try {
      // @ts-ignore
      langFiles[`${lang}`] = require(`./${lang}.json`);
    } catch (error) {
      console.error(`${lang}.json - file has undefined`);
    }
  });

  // @ts-ignore
  return { files: langFiles[currentLang], Tran: Translate };
};

export default useTranslate;
