import { FC, SyntheticEvent, useState } from "react";
import styleSearchPage from "./SearchPage.module.css";
import { Header } from "../../Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Label } from "../../components/Label/Label";
import { useSearchUsersMutation } from "../../service/api/userApi";
import { User } from "../../types/types";
import { UserItem } from "../../components/UserItem/UserItem";
export const SearchPage: FC = () => {
  const [errMsg, setErrMsg] = useState("");
  const [resultUser, setResultUser] = useState([]);
  const [nameU, setNameU] = useState("");
  const [searchUsers] = useSearchUsersMutation();
  const resultUsers = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (nameU.length !== 0 || nameU !== "") {
      await searchUsers({ name: nameU })
        .unwrap()
        .then((response) => {
          setResultUser(response);
          setNameU("");
          if (response.length !== 0) {
            setErrMsg("");
          } else {
            setErrMsg("Пользователь не найден!");
          }
        });
    }
  };

  return (
    <>
      <Header />
      <Menu />
      <div className={styleSearchPage.block}>
        <h2 className={styleSearchPage.title}>Поиск людей:</h2>
        <form onSubmit={resultUsers} className={styleSearchPage.form}>
          <Label
            classname={styleSearchPage.label}
            htmlFor="name"
            text="Введите имя пользователя"
          />
          <Input
            value={nameU}
            onChange={(e) => setNameU(e.target.value)}
            classname={styleSearchPage.input}
            placeholder="Например: nick white"
            id="name"
            type="text"
            required
          />
          {errMsg.length !== 0 ? (
            <p className={styleSearchPage.err}>{errMsg}</p>
          ) : (
            ""
          )}
          <Button classname={styleSearchPage.btn} text="Поиск" />
        </form>
        {resultUser.length !== 0 ? (
          <p className={styleSearchPage.result}>Результат: </p>
        ) : (
          ""
        )}
        <ul className={styleSearchPage.ul}>
          {resultUser &&
            resultUser.map((user: User) => {
              return (
                <li key={user.id} className={styleSearchPage.li}>
                  <UserItem id={user.id} photo={user.photo} name={user.name} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
