import React, { useState } from 'react';

import useServerState from '../server/useServerState';
import styles from './ClientServer.module.scss';

const Client = () => {
  const [client, setClient] = useState<string>('');
  const [servername, setServername] = useState<string>('');

  const connectToServer = useServerState((state) => state.client.connectToServer);
  const server = useServerState((state) => state.client.server);

  const submitServerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    connectToServer(client, servername);
  };

  const count = useServerState((state) => state.state.count);
  const changeState = useServerState((state) => state.changeState);

  const changeCounter = (n: number) => {
    const newCount = count + n;
    changeState({ count: newCount });
  };

  return (
    <>
      <form className={styles.form} onSubmit={submitServerHandler}>
        <h1 className={styles.form_title}>Покдлючение к серверу</h1>

        <input
          className={styles.form_input}
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          placeholder={'Имя пользователя'}
        />

        <input
          className={styles.form_input}
          type="text"
          value={servername}
          onChange={(e) => setServername(e.target.value)}
          placeholder={'Название сервера'}
        />

        <button className={styles.form_btn}>подключится</button>
      </form>
      {server !== undefined ? (
        <div>
          <p>count: {count}</p>
          <button onClick={() => changeCounter(1)}>increment</button>
          <button onClick={() => changeCounter(-1)}>decrement</button>
        </div>
      ) : null}
    </>
  );
};

export default Client;
