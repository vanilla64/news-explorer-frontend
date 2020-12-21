import React from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";
import Button from "../Button/Button";

function Navigation(props) {
  function openLoginPopup() {
    props.onButtonClick()
  }

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            to={'*'}
            className="navigation__link">Главная</NavLink>
        </li>
        <li>
          <NavLink
            to={'*'}
            className="navigation__link">Сохранённые статьи</NavLink>
        </li>
      </ul>
      <Button
        onClick={openLoginPopup}
        classType={'login'}
        text={'Авторизоваться'}/>
    </nav>
  );
}

export default Navigation;
