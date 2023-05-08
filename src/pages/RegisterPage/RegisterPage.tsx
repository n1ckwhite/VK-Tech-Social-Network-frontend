import React, { FC, SyntheticEvent, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import styleLoginAndRegPage from "../LoginPage/LoginAndRegPage.module.css";
import { Label } from "../../components/Label/Label";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useRegisterUserMutation } from "../../service/api/userApi";

export const RegisterPage: FC = () => {
  const [errMsg, setErrMsg] = useState("");
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [register, { error }] = useRegisterUserMutation();

  const registerUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    if (name.length >= 5 && email && password.length >= 8) {
      await register({ name, email, password })
        .unwrap()
        .then((data) => {
          window.localStorage.setItem("id", data.id);
          window.localStorage.setItem("token", data.token);
          history.replace({ pathname: "/" });
          setErrMsg("");
        })
        .catch((err) => {
          setErrMsg(err.data.message);
        });
    } else {
      setErrMsg("Соблюдайте правила!");
    }
  };
  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <div className={styleLoginAndRegPage.flex}>
      <div className={styleLoginAndRegPage.div}>
        <h2 className={styleLoginAndRegPage.title}>Регистрация</h2>
        <form onSubmit={registerUser} className={styleLoginAndRegPage.form}>
          <Label text="Имя пользователя" htmlFor="name" />
          <Input
            classname={error ? styleLoginAndRegPage.err : ""}
            type="text"
            id="name"
            placeholder="не менее 5 символов"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            required
          />
          <Label text="E-mail" htmlFor="email" />
          <Input
            classname={error ? styleLoginAndRegPage.err : ""}
            type="email"
            id="email"
            placeholder="example@ya.ru"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />
          <Label text="Пароль" htmlFor="password" />
          <Input
            classname={error ? styleLoginAndRegPage.err : ""}
            type="password"
            id="password"
            placeholder="не менее 8 символов"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
          />
          {errMsg && <p className={styleLoginAndRegPage.errMsg}>{errMsg}</p>}
          <Button
            classname={
              errMsg ? styleLoginAndRegPage.mt0 : styleLoginAndRegPage.btn
            }
            text="Регистрация"
          />
        </form>
        <Link className={styleLoginAndRegPage.link} to="/login">
          Войти
        </Link>
      </div>
    </div>
  );
};
