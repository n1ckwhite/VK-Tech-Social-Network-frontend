import {FC, useState} from "react";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import styleCreatePost from './CreatePost.module.css'
import {useAddUserPostMutation} from "../../service/api/userApi";
import cn from 'classnames'
export const CreatePost: FC = () => {
    const [err,setErr] = useState('')
    const id = window.localStorage.getItem('id')
    const [photo,setPhoto] = useState('')
    const [description, setDescription] = useState('')
    const [addPostUser] = useAddUserPostMutation()

    const addPost = () => {
        if(photo.length !== 0  && description.length !== 0) {
            addPostUser({photo, description, likes: 0, id})
            setPhoto('')
            setDescription('')
            setErr('')
        } else {
            setErr('Заполните поля!')
        }
    }
    return (
        <div className={styleCreatePost.create}>
            <Input value={photo} onChange={(e) => setPhoto(e.target.value)} type="url" classname={cn(styleCreatePost.input, err.length !== 0 ? styleCreatePost.err : '')} placeholder="URL ФОТО" required/>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} type="text" classname={cn(styleCreatePost.input, err.length !== 0 ? styleCreatePost.err : '')} placeholder="Описание поста..." required/>
            <p className={styleCreatePost.errMsg}>{err.length !== 0 ? err : ''}</p>
            <Button onclick={addPost} classname={styleCreatePost.btn} text="Написать пост"/>
        </div>
    )
}