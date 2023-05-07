import {FC, SyntheticEvent, useState} from "react";
import {Modal} from "../Modal/Modal";
import { IModalEditProfile} from "../../types/types";
import {Label} from "../Label/Label";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import styleModalProfileEdit from './ModalProfileEdit.module.css'
import {useEditUserProfileMutation} from "../../service/api/userApi";
export const ModalProfileEdit: FC<IModalEditProfile> = ({data,isActive, closeModal}) => {
    const id = window.localStorage.getItem('id')
    const [photo,setPhoto] = useState(data ?  data.photo : '')
    const [city, setCity] = useState(data ? data.city : '')
    const [description,setDescription] = useState(data ? data.description : "")
    const [age,setAge] = useState(data ? data.age : '')
    const [univ,setUniv] = useState(data ? data.univ : '')
    const [editUser] = useEditUserProfileMutation()
    const editProfile = async (e: SyntheticEvent) => {
        e.preventDefault()
       await editUser({photo,city,description,age: +age,univ,id}).unwrap()
        closeModal()
    }
    return (
        <Modal isActive={isActive} closeModal={closeModal}>
            <div className={styleModalProfileEdit.modal}>
            <h2 className={styleModalProfileEdit.title}>Редактирование профиля</h2>
            <form onSubmit={editProfile}>
                <Label text="URL ФОТО" htmlFor="img"/>
                <Input value={photo} onChange={(e) => setPhoto(e.target.value)} type="url" id="img" placeholder="https://4lapy.ru/resize/1664x1000/upload/medialibrary/270/2703fd71a17c0843c0b91bbe28c4fe0f.jpg"/>
                <Label text="Город" htmlFor="city"/>
                <Input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="city" placeholder="Москва"/>
                <Label text="Описание профиля" htmlFor="descr"/>
                <Input value={description} onChange={(e) => setDescription(e.target.value)} type="text" id="descr" placeholder="Я React Разработчик"/>
                <Label text="Возраст" htmlFor="age"/>
                <Input value={age} onChange={(e) => setAge(e.target.value)} type="text" id="age" placeholder="22"/>
                <Label text="ВУЗ" htmlFor="univ"/>
                <Input value={univ} onChange={(e) => setUniv(e.target.value)} type="text" id="univ" placeholder="МГУ"/>
                <Button classname={styleModalProfileEdit.btn} text="Редактировать"/>
            </form>
            </div>
        </Modal>
    )
}