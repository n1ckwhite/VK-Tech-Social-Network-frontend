import {FC} from "react";
import cn from 'classnames'
import styleInput from './Input.module.css'
import {IInput} from "../../types/types";



export const Input: FC<IInput> = ({classname,...rest}) => {
    return (
        <>
        <input className={cn(styleInput.input, classname)} {...rest}/>
        </>
    )
}