import { memo, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import * as S from "./Modal.styled";

type Props = {
  isOpened: boolean;
  handleClose: () => void;
  children: any;
};

const ModalComponent = memo(({ isOpened, handleClose, children }: Props) => (
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={isOpened}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <S.Container>{children}</S.Container>
  </Modal>
));

export { ModalComponent as Modal };
