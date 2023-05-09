/**
 * @component
 * Компонент-CreatePost
 * Добавляет пост, если фото URL начинается с https://, поле фото и описание не пустые
 * @returns
 * возвращает button с готовыми стилями
 */

import { FC, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styleCreatePost from "./CreatePost.module.css";
import { useAddUserPostMutation } from "../../service/api/userApi";
import cn from "classnames";
export const CreatePost: FC = () => {
  const [err, setErr] = useState("");
  const id = window.localStorage.getItem("id");
  const [photo, setPhoto] = useState("https://");
  const [description, setDescription] = useState("");
  const [addPostUser, { isLoading }] = useAddUserPostMutation();

  const addPost = () => {
    if (
      photo.length !== 0 &&
      photo.startsWith("https://") &&
      description.length !== 0
    ) {
      addPostUser({ photo, description, likes: 0, id });
      setPhoto("https://");
      setDescription("");
      setErr("");
    } else {
      setErr("Заполните поля!");
    }
  };
  return (
    <div className={styleCreatePost.create}>
      <Input
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        type="url"
        classname={cn(
          styleCreatePost.input,
          err.length !== 0 ? styleCreatePost.err : ""
        )}
        placeholder="URL ФОТО"
        required
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        classname={cn(
          styleCreatePost.input,
          err.length !== 0 ? styleCreatePost.err : ""
        )}
        placeholder="Описание поста..."
        required
      />
      <p className={styleCreatePost.errMsg}>{err.length !== 0 ? err : ""}</p>
      <Button
        onclick={addPost}
        classname={styleCreatePost.btn}
        text="Написать пост"
      />
      {isLoading ? <p className="load">Ждем...</p> : ""}
    </div>
  );
};
