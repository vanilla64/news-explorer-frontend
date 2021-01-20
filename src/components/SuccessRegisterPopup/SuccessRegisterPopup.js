import React from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SuccessRegisterPopup(props) {
  return (
    <PopupWithForm
      onOverlayClose={props.onOverlayClose}
      onClose={props.onClose}
      isOpen={ props.isOpen }
      name={props.name}
      title={props.title}
    >
      <>
        <span
          className={`popup__link popup__link_type_${props.name}`}
          onClick={props.onLinkClick}>Войти</span>
      </>
    </PopupWithForm>
  );
}

export default SuccessRegisterPopup;