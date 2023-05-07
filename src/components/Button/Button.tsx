import {FC} from "react";
import styleButton from './Button.module.css'
import cn from 'classnames'
import {IButton} from "../../types/types";



export const Button: FC<IButton> = ({text,classname,...rest}) => {
    return (
        <>
        <button className={cn(styleButton.button,classname)}>{text}</button>
        </>
    )
}