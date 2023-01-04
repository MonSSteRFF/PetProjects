import React, { useState } from "react";
import useTranslate from "./lang/useTranslate";

const langs = ["ru", "en"];
export interface I_texts {
  lang: string;
  text: string;
  another: string;
}

function App() {
  const [langValue, setLangValue] = useState<string>("ru");
  const { Tran, files } = useTranslate(langs, langValue);
  const { lang, text, another } = files;

  return (
    <div className="App">
      <p>
        {lang}
        {langValue}
      </p>
      {langs.map((lang, index) => (
        <button
          key={index}
          disabled={lang === langValue}
          onClick={() => setLangValue(lang)}
        >
          {lang}
        </button>
      ))}

      <p>
        <Tran text={text} />
      </p>
      <p>
        <Tran text={another} />
      </p>
    </div>
  );
}

export default App;
