/**
 * @component
 * Компонент-Modal
 * @props
 * children - Попап со стилями,
 * isActive - true/false - если активно, отображает попап
 * closeModal - функция закрытия попапа
 * @returns
 * возвращает Modal - это оверлей
 */

import React from "react";
import styleModal from "./Modal.module.css";
import { createPortal } from "react-dom";
import { IModal } from "../../types/types";

const modal = document.getElementById("modals") as HTMLDivElement;

export const Modal: React.FC<IModal> = ({ children, isActive, closeModal }) => {
  return createPortal(
    <>
      {isActive ? (
        <div className={styleModal.div}>
          <div className={styleModal.modal}>
            <button onClick={closeModal} className={styleModal.btn}>
              &#10005;
            </button>
            {children}
          </div>
          <div onClick={closeModal} className={styleModal.overlay}></div>
        </div>
      ) : (
        ""
      )}
    </>,
    modal
  );
};
