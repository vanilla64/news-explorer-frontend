import React from 'react';
import Header from "../Header/Header";
import logoWhite from "../../images/logo-white.svg";
import SearchForm from "../SearchForm/SearchForm";

function MainHeader(props) {

  return (
    <Header
      isMain={props.isMain}
      isLoggedIn={props.isLoggedIn}
      isCross={props.isCross}
      logo={logoWhite}
      // userName={props.userName}
      onOpenLoginPopup={props.onOpenLoginPopup}
      onBurgerClick={props.onBurgerClick}
    >
      <>
        <h1 className="header__title">Что творится в мире?</h1>
        <p className='header__text'>Находите самые свежие статьи на любую тему и
          сохраняйте в своём личном кабинете.
        </p>
        <SearchForm
          onNewsVisible={props.onNewsVisible}
          onSearchFormChange={props.onSearchFormChange}
        />
      </>
    </Header>
  );
}

export default MainHeader;