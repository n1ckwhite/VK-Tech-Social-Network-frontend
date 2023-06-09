/**
 * @component
 * Компонент-ModalPhoto
 * @props
 * isActive - true/false - если активно, отображает попап
 * closeModal - функция закрытия попапа
 * imgSrc - путь картинки
 * @returns
 * возвращает ModalPhoto - отображает картинку
 */

import { Modal } from "../Modal/Modal";
import { FC } from "react";
import { IModalPhoto } from "../../types/types";
import styleModalPhoto from "./ModalPhoto.module.css";
export const ModalPhoto: FC<IModalPhoto> = ({
  isActive,
  closeModal,
  imgSrc,
}) => {
  return (
    <Modal isActive={isActive} closeModal={closeModal}>
      <div className={styleModalPhoto.modal}>
        <img className={styleModalPhoto.img} src={imgSrc} alt="фото" />
      </div>
    </Modal>
  );
};
