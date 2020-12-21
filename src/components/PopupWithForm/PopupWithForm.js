import React from 'react'
import './PopupWithForm.css'

function PopupWithForm(props) {
  return (
    <section className={
      props.isOpen
        ? `popup popup_type_${props.name} popup_visible`
        : `popup popup_type_${props.name}`
    }>
      <div  className={`popup__container popup__container_type_${props.name}`}>
        <h2 className="popup__title"> {props.title} </h2>
        <div onClick={props.onClose} className="popup__close-btn"></div>
        <form onSubmit={props.onSubmit} name={`${props.name}`} className="popup__form" noValidate>
          {props.children}
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;
