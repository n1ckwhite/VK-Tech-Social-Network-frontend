import {FC, useState} from "react";
import {Header} from "../../Header/Header";
import {Menu} from "../../components/Menu/Menu";
import {useGetUserQuery} from "../../service/api/userApi";
import {useParams} from "react-router-dom";
import {IPost, IQuizParams} from "../../types/types";
import {Loading} from "../../components/Loading/Loading";
import {ModalPhoto} from "../../components/ModalPhoto/ModalPhoto";
import styleMainPage from "../MainPage/MainandUserPage.module.css";
import {Post} from "../../components/Post/Post";

export const UserPage: FC = () => {
    const [modalPhotoActive,setModalPhotoActive] = useState(false)
    const {id} = useParams<IQuizParams>()
    const {data, isLoading} = useGetUserQuery(id)
    if(isLoading) {
        return <Loading/>
    }

    const closeModalUserPhoto = () => {
        setModalPhotoActive(false)
    }
    const activeModalUserPhoto = () => {
        setModalPhotoActive(true)
    }
    return (
        <>
            <Header/>
            <Menu/>
            <div className={styleMainPage.main}>
            <div className={styleMainPage.profile}>
                {data && data.photo === "" ? (
                    <div className={styleMainPage.img}>?</div>
                ) : (
                    <>
                        <img onClick={activeModalUserPhoto} className={styleMainPage.img} src={data && data.photo} alt="Я"/>
                        <ModalPhoto closeModal={closeModalUserPhoto} imgSrc={data && data.photo} isActive={modalPhotoActive} />
                    </>
                )
                }
                <p className={styleMainPage.name}>{data && data.name}</p>
                <p className={styleMainPage.email}>{data && data.email}</p>
                <p className={styleMainPage.city}>Город : {data &&  data.city === '' ? "Не указан" : data.city}</p>
                <p className={styleMainPage.descr}>{data && data.description === '' ? "Описание не указано" : data.description}</p>
                {<p className={styleMainPage.age}>Возраст : {data && data.age === '' ? " не указан" : data.age}</p>}
                <p className={styleMainPage.univ}>ВУЗ: {data && data.univ === '' ? " не указан" : data.univ}</p>
                <p className={styleMainPage.friends}>Друзей: {data && data.friends.length}</p>
                <p className={styleMainPage.posts}>Постов: {data && data.posts.length}</p>
            </div>
            <div className={styleMainPage.list}>
                {data.posts.length !== 0 ? <h2 className={styleMainPage.subtitle}>Мои посты :</h2> : <h2 className={styleMainPage.subtitle}>Нет постов!</h2>}
                <ul className={styleMainPage.ul}>
                    {data && data.posts.map((post: IPost) => {
                        return (
                            <li className={styleMainPage.li} key={post.id}>
                                <Post id={post.id} photo={post.photo} description={post.description} likes={post.likes}/>
                            </li>
                        )
                    }).reverse()}
                </ul>
            </div>
            </div>
            </>
    )
}