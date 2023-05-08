import {FC} from "react";
import {Button} from "../Button/Button";
import {useParams} from "react-router-dom";
import {IFriend, IHandleFriendButton, IQuizParams} from "../../types/types";
import {useGetUserQuery} from "../../service/api/userApi";
import styleHandleFriend from './HandleFriend.module.css'

export const HandleFriend: FC<IHandleFriendButton> = ({addFriend, removeFriend}) => {
    const {id} = useParams<IQuizParams>()
    const meId = window.localStorage.getItem('id')
    const {data} = useGetUserQuery(meId)
    const filterButton = data && data.friends.filter((friend: IFriend) => {
        return friend.friendId === id
    })[0]
    return (
        <>
            {
                data && filterButton ? (<Button classname={styleHandleFriend.btn} onclick={removeFriend} text="Удлаить из друзей"/>) : (<Button classname={styleHandleFriend.btn} onclick={addFriend} text="Добавить в друзья"/>)
            }
        </>
    )
}