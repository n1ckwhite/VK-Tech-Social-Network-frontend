import {FC, SyntheticEvent, useState} from "react";
import {Modal} from "../Modal/Modal";
import {IModalEditPost} from "../../types/types";
import {Label} from "../Label/Label";
import {Input} from "../Input/Input";
import styleModalEditPost from './ModalEditPost.module.css'
import {Button} from "../Button/Button";
import {useEditPostMutation} from "../../service/api/userApi";
export const ModalEditPost: FC<IModalEditPost> = ({isActive,closeModal,id, description, photo}) => {
    const [descr,setDescr] = useState(description)
    const [editPost] = useEditPostMutation()
    const [img,setImg] = useState(photo)

    const submitEditPost = async (e: SyntheticEvent) => {
        e.preventDefault()
        await editPost({id,description: descr, photo: img}).unwrap()
        closeModal()
    }
    return (
        <Modal isActive={isActive} closeModal={closeModal}>
            <div className={styleModalEditPost.modal}>
                <h2 className={styleModalEditPost.title}>Редактирование поста</h2>
                <form onSubmit={submitEditPost} className={styleModalEditPost.form}>
                    <Label htmlFor="img" text="Изменить изображение?"/>
                    <Input value={img} onChange={(e) => setImg(e.target.value)} id="img" type="text" placeholder="Новое URL ФОТО"/>
                    <Label htmlFor="descr" text="Изменить текст?"/>
                    <Input value={descr} onChange={(e) => setDescr(e.target.value)} id="descr" type="text" placeholder="Новый текст"/>
                    <Button classname={styleModalEditPost.btn} text="Подтвердить"/>
                </form>
            </div>
        </Modal>
    )
}