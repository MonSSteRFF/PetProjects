import useInput from "../../hooks/useInput";
import axios from "axios";
import Encrypt from "../../functions/Encrypt";
import FormUI from "../ui/FormUI";
import minLogotype from "../../assets/images/min_logo.png";
import useCheckbox from "../../hooks/useCheckbox";

const Login = (props) => {
  const { createAuth, changeSignForm, setError } = props;
  const login = useInput("");
  const password = useInput("");

  const remember = useCheckbox(false);

  const singInFunc = (e) => {
    e.preventDefault();
    if (login.value !== "" && password.value !== "") {
      axios
        .get("http://localhost:9000/getPublicKey")
        .then((publicKey) =>
          Encrypt(
            `{"login": "${login.value}", "password": "${password.value}"}`,
            publicKey.data
          )
        )
        .then((data) => {
          axios
            .post(`http://localhost:9000/login`, { data: data })
            .then((res) => {
              if (res.data.isLogin) {
                setError("");
                if (res.data.token !== undefined) {
                  createAuth(res.data.token, remember.value);
                } else {
                  setError("user has undefined");
                }
              } else {
                setError("wrong username or/and password");
              }
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      setError("is empty?");
    }
  };

  const loginClick = (e) => {
    e.preventDefault();
    changeSignForm();
    setError("");
  };

  const loginForm = {
    formTitle: "Вход",
    inputs: [
      {
        type: "text",
        placeholder: "Логин",
        autocomplete: "login",
        value: login.value,
        onChange: login.onChange,
      },
      {
        type: "password",
        placeholder: "Пароль",
        autocomplete: "current-password",
        value: password.value,
        onChange: password.onChange,
      },
    ],
    checkBoxes: [
      {
        onChange: remember.onChange,
        text: "Запомнить этот компьютер",
      },
    ],
    buttons: [
      {
        onClick: singInFunc,
        text: "Войти",
      },
    ],
    links: [
      {
        onClick: loginClick,
        text: "Не зарегистрирован",
      },
    ],
  };

  return (
    <FormUI
      formTitle={loginForm.formTitle}
      inputs={loginForm.inputs}
      inputs2={loginForm.inputs2}
      buttons={loginForm.buttons}
      links={loginForm.links}
      checkBoxes={loginForm.checkBoxes}
    />
  );
};

export default Login;
