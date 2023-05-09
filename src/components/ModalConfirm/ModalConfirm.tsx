/**
 * @component
 * Компонент-ModalConfirm
 * @props
 * id - получает id поста,
 * isActive - true/false - если активно, отображает попап
 * closeModal - функция закрытия попапа
 * @returns
 * возвращает ModalConfirm - подтверждение на удаление поста
 */

import { FC } from "react";
import { Modal } from "../Modal/Modal";
import { IModalConfirmAndEditPost } from "../../types/types";
import styleModalConfrim from "./ModalConfirm.module.css";
import { Button } from "../Button/Button";
import { useDeletePostMutation } from "../../service/api/userApi";
export const ModalConfirm: FC<IModalConfirmAndEditPost> = ({
  isActive,
  closeModal,
  id,
}) => {
  const [deletePostApi] = useDeletePostMutation();
  const deletePost = async () => {
    closeModal();
    await deletePostApi(id);
  };
  return (
    <Modal isActive={isActive} closeModal={closeModal}>
      <div className={styleModalConfrim.modal}>
        <h2 className={styleModalConfrim.title}>Вы уверены?</h2>
        <Button
          onclick={deletePost}
          classname={styleModalConfrim.access}
          text="Подтвердить"
        />
        <Button
          onclick={closeModal}
          classname={styleModalConfrim.btn}
          text="Отменить"
        />
      </div>
    </Modal>
  );
};
