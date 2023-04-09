import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const links = [
    { to: '/server', text: 'Создать сервер' },
    { to: '/client', text: 'Подключится' },
  ];

  return (
    <>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={link.to + index} className={styles.list_btn}>
            <Link to={link.to} className={styles.list_btn_link}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LoginPage;
