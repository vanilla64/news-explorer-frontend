import React from 'react';
import './Header.css'
import logo from "../../images/logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  function openLoginPopup() {
    props.onOpenLoginPopup()
  }

  return (
    <header className="header">
      <div className="header__navbar">
        <img className="header__logo" src={logo} alt="Логотип" />
        <Navigation
          onButtonClick={openLoginPopup}
        />
      </div>
      <div className="header__container">
        <h1 className="header__title">Что творится в мире?</h1>
        <p className='header__text'>Находите самые свежие статьи на любую тему и
          сохраняйте в своём личном кабинете.
        </p>
        <SearchForm
          handleSubmit={props.onNewsVisible}
        />
      </div>
    </header>
  );
}

export default Header;
