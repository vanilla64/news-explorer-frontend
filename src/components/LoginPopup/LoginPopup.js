import React from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Button from "../Button/Button";

function LoginPopup(props) {
  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={ props.isOpen }
      name={props.name}
      title={props.title}
    >
      <>
        <label className="popup__label">
          <span className="popup__input-name">Email</span>
          <input
            className="popup__input"
            type="email"
            placeholder="Введите почту"
          />
          <span className="popup__error">
            Неправильный формат email
          </span>
        </label>
        <label className="popup__label">
          <span className="popup__input-name">Пароль</span>
          <input
            className="popup__input"
            type="password"
            placeholder="Введите пароль"
          />
          <span className="popup__error">
            Неправильный формат пароля
          </span>
        </label>
        <Button
          text={'Войти'}
          classType={'auth'}
        />
      </>
    </PopupWithForm>
  );
}

export default LoginPopup;