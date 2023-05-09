/**
 * @component
 * Компонент-Label
 * @props
 * classname - позволяет добавить еще один класс с любого компонента
 * text - текст label
 * @returns
 * возвращает label с готовыми стилями
 */

import { FC } from "react";
import styleLabel from "./Label.module.css";
import cn from "classnames";
import { ILabel } from "../../types/types";

export const Label: FC<ILabel> = ({ text, classname, ...rest }) => {
  return (
    <>
      <label className={cn(styleLabel.label, classname)} {...rest}>
        {text}
      </label>
    </>
  );
};
