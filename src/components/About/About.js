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
          Это блок с описанием автора проекта.
          Здесь следует указать, как вас зовут,
          чем вы занимаетесь, какими технологиями
          разработки владеете.
        </p>
        <p className="about__text">
          Также можно рассказать о процессе обучения в Практикуме,
          чему вы тут научились, и чем можете помочь потенциальным
          заказчикам.
        </p>
      </div>
    </section>
  );
}

export default About;
