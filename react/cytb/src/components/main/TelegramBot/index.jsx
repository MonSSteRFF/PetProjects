import React, { useRef, useState } from "react";

import Button from "../../ui/Button";

import styles from "./telegramBot.module.scss";

const TelegramBot = () => {
  const refWrapper = useRef();
  const refFreq = useRef();

  const params = {
    minLeft: 0,
    minTop: 0,
    minWidth: 700,
    minHeight: 700,
  };
  //freqParams
  const [fqLeft, setFqLeft] = useState(0);
  const [fqTop, setFqTop] = useState(0);
  const [fqWidth, setFqWidth] = useState(700);
  const [fqHeight, setFqHeight] = useState(700);

  // mouseEvents
  const [mouseInFreq, setMouseInFreq] = useState(false);
  const [mouseClickFreq, setMouseClickFreq] = useState(false);

  const mouseWheelEvent = (event) => {
    if (mouseInFreq && mouseClickFreq) {
      //const deltaChange = event.deltaY * -0.01;
      if (params.minHeight && params.minHeight) {
        setFqWidth(700);
        setFqHeight(700);
      }
    }
  };

  const mouseGrabEvent = (event, bool) => {
    setMouseClickFreq(bool);
    if (bool) {
      refWrapper.current?.classList.add(styles.grabbing);
    } else {
      refWrapper.current?.classList.remove(styles.grabbing);
    }
  };

  document.onmousemove = (e) => {
    if (mouseInFreq && mouseClickFreq) {
      setFqTop(e.clientY - refFreq.current.offsetTop);
      setFqLeft(e.clientX - refFreq.current.offsetLeft);
    }
  };

  return (
    <main className={"container " + styles.telegramMain}>
      <aside className={styles.aside}>
        <Button>{"create new line"}</Button>
      </aside>

      <section className={styles.section}>
        <p>{"Bot settings"}</p>

        <div
          ref={refFreq}
          className={styles.freq}
          style={{}}
          onMouseEnter={() => setMouseInFreq(true)}
          onMouseLeave={() => setMouseInFreq(false)}
          onWheel={(e) => mouseWheelEvent(e)}
          onMouseDown={(e) => mouseGrabEvent(e, true)}
          onMouseUp={(e) => mouseGrabEvent(e, false)}
        >
          <div
            ref={refWrapper}
            className={styles.freq__wrapper}
            style={{
              width: fqWidth,
              height: fqHeight,
              left: fqLeft,
              top: fqTop,
            }}
          ></div>
        </div>
      </section>
    </main>
  );
};

export default TelegramBot;
