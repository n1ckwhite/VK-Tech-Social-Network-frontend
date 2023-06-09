/**
 * @component
 * Компонент-Header
 * Содержит кнопку выйти, которая очищает localStorage и переносит на роут /login
 * @returns
 * возвращает Header
 */

import { FC } from "react";
import styleHeader from "./Header.module.css";
import { Button } from "../Button/Button";
import { useHistory } from "react-router-dom";

export const Header: FC = () => {
  const history = useHistory();

  const exitUser = () => {
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("token");
    history.replace({ pathname: "/login" });
  };
  return (
    <header className={styleHeader.header}>
      <h1 className={styleHeader.title}>В мыле</h1>
      <Button text="Выйти" classname={styleHeader.btn} onclick={exitUser} />
    </header>
  );
};
