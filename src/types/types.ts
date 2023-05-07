import {ButtonHTMLAttributes, HTMLProps, InputHTMLAttributes, LabelHTMLAttributes} from "react";
import {RouteComponentProps} from "react-router-dom";

export interface IProtectedRoute {
    children: string | JSX.Element | JSX.Element[],
    rest?: HTMLProps<RouteComponentProps>,
    path?: string,
    exact?: boolean
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    classname?: string,
    onclick?: () => void
}

export interface ILabel extends LabelHTMLAttributes<HTMLLabelElement>{
    text: string,
    classname?: string
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    classname?: string,
}

export interface User {
    "id": string,
    "email": string,
    "name": string,
    "photo": string,
    "city": string,
    "description": string,
    "univ": string,
    "age": number,
    "posts": [],
    "friends": []
}

export interface IModal {
    children?: JSX.Element,
    isActive: boolean,
    closeModal: () => void,
}

export interface IModalEditProfile extends IModal {
    data: User
}
