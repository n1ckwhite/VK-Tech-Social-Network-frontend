import {FC} from "react";
import {Link} from "react-router-dom";
import {Button} from "../../components/Button/Button";
import {Label} from "../../components/Label/Label";
import {Input} from "../../components/Input/Input";
import styleLoginPage from './LoginPage.module.css'
export const LoginPage: FC = () => {
    return (
        <div className={styleLoginPage.flex}>
            <div className={styleLoginPage.div}>
            <h2 className={styleLoginPage.title}>Вход</h2>
            <form className={styleLoginPage.form}>
            <Label text="E-mail" htmlFor="email"/>
                <Input type="text" id="email" placeholder="example@ya.ru"/>
                <Label text="Пароль" htmlFor="password"/>
                <Input type="password" id="password" placeholder="не менее 8 символов"/>
                <Button classname={styleLoginPage.btn} text="Войти"/>
            </form>
            <Link className={styleLoginPage.link} to="/register">Регистрация</Link>
            </div>
        </div>
    )
}