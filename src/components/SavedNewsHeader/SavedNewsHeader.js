import React from 'react';
import Header from '../Header/Header';
import blackLogo from '../../images/logo-black.svg';

function SavedNewsHeader(props) {
  return (
    <Header
      isMain={props.isMain}
      isLoggedIn={props.isLoggedIn}
      isCross={props.isCross}
      logo={blackLogo}
      userName={props.userName}
      onOpenLoginPopup={props.onOpenLoginPopup}
      onBurgerClick={props.onBurgerClick}>
      <>
        <p className="header__text_black">Сохранённые статьи</p>
        <h2 className="header__title_black">{ `${props.userName}, у вас 5 сохранённых статей` }</h2>
        <div className="header__keywords-container">
          <p className="header__paragraph">
            По ключевым словам: <span className="header__paragraph header__paragraph_type_bold">Природа</span>, <span className="header__paragraph header__paragraph_type_bold">Тайга</span> и <span className="header__paragraph header__paragraph_type_bold">2-м другим</span>
          </p>
        </div>
      </>
    </Header>
  );
}

export default SavedNewsHeader;