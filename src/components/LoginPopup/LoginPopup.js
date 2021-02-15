import React, { useState, useEffect } from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Button from "../Button/Button";

function LoginPopup(props) {
  const [data, setData] = useState({
      email: '',
      password: '',
      // name: '',
    });

  const [error, setError] = useState({});
  const [isValid, setIsValid] = React.useState({
    email: false,
    password: false,
    // name: false,
  });

  useEffect(() => {
    setData({
      email: '',
      password: '',
    })

    setError({})

    setIsValid({
      email: false,
      password: false,
    })

  }, [props.isOpen])

  function handleSubmit(evt) {
    evt.preventDefault()
    if (!isValid.email || !isValid.password) {
      setIsValid((prev) => {
        return {
          ...prev,
          email:false,
          password: false
        }
      })
      return
    }

    props.onLogin(data)

    setData({
      email: '',
      password: ''
    })
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData((prev) => {
      return {...prev, [name]: value}
    })
    setError({...error, [name]: evt.target.validationMessage })

    setIsValid((prev) => {
      return {
        ...prev,
        [name]: evt.target.checkValidity()
      }
    })

    console.log(isValid.password)
  }

  return (
    <PopupWithForm
      // onHandleChange={handleChange}
      onOverlayClose={props.onOverlayClose}
      onClose={props.onClose}
      // onSubmit={handleSubmit}
      isOpen={ props.isOpen }
      name={props.name}
      title={props.title}
    >
      <>
        <label className="popup__label">
          <span className="popup__input-name">Email</span>
          <input
            onChange={handleChange}
            className="popup__input"
            required
            type="email"
            name="email"
            value={data.email ? data.email : ''}
            placeholder="Введите почту"
          />
          <span className={isValid.email ? 'popup__error' : 'popup__error popup__error_visible'}>
            {error.email || ''}
          </span>
        </label>
        <label className="popup__label">
          <span className="popup__input-name">Пароль</span>
          <input
            onChange={handleChange}
            className="popup__input"
            required
            type="password"
            name="password"
            minLength="5"
            // value={data.password ? data.password : ''}
            placeholder="Введите пароль"
          />
          <span className={isValid.password ? 'popup__error' : 'popup__error popup__error_visible'}>
            {error.password || ''}
          </span>
          {/*<span className={isValid.password ? 'popup__error' : 'popup__error popup__error_type_server-err popup__error_visible'}>*/}
          {/*  {error.password || ''}*/}
          {/*</span>*/}
        </label>
        {
          <Button
            classType={isValid.email && isValid.password ? 'auth' : 'auth_disabled'}
            onClick={handleSubmit}>
            <p className="button__text">Войти</p>
          </Button>
        }


        <p className="popup__text">
          или <span className="popup__link" onClick={props.onLinkClick}>Зарегистрироваться</span></p>
      </>
    </PopupWithForm>
  );
}

export default LoginPopup;
