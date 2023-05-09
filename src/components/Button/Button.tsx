/**
 * @component
 * Компонент-Button
 * @props
 * classname - доп класс для компонента
 * text - текст для кнопки
 * onclick - функция, которая вешается на кнопку
 * @returns
 * возвращает button с готовыми стилями
 */

import { FC } from "react";
import styleButton from "./Button.module.css";
import cn from "classnames";
import { IButton } from "../../types/types";

export const Button: FC<IButton> = ({ text, classname, onclick, ...rest }) => {
  return (
    <>
      <button className={cn(styleButton.button, classname)} onClick={onclick}>
        {text}
      </button>
    </>
  );
};
