const auth = (props) => {
  const { navigate, setIsLogin } = props;

  const createAuth = (token, remember) => {
    setIsLogin(true);
    console.log(remember);
    if (remember) {
      localStorage.setItem("userToken", token);
    } else {
      sessionStorage.setItem("userToken", token);
    }
    navigate("/", { replace: true });
  };

  const deleteAuth = () => {
    setIsLogin(false);
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userToken");
    navigate("/", { replace: true });
  };

  return { createAuth, deleteAuth };
};

export default auth;
