import {ButtonHTMLAttributes, HTMLProps, InputHTMLAttributes, LabelHTMLAttributes} from "react";
import {RouteComponentProps} from "react-router-dom";

export interface IProtectedRoute {
    children: string | JSX.Element | JSX.Element[],
    rest?: HTMLProps<RouteComponentProps>,
    path?: string,
    exact?: boolean
}

export interface ICheckResponse {
    ok: boolean,
    json: () => void
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    classname?: string,
}

export interface ILabel extends LabelHTMLAttributes<HTMLLabelElement>{
    text: string,
    classname?: string
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    classname?: string,
}