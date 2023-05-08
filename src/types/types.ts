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

export interface IPost {
    id?: string,
    description: string,
    likes: number,
    photo: string,
    authorId?: string
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
    "posts"?: Array<IPost>,
    "friends"?: [],
}

export interface IModal {
    children?: JSX.Element,
    isActive: boolean,
    closeModal: () => void,
}

export interface IModalEditProfile extends IModal {
    data: User
}

export interface IModalConfirmAndEditPost extends IModal {
    id: string | undefined
}

export interface IModalEditPost extends IModalConfirmAndEditPost {
    photo: string,
    description: string
}

export interface IModalPhoto extends IModal {
    imgSrc: string
}

export interface IUserItem {
    photo: string,
    name: string,
    email: string,
    id: string
}

export interface IFriend {
    id?: string,
    friendId: string,
    friendName?: string,
    friendPhoto?: string,
    friendAge?: number,
}

export interface IQuizParams {
    id: string
}