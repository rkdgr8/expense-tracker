import React from "react";
import { containerStyle, modalStyle } from "./style";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const Modal = ({ children, style, isOpen, onClose = () => {} }) => {
  if (!isOpen) {
    return null;
  }

  const onBodyClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div css={[containerStyle, style]} onClick={onClose}>
      <div css={modalStyle} className="modal-body" onClick={onBodyClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
