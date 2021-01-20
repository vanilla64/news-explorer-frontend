import React from 'react';
import './WebLinks.css'
import gitLogo from '../../images/git-logo.svg'
import vkLogo from '../../images/vk-circle.svg'

function WebLinks(props) {
  return (
    <div className="weblinks">
      {/*<a*/}
      {/*  className="weblinks__link"*/}
      {/*  href="https://praktikum.yandex.ru/"*/}
      {/*  target="_blank"*/}
      {/*  rel="noreferrer"*/}
      {/*>Яндекс.Практикум</a>*/}
      {/*<div className="weblinks__social-links">*/}
        <ul className="weblinks__list">
          <li className="weblinks__list-item">
            <a
              className="weblinks__link"
              href="https://github.com/vanilla64"
              target="_blank"
              rel="noreferrer">
              <img className="weblinks__img" src={gitLogo} alt="Github"/>
            </a>
          </li>
          <li className="weblinks__list-item">
            <a
              className="weblinks__link"
              href="https://vk.com/vanilla64"
              target="_blank"
              rel="noreferrer">
              <img className="weblinks__img" src={vkLogo} alt="Vkontakte"/>
            </a>
          </li>
        </ul>
      {/*</div>*/}
    </div>
  );
}

export default WebLinks;
