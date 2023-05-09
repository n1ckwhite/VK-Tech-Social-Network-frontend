/**
 * @component
 * Страница-MainPage
 * @returns
 * возвращает MainPage - с информацией обо мне
 */

import { FC, useState } from "react";
import { useGetUserQuery } from "../../service/api/userApi";
import { Button } from "../../components/Button/Button";
import styleMainPage from "./MainandUserPage.module.css";
import { Loading } from "../../components/Loading/Loading";
import { ModalProfileEdit } from "../../components/ModalProfileEdit/ModalProfileEdit";
import { ModalPhoto } from "../../components/ModalPhoto/ModalPhoto";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { IPost } from "../../types/types";
import { Post } from "../../components/Post/Post";
import { Menu } from "../../components/Menu/Menu";
import { Header } from "../../components/Header/Header";
export const MainPage: FC = () => {
  const [modalPhotoActive, setModalPhotoActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const id = window.localStorage.getItem("id");
  const { data, isLoading } = useGetUserQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  const activeModal = () => {
    setModalActive(true);
  };
  const closeModal = () => {
    setModalActive(false);
  };
  const closeModalUserPhoto = () => {
    setModalPhotoActive(false);
  };
  const activeModalUserPhoto = () => {
    setModalPhotoActive(true);
  };
  return (
    <>
      <Header />
      <Menu />
      <main className={styleMainPage.main}>
        <div className={styleMainPage.profile}>
          {data && data.photo === "" ? (
            <div className={styleMainPage.img}>?</div>
          ) : (
            <>
              <img
                onClick={activeModalUserPhoto}
                className={styleMainPage.img}
                src={data && data.photo}
                alt="Я"
              />
              <ModalPhoto
                closeModal={closeModalUserPhoto}
                imgSrc={data && data.photo}
                isActive={modalPhotoActive}
              />
            </>
          )}
          <p className={styleMainPage.name}>{data && data.name}</p>
          <p className={styleMainPage.email}>{data && data.email}</p>
          <p className={styleMainPage.city}>
            Город : {data && data.city === "" ? "Не указан" : data.city}
          </p>
          <p className={styleMainPage.descr}>
            {data && data.description === ""
              ? "Описание не указано"
              : data.description}
          </p>
          {
            <p className={styleMainPage.age}>
              Возраст : {data && data.age === "" ? " не указан" : data.age}
            </p>
          }
          <p className={styleMainPage.univ}>
            ВУЗ: {data && data.univ === "" ? " не указан" : data.univ}
          </p>
          <Button
            onclick={activeModal}
            classname={styleMainPage.btnProf}
            text="Редактировать"
          />
          <p className={styleMainPage.friends}>
            Друзей: {data && data.friends.length}
          </p>
          <p className={styleMainPage.posts}>
            Постов: {data && data.posts.length}
          </p>
        </div>
        <div className={styleMainPage.list}>
          <CreatePost />
          <ul className={styleMainPage.ul}>
            {data &&
              data.posts
                .map((post: IPost) => {
                  return (
                    <li className={styleMainPage.li} key={post.id}>
                      <Post
                        authorId={post.authorId}
                        id={post.id}
                        photo={post.photo}
                        description={post.description}
                        likes={post.likes}
                      />
                    </li>
                  );
                })
                .reverse()}
          </ul>
        </div>
      </main>
      <ModalProfileEdit
        data={data}
        isActive={modalActive}
        closeModal={closeModal}
      />
    </>
  );
};
