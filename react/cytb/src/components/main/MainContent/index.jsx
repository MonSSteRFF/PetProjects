import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";

import styles from "./mainContent.module.scss";
import axios from "axios";

const MainContent = (props) => {
  const { deleteAuth } = props;

  const [profile, setProfile] = useState({
    login: "",
    tags: ["", ""],
  });

  const token =
    sessionStorage.getItem("userToken") !== null
      ? sessionStorage.getItem("userToken")
      : localStorage.getItem("userToken");

  useEffect(() => {
    axios
      .post("http://localhost:9000/profileInfo", { data: token })
      .then((res) => {
        if (res.data.isLogin !== true) {
          deleteAuth();
        } else {
          setProfile(res.data.userData);
        }
      });
  }, [deleteAuth, token]);

  return (
    <main className="container">
      <div className={styles.profile}>
        <h3>User info</h3>

        <Button
          onClick={(e) => {
            e.preventDefault();
            deleteAuth();
          }}
        >
          {"log out"}
        </Button>
      </div>

      <ul>
        {profile !== undefined ? (
          <>
            {profile.id !== null ? <li>id: {profile.id}</li> : null}
            {profile.name !== null ? <li>name: {profile.name}</li> : null}
            {profile.login !== null ? <li>login: {profile.login}</li> : null}
            {profile.email !== null ? <li>email: {profile.email}</li> : null}
            {profile.tags !== null ? <li>tags: {profile.tags}</li> : null}
            {token !== null ? <li>token: {token}</li> : null}
            {profile.telegramid !== null ? (
              <li>telegramid: {profile.telegramid}</li>
            ) : null}
          </>
        ) : null}
      </ul>
    </main>
  );
};

export default MainContent;
