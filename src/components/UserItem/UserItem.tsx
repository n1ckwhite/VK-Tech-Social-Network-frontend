/**
 * @component
 * Компонент-UserItem
 * @props
 * id - идентификатор пользователя
 * photo - фото пользователя
 * name - имя пользователя
 * @returns
 * возвращает UserItem - нужен для страницы постов
 */

import { FC } from "react";
import styleUserItem from "./UserItem.module.css";
import { IUserItem } from "../../types/types";
import cn from "classnames";
import { Link } from "react-router-dom";

export const UserItem: FC<IUserItem> = ({ id, photo, name }) => {
  const idMe = window.localStorage.getItem("id");
  return (
    <span className={styleUserItem.item}>
      <Link
        className={styleUserItem.link}
        to={idMe !== id ? `/user/${id}` : "/"}
      >
        {photo && photo.length > 0 ? (
          <img className={styleUserItem.img} src={photo} alt="фото" />
        ) : (
          <div className={cn(styleUserItem.img, styleUserItem.unknow)}>?</div>
        )}
        <span className={styleUserItem.descr}>
          <p className={styleUserItem.title}>{name}</p>
        </span>
      </Link>
    </span>
  );
};
