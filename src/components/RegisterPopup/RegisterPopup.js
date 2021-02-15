import React, {useEffect, useState} from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Button from "../Button/Button";

function RegisterPopup(props) {
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState({});
  const [isValid, setIsValid] = React.useState({
    email: false,
    password: false,
    name: false
  });

  useEffect(() => {
    setValues({
      email: '',
      password: '',
      name: ''
    })

    setError({})

    setIsValid({
      email: false,
      password: false,
      name: false
    })

  }, [props.isOpen])

  function handleSubmit(evt) {
    evt.preventDefault()

    if (!isValid.email || !isValid.password) {
      setIsValid((prev) => {
        return {
          ...prev,
          email:false,
          password: false,
          name: false
        }
      })
      return
    }

    props.onRegister(values)
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
    setError({...error, [evt.target.name]: evt.target.validationMessage })
    setIsValid((prev) => {
      return {
        ...prev,
        [name]: evt.target.checkValidity()
      }
    })
  }

  return (
    <PopupWithForm
      // onHandleChange={handleChange}
      onOverlayClose={props.onOverlayClose}
      onClose={props.onClose}
      // onSubmit={handleSubmit}
      isOpen={props.isOpen}
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
            value={values.email || ''}
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
            value={values.password}
            placeholder="Введите пароль"
          />
          <span className={isValid.password ? 'popup__error' : 'popup__error popup__error_visible'}>
            {error.password || ''}
          </span>
        </label>
        <label className="popup__label">
          <span className="popup__input-name">Имя</span>
          <input
            onChange={handleChange}
            className="popup__input"
            required
            type="text"
            name="name"
            value={values.name}
            placeholder="Введите своё имя"
          />
          <span className={isValid.name ? 'popup__error' : 'popup__error popup__error_visible'}>
            {error.name || ''}
          </span>
        </label>
        <Button classType={
          isValid.email && isValid.password && isValid.name
          ? 'auth' : 'auth_disabled'}
          onClick={handleSubmit}
        >
          <p className="button__text">Зарегистрироваться</p>
        </Button>
        <p className="popup__text">
          или <span className="popup__link" onClick={props.onLinkClick}>Войти</span></p>
      </>
    </PopupWithForm>
  );
}

export default RegisterPopup;
