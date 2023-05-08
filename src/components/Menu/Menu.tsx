import {FC, useState} from "react";
import styleMenu from './Menu.module.css';
import {Link} from "react-router-dom";
import cn from 'classnames'
export const Menu: FC = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const activeBurger = () => {
        setActiveMenu(true)
    }
    const closeBurger = () => {
        setActiveMenu(false)
    }
    const id = window.localStorage.getItem('id')
    return (
        <>
        <menu className={styleMenu.menu}>
            <Link className={styleMenu.link} to='/'>Моя страница</Link>
            <Link className={styleMenu.link} to="/search">Поиск</Link>
            <Link className={styleMenu.link} to="/friends">Друзья</Link>
            <Link className={styleMenu.link} to="/post">Новости</Link>
            <Link className={styleMenu.link} to="/mail">Сообщения</Link>
        </menu>
            <div className={styleMenu.burger} onClick={activeBurger}>
                <span className={styleMenu.span}></span>
                <span className={styleMenu.span}></span>
                <span className={styleMenu.span}></span>
            </div>
            <div className={cn(styleMenu.links, activeMenu ? styleMenu.linksActive : '')}>
                <button className={styleMenu.btn} onClick={closeBurger}>&#10005;</button>
                <Link className={styleMenu.linkM} to="/">Моя страница</Link>
                <Link className={styleMenu.linkM} to="/search">Поиск</Link>
                <Link className={styleMenu.linkM} to="/friends">Друзья</Link>
                <Link className={styleMenu.linkM} to="/post">Новости</Link>
                <Link className={styleMenu.linkM} to="/mail">Сообщения</Link>
            </div>
        </>
    )
}