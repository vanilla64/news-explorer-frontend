import React from 'react';
import './Header.css'
import Navigation from "../Navigation/Navigation";
import { NavLink, Route } from "react-router-dom";
import Button from "../Button/Button";
import whiteLogout from "../../images/logout-white.svg";
import blackLogout from "../../images/logout-black.svg";

function Header(props) {
  const classNames = {
    header: props.isMain
      ? 'header header_type_main'
      : 'header header_type_news',
    container: props.isMain
      ? 'header__container'
      : 'header__container header__container_type_news',
    navbar: props.isMain
      ? 'header__navbar'
      : 'header__navbar header__navbar_type_news',
    link: props.isMain
      ? 'navigation__link'
      : 'navigation__link navigation__link_type_news',
    activeLink: props.isMain
      ? 'navigation__link_active navigation__link_active_type_main'
      : 'navigation__link_active navigation__link_active_type_news',
    burgerButtonWhite : props.isCross
      ? 'button button_type_burger button_type_burger_active'
      : 'button button_type_burger',
    burgerButtonBlack: props.isCross
      ? 'button button_type_burger button_type_burger_active'
      : 'button button_type_burger button_type_burger_color_black',
  }

  return (
    <header
      className={classNames.header}>
      <div className={classNames.navbar}>
        <NavLink to="/">
          <img className="header__logo" src={props.logo} alt="Логотип" />
        </NavLink>
        <Navigation>
          {
            <ul className="navigation__list navigation__list_type_header">
              {
                props.isLoggedIn
                  ?
                  <>
                    <li>
                      <NavLink
                        to={'/'} exact
                        className={classNames.link}
                        activeClassName={classNames.activeLink}
                      >Главная</NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={'/saved-news'}
                        className={classNames.link}
                        activeClassName={classNames.activeLink}
                      >Сохранённые статьи</NavLink>
                    </li>
                  </>
                  :
                  <>
                    <li>
                      <NavLink
                        to={'/'} exact
                        className={classNames.link}
                        activeClassName={classNames.activeLink}
                      >Главная</NavLink>
                    </li>
                  </>
              }
            </ul>
          }
          <button
            onClick={props.onBurgerClick}
            className={props.isMain
              ? classNames.burgerButtonWhite
              : classNames.burgerButtonBlack}
          />
          <Route path="/" exact>
            <Button
              isLoggedIn={props.isLoggedIn}
              isMain={props.isMain}
              onClick={props.onOpenLoginPopup}
              classType={'login'}
            >
              <>
                <p className="button__text">
                  {
                    props.isLoggedIn
                      ?  props.userName
                      : 'Авторизоваться'
                  }
                </p>
                {
                  props.isLoggedIn
                  ? <img className="button__img" src={whiteLogout} alt="Выйти"/>
                  : null
                }
              </>
            </Button>
          </Route>
          <Route path="/saved-news">
            <Button
              isLoggedIn={props.isLoggedIn}
              isMain={props.isMain}
              onClick={props.onOpenLoginPopup}
              classType={'header-news'}
            >
              <>
                <p className="button__text">
                  {
                    props.isLoggedIn
                      ?  props.userName
                      : 'Авторизоваться'
                  }
                </p>
                {
                  props.isLoggedIn
                    ? <img className="button__img" src={blackLogout} alt="Выйти"/>
                    : null
                }
              </>
            </Button>
          </Route>
        </Navigation>
      </div>
      <div className={classNames.container}>
        { props.children }
      </div>
    </header>
  );
}

export default Header;
