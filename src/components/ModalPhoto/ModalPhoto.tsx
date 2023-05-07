import {Modal} from "../Modal/Modal";
import {FC} from "react";
import {IModalPhoto} from "../../types/types";
export const ModalPhoto: FC<IModalPhoto> = ({isActive,closeModal,imgSrc}) => {
    return (
        <Modal isActive={isActive} closeModal={closeModal}>
            <div>
                <img  src={imgSrc} alt="Я"/>
            </div>
        </Modal>
    )
}