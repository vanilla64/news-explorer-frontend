import React from 'react';
import './Footer.css';
import Navigation from "../Navigation/Navigation";
import {NavLink} from "react-router-dom";
import WebLinks from "../WebLinks/WebLinks";

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; 2020 Newsexplorer, Powered by News API
      </p>
      <div className="footer__navigation">
        <Navigation>
          {/*<>*/}
          <ul className="navigation__list navigation__list_type_footer">
            <li>
              <NavLink
                to={'/'}
                className="navigation__link navigation__link_type_footer"
              >Главная</NavLink>
            </li>
            <li>
              <a
                className="navigation__link navigation__link_type_footer"
                href="https://praktikum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
              >Яндекс.Практикум</a>
            </li>
          </ul>
            {/*<NavLink*/}
            {/*  to={'/'}*/}
            {/*  className="navigation__link navigation__link_type_footer"*/}
            {/*>Главная</NavLink>*/}
          {/*</>*/}
          {/*<a*/}
          {/*  className="navigation__link navigation__link_type_footer"*/}
          {/*  href="https://praktikum.yandex.ru/"*/}
          {/*  target="_blank"*/}
          {/*  rel="noreferrer"*/}
          {/*>Яндекс.Практикум</a>*/}
        </Navigation>
        <WebLinks />
      </div>
    </footer>
  );
}

export default Footer;