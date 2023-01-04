import useInput from "../../hooks/useInput";
import axios from "axios";
import Encrypt from "../../functions/Encrypt";

import FormUI from "../ui/FormUI";
import minLogotype from "../../assets/images/min_logo.png";
import useCheckbox from "../../hooks/useCheckbox";

const Register = (props) => {
  const { createAuth, changeSignForm, setError } = props;

  const name = useInput("");
  const login = useInput("");
  const email = useInput("");
  const password = useInput("");
  const repeatPassword = useInput("");
  const referal = useInput("");

  const persData = useCheckbox(false);
  const mailReady = useCheckbox(false);

  const signUpFunc = (e) => {
    e.preventDefault();

    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    if (
      name.value !== "" &&
      login.value !== "" &&
      email.value !== "" &&
      password.value !== "" &&
      repeatPassword.value !== ""
    ) {
      if (password.value !== repeatPassword.value) {
        setError("passwords are different");
        if (!validateEmail(email.value)) {
          setError("passwords are different and email is not correct");
        }
      } else {
        if (validateEmail(email.value)) {
          axios
            .get("http://localhost:9000/getPublicKey")
            .then((publicKey) => {
              const userData = {
                name: name.value,
                login: login.value,
                email: email.value,
                password: password.value,
                referal: referal.value,
              };

              return Encrypt(JSON.stringify(userData), publicKey.data);
            })
            .then((data) => {
              axios
                .post("http://localhost:9000/register", { data: data })
                .then((res) => {
                  if (res.data.isLogin) {
                    setError("");
                    createAuth(res.data.token);
                  } else {
                    setError(
                      res.data?.error !== undefined
                        ? res.data?.error
                        : "error :( "
                    );
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
          setError("email is not correct");
        }
      }
    } else {
      setError("is empty?");
    }
  };

  const registerClick = (e) => {
    e.preventDefault();
    changeSignForm();
    setError("");
  };

  const registerForm = {
    formTitle: "Регистрация",
    inputs: [
      {
        type: "text",
        autocomplete: "name",
        placeholder: "Имя",
        value: name.value,
        onChange: name.onChange,
      },
      {
        type: "text",
        autocomplete: "username",
        placeholder: "Логин",
        value: login.value,
        onChange: login.onChange,
      },
      {
        type: "text",
        autocomplete: "email",
        placeholder: "Почта",
        value: email.value,
        onChange: email.onChange,
      },
    ],
    inputs2: [
      {
        type: "password",
        autocomplete: "current-password",
        placeholder: "Пароль",
        value: password.value,
        onChange: password.onChange,
      },
      {
        type: "password",
        autocomplete: "new-password",
        placeholder: "Повторите пароль",
        value: repeatPassword.value,
        onChange: repeatPassword.onChange,
      },
      {
        type: "text",
        autocomplete: "referal",
        placeholder: "Реферальный код",
        value: referal.value,
        onChange: referal.onChange,
      },
    ],
    checkBoxes: [
      {
        onChange: persData.onChange,
        text: "Я даю соглашение на обработку личных данных",
      },
      {
        onChange: mailReady.onChange,
        text: "Я хочу получать новости о данном проекте на почту",
      },
    ],
    buttons: [
      {
        onClick: signUpFunc,
        text: "Регистрация",
      },
    ],
    links: [
      {
        onClick: registerClick,
        text: "Уже зарегистрирован",
      },
    ],
  };

  return (
    <FormUI
      formTitle={registerForm.formTitle}
      inputs={registerForm.inputs}
      inputs2={registerForm.inputs2}
      buttons={registerForm.buttons}
      links={registerForm.links}
      checkBoxes={registerForm.checkBoxes}
    />
  );
};

export default Register;
