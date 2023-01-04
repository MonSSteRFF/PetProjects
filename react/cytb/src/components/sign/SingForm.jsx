import Login from "./Login";
import Register from "./Register";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

import style from "./signForm.module.scss";
import minLogotype from "../../assets/images/min_logo.png";

const SingForm = (props) => {
  const { createAuth } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const changeSignForm = () => {
    if (location.pathname === "/login") {
      navigate("/register", { replace: true });
    } else if (location.pathname === "/register") {
      navigate("/login", { replace: true });
    }
  };

  const rotesList = [
    {
      path: "*",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: (
        <Login
          createAuth={createAuth}
          changeSignForm={changeSignForm}
          setError={setError}
        />
      ),
    },
    {
      path: "/register",
      element: (
        <Register
          createAuth={createAuth}
          changeSignForm={changeSignForm}
          setError={setError}
        />
      ),
    },
  ];

  return (
    <div className={style.loginRegisterPage}>
      <div className={style.loginRegisterForm}>
        <p className={style.error}>{error}</p>

        <img
          src={minLogotype}
          alt=""
          width={220}
          height={220}
          className={style.logotypeImage}
        />

        <h1 className={style.title}>{"Добро пожаловать"}</h1>

        <p className={style.desc}>
          {"Начни создавать своих первых ботов прямо сейчас!"}
        </p>

        <Routes>
          {rotesList.map((routesItem, index) => (
            <Route
              key={index}
              path={routesItem.path}
              element={routesItem.element}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default SingForm;
