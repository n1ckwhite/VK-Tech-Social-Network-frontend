import {FC} from "react";
import {Link} from "react-router-dom";
import styleLoginPage from "../LoginPage/LoginPage.module.css";
import {Label} from "../../components/Label/Label";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";

export const RegisterPage: FC = () => {

    return (
        <div className={styleLoginPage.flex}>
            <div className={styleLoginPage.div}>
                <h2 className={styleLoginPage.title}>Регистрация</h2>
                <form className={styleLoginPage.form}>
                    <Label text="Имя пользователя" htmlFor="name"/>
                    <Input type="text" id="name" placeholder="не менее 5 символов"/>
                    <Label text="E-mail" htmlFor="email"/>
                    <Input type="text" id="email" placeholder="example@ya.ru"/>
                    <Label text="Пароль" htmlFor="password"/>
                    <Input type="password" id="password" placeholder="не менее 8 символов"/>
                    <Button classname={styleLoginPage.btn} text="Регистрация"/>
                </form>
                <Link className={styleLoginPage.link} to="/login">Войти</Link>
            </div>
        </div>
    )
}