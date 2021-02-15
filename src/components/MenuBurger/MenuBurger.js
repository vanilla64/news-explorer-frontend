import React, { useContext } from 'react';
import './MenuBurger.css'
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import {NavLink} from "react-router-dom";
import whiteLogout from "../../images/logout-white.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function MenuBurger(props) {
  const userName = useContext(CurrentUserContext)
  return (
    <section className={
      props.isBurgerOpen
        ? 'burger burger_active'
        : 'burger'
    }>
      <div className="burger__container">
        <Navigation>
          <>
            <ul className="navigation__list navigation__list_type_burger">
              <li>
                <NavLink
                  to={'/'} exact
                  className="navigation__link navigation__link_type_burger"
                >Главная</NavLink>
              </li>
              <li>
                <NavLink
                  to={'/saved-news'}
                  className="navigation__link navigation__link_type_burger"
                >Сохранённые статьи</NavLink>
              </li>
            </ul>

          </>
        </Navigation>
        <Button
          isLoggedIn={props.isLoggedIn}
          // isMain={props.isMain}
          onClick={props.onOpenLoginPopup}
          classType={'header-burger'}
        >
          <>
            <p className="button__text">
              {
                props.isLoggedIn
                  ?  userName
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
      </div>
    </section>
  );
}

export default MenuBurger;
