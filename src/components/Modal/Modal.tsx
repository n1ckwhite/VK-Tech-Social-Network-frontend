import React from "react";
import styleModal from './Modal.module.css'
import {createPortal} from "react-dom";
import {IModal} from "../../types/types";



const modal = document.getElementById('modals') as any


export const Modal: React.FC<IModal> = ({children,isActive, closeModal}) => {

    return createPortal(
        <>
        {isActive ? (
            <div className={styleModal.div}>
            <div className={styleModal.modal}>
                <button onClick={closeModal} className={styleModal.btn}>&#10005;</button>
                {children}
            </div>
                <div onClick={closeModal} className={styleModal.overlay}></div>
            </div>)
            : ''}
        </>,modal
    )

};