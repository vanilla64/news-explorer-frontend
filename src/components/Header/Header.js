import React from 'react';
import './Header.css'
import logo from "../../images/logo.svg";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header__navbar">
        <img className="header__logo" src={logo} alt="Логотип" />
        <nav className="header__navigation">
          <ul className="header__list">
            <li>
              <NavLink
                to={'*'}
                className="header__navlink">Главная</NavLink>
            </li>
            <li>
              <NavLink
                to={'*'}
                className="header__navlink">Сохранённые статьи</NavLink>
            </li>
          </ul>
          <Button classType={'login'} />
        </nav>
      </div>
      <div className="header__container">
        <h1 className="header__title">Что творится в мире?</h1>
        <p className='header__text'>Находите самые свежие статьи на любую тему и
          сохраняйте в своём личном кабинете.
        </p>
        <form
          className='header__form' noValidate>
          <label className="header__label">
            <input
              id="search-input"
              name="search"
              className="header__input" />
            <Button
              type="submit" classType={'search'}/>
          </label>
        </form>
      </div>
    </header>
  );
}

export default Header;
