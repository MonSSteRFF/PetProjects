import React from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";

import MainContent from "./MainContent";
import TelegramBot from "./TelegramBot";

const Main = (props) => {
  const { deleteAuth } = props;

  const pathname = useLocation().pathname;

  const navLinks = [
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
    {
      path: "/",
      text: "Main page",
      element: <MainContent deleteAuth={deleteAuth} />,
    },
    {
      path: "/telegramBot",
      text: "Bot settings",
      element: <TelegramBot />,
    },
  ];

  return (
    <>
      <header className="header">
        <nav className="container">
          <ul className="header__navigation">
            {navLinks.map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  {elem.text !== undefined ? (
                    <li>
                      <Link
                        to={elem.path}
                        className={
                          pathname === elem.path ? "link active" : "link"
                        }
                      >
                        {elem.text}
                      </Link>
                    </li>
                  ) : null}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </header>
      <Routes>
        {navLinks.map((elem, index) => (
          <Route key={index} path={elem.path} element={elem.element} />
        ))}
      </Routes>
    </>
  );
};

export default Main;
