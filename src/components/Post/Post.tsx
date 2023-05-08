import {FC, useState} from "react";
import stylePost from './Post.module.css'
import hearthImg from '../../icons/hearth.svg'
import editImg from '../../icons/edit.svg'
import hearthActiveImg from '../../icons/hearthActive.svg'
import {IPost} from "../../types/types";
import {useLikePostMutation} from "../../service/api/userApi";
import {ModalConfirm} from "../ModalConfirm/ModalConfirm";
import {ModalEditPost} from "../ModalEditPost/ModalEditPost";
import {ModalPhoto} from "../ModalPhoto/ModalPhoto";
export const Post: FC<IPost> = ({photo,description,likes,id}) => {
    const [activeModalConfirm,setActiveModalConfirm] = useState(false)
    const [activeModalPostEditor,setActiveModalPostEditor] = useState(false)
    const [activePhoto,setActivePhoto] = useState(false)
    const [likePostApi] = useLikePostMutation()
    let [like,setLike] = useState(likes)
    const [likePost,setLikePost] = useState(false)
    const closeModalConfrim = () => {
        setActiveModalConfirm(false)
    }
    const openModalConfirm = () => {
        setActiveModalConfirm(true)
    }

    const openModalPostEditor = () => {
        setActiveModalPostEditor(true)
    }

    const closeModalPostEditor = () => {
        setActiveModalPostEditor(false)
    }

    const openPhoto = () => {
        setActivePhoto(true)
    }

    const closeModalPhoto = () => {
        setActivePhoto(false)
    }

    const handleLike = async () => {
        if(likePost === false) {
            setLike(like+= 1)
            setLikePost(true)
            await likePostApi({id, like}).unwrap()
        } else {
            setLike(like -=1)
            setLikePost(false)
            await likePostApi({id, like}).unwrap()
        }
    }
    return (
        <>
        <span className={stylePost.post}>
            <button className={stylePost.delete} onClick={openModalConfirm}>&#10005;</button>
            <button onClick={openModalPostEditor} className={stylePost.edit}><img className={stylePost.editImg} src={editImg} alt="редактор"/></button>
            <img onClick={openPhoto} className={stylePost.img} src={photo}/>
            <span className={stylePost.text}>
            <p className={stylePost.descr}>{description}</p>
                <span className={stylePost.likes}><img onClick={handleLike} className={stylePost.hearth} alt="ФОТО" src={likePost ? hearthActiveImg : hearthImg}/><span className={stylePost.count}>{like}</span></span>
            </span>
        </span>
            <ModalConfirm id={id} isActive={activeModalConfirm} closeModal={closeModalConfrim}/>
            <ModalEditPost photo={photo} description={description}  id={id} isActive={activeModalPostEditor} closeModal={closeModalPostEditor}/>
            <ModalPhoto imgSrc={photo} isActive={activePhoto} closeModal={closeModalPhoto}/>
        </>
    )
}