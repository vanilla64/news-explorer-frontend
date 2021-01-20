import React from 'react';
import './NotFoundNews.css';
import notFoundImg from '../../images/not-found.svg'

function NotFoundNews(props) {
  return (
    <section className={props.isNotFoundNewsVisible
      ? 'not-found-news not-found-news_active'
      : 'not-found-news'
    }>
      <img className="not-found-news__img" src={notFoundImg} alt="Новости не найдены"/>
      <h2 className="not-found-news__title">Ничего не найдено</h2>
      <p className="not-found-news__text">К сожалению по вашему запросу ничего не найдено.</p>
    </section>
  );
}

export default NotFoundNews;
