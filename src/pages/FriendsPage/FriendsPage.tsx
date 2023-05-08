import { FC } from "react";
import { Header } from "../../Header/Header";
import { Menu } from "../../components/Menu/Menu";
import {
  useDeleteFriendUserMutation,
  useGetUserQuery,
} from "../../service/api/userApi";
import { IFriend } from "../../types/types";
import { UserItem } from "../../components/UserItem/UserItem";
import styleFriendsPage from "./Friends.module.css";
import deleteImg from "../../icons/delete.svg";
export const FriendsPage: FC = () => {
  const id = window.localStorage.getItem("id");
  const { data } = useGetUserQuery(id);
  const [deleteUser] = useDeleteFriendUserMutation();

  const deleteFriend = (userId: string) => {
    deleteUser({ id, param: userId });
  };

  return (
    <>
      <Header />
      <Menu />
      <div className={styleFriendsPage.block}>
        <h2 className={styleFriendsPage.title}>Мои друзья: </h2>
        {data && data.friends.length === 0 ? (
          <p className={styleFriendsPage.subtitle}>У вас нет друзей!</p>
        ) : (
          ""
        )}
        <ul className={styleFriendsPage.ul}>
          {data &&
            data.friends.length !== 0 &&
            data.friends.map((friend: IFriend) => {
              return (
                <li className={styleFriendsPage.li} key={friend.id}>
                  <UserItem
                    photo={friend.friendPhoto}
                    name={friend.friendName}
                    id={friend.friendId}
                  />
                  <button
                    className={styleFriendsPage.btn}
                    onClick={() => deleteFriend(friend.friendId)}
                  >
                    <img
                      src={deleteImg}
                      alt="Удалить"
                      className={styleFriendsPage.img}
                    />
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
