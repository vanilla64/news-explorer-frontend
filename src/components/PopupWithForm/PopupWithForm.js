import React from 'react'
import './PopupWithForm.css'

function PopupWithForm(props) {
  // const [data, setData] = useState({
  //   email: '',
  //   password: '',
  //   name: '',
  // });

  // function handleSubmit(evt) {
  //   evt.preventDefault()
  //
  //   props.onSubmit(data)
  // }

  // function handleChange(evt) {
  //   const { name, value } = evt.target;
  //   setData((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     }
  //   })
  //   props.onHandleChange(evt)
  // }

  return (
    <div
      className={
        props.isOpen
          ? `popup popup_type_${props.name} popup_visible`
          : `popup popup_type_${props.name}`}
      onClick={props.onOverlayClose}>
      <div  className={`popup__container popup__container_type_${props.name}`}>
        <h2 className={`popup__title popup__title_type_${props.name}`}> {props.title} </h2>
        <div onClick={props.onClose} className="popup__close-btn"></div>
        <form onSubmit={props.onSubmit} name={`${props.name}`} className="popup__form" noValidate>
          {props.children}
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
