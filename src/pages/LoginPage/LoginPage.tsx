import React, {FC, SyntheticEvent, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import {Button} from "../../components/Button/Button";
import {Label} from "../../components/Label/Label";
import {Input} from "../../components/Input/Input";
import styleLoginAndRegPage from './LoginAndRegPage.module.css'
import {useLoginUserMutation} from "../../service/api/userApi";
export const LoginPage: FC = () => {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    const [errMsg, setErrMsg] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loginUser, {error}] = useLoginUserMutation()
    const loginApp = async (e: SyntheticEvent) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
        if(email && password.length >= 8) {
            await loginUser({email,password}).unwrap().then((data) => {
                window.localStorage.setItem('id', data.id)
                window.localStorage.setItem('token', data.token)
                history.replace({pathname: `/`})
                setErrMsg('')
            }).catch(err => {
                setErrMsg(err.data.message)
            })
        } else {
            setErrMsg('Соблюдайте правила!')
        }
    }
    if(token) {
        return <Redirect to="/"/>
    }
    return (
        <div className={styleLoginAndRegPage.flex}>
            <div className={styleLoginAndRegPage.div}>
            <h2 className={styleLoginAndRegPage.title}>Вход</h2>
            <form onSubmit={loginApp} className={styleLoginAndRegPage.form}>
            <Label text="E-mail" htmlFor="email"/>
                <Input classname={error ? styleLoginAndRegPage.err : ''} type="email" id="email" placeholder="example@ya.ru" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setEmail(e.target.value)} required/>
                <Label text="Пароль" htmlFor="password"/>
                <Input classname={error ? styleLoginAndRegPage.err : ''} type="password" id="password" placeholder="не менее 8 символов" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required/>
                {errMsg && <p className={styleLoginAndRegPage.errMsg}>{errMsg}</p>}
                <Button classname={errMsg ? styleLoginAndRegPage.mt0 : styleLoginAndRegPage.btn} text="Войти"/>
            </form>
            <Link className={styleLoginAndRegPage.link} to="/register">Регистрация</Link>
            </div>
        </div>
    )
}