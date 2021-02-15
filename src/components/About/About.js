import React from 'react';
import './About.css'
import avatar from '../../images/author-avatar.jpg'

function About(props) {
  return (
    <section className="about">
      <img
        src={avatar}
        alt={'Аватар'}
        className="about__img" />
      <div className="about__heading">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__text">
          Привет! Меня зовут Сергей Машин.  Я веб-разработчик.
        </p>
        <p className="about__text">
          Стек используемых технологий: HTML5 / CSS3 / Javascript / React / Node.js.
        </p>
        <p className="about__text">
          Если тебе понравилась эта работа, буду признателен за обратную связь.
          Пиши мне в Telegram - @vanilla64.
        </p>
      </div>
    </section>
  );
}

export default About;
