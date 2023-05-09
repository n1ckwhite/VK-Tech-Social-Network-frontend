/**
 * @component
 * Страница-PostPage
 * Отправляет запрос на получение пользователей и их постов
 * @returns
 * возвращает PostPage - с постами пользователей
 */

import { FC } from "react";
import { Header } from "../../Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { useGetPostsQuery } from "../../service/api/userApi";
import stylePostsPage from "./PostsPage.module.css";
import { IPost, User } from "../../types/types";
import { Link } from "react-router-dom";
import { Post } from "../../components/Post/Post";

export const PostsPage: FC = () => {
  const idMe = window.localStorage.getItem("id");
  const { data } = useGetPostsQuery(idMe);
  return (
    <>
      <Header />
      <Menu />
      <div className={stylePostsPage.main}>
        <ul className={stylePostsPage.ul}>
          {data &&
            data.map((user: User) => {
              if (user.id !== idMe || user.complete) {
                return (
                  <li className={stylePostsPage.posts} key={user.id}>
                    <Link
                      className={stylePostsPage.linkProf}
                      to={`/user/${user.id}`}
                    >
                      {user.photo && user.photo.length !== 0 ? (
                        <img
                          className={stylePostsPage.imgProf}
                          src={user.photo}
                          alt="фото"
                        />
                      ) : (
                        <div className={stylePostsPage.imgProf}>?</div>
                      )}
                      <span className={stylePostsPage.textProf}>
                        <p className={stylePostsPage.nameProf}>{user.name}</p>
                      </span>
                    </Link>
                    <ul className={stylePostsPage.postUl}>
                      {user.posts.map((post: IPost) => {
                        return (
                          <li key={post.id} className={stylePostsPage.post}>
                            <Post
                              authorId={post.authorId}
                              id={post.id}
                              description={post.description}
                              likes={post.likes}
                              photo={post.photo}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </>
  );
};
