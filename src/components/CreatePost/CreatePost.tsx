import {FC, useState} from "react";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import styleCreatePost from './CreatePost.module.css'
import {useAddUserPostMutation} from "../../service/api/userApi";
export const CreatePost: FC = () => {
    const id = window.localStorage.getItem('id')
    const [photo,setPhoto] = useState('')
    const [description, setDescription] = useState('')
    const [addPostUser] = useAddUserPostMutation()

    const addPost = () => {
        addPostUser({photo: photo.length === 0 ? 'null' : photo,description, likes: 0,id})
        setPhoto('')
        setDescription('')
    }
    return (
        <div className={styleCreatePost.create}>
            <Input value={photo} onChange={(e) => setPhoto(e.target.value)} type="text" classname={styleCreatePost.input} placeholder="URL ФОТО (Необязательно)"/>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="text" className={styleCreatePost.area} placeholder="Описание поста..."></textarea>
                <Button onclick={addPost} classname={styleCreatePost.btn} text="Написать пост"/>
        </div>
    )
}