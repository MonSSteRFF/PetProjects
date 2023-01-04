import React, { useEffect, useState } from "react";

const useLang = (newLang) => {
  const [lang, setLang] = useState("ru");

  useEffect(() => {
    setLang(newLang);
  }, [newLang]);

  return lang;
};

export default useLang;
