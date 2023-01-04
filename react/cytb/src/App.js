import "./styles/main.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SingForm from "./components/sign/SingForm";
import Main from "./components/main";

import auth from "./functions/auth";

function App() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");
    const sessToken = sessionStorage.getItem("userToken");

    if (sessToken !== null) {
      return setIsLogin(true);
    } else if (localToken !== null) {
      return setIsLogin(true);
    } else {
      return setIsLogin(false);
    }
  }, []);

  const { createAuth, deleteAuth } = auth({ navigate, setIsLogin });

  return (
    <div className="App">
      {isLogin ? (
        <Main deleteAuth={deleteAuth} />
      ) : (
        <SingForm createAuth={createAuth} isLogin={isLogin} />
      )}
    </div>
  );
}

export default App;
