import React, { useState } from 'react';
import './NewsCard.css'

function NewsCard(props) {
  const [isMarked, setIsMarked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    if (isMarked) {
      setIsMarked(false)
      return;
    }
    setIsMarked(true)
  }

  function handleMouseEnter() {
    setIsOpen(true)
  }

  function handleMouseLeave() {
    setIsOpen(false)
  }

  return (
    <li className="card">
      <div className="card__keyword">
        { props.keyword }
      </div>
      <div className={isOpen
        ? 'card__auth-warning card__auth-warning_active'
        : 'card__auth-warning'}>
        Войдите, чтобы сохранять статьи
      </div>
      <div
        onClick={ handleClick }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          isMarked
            ? 'card__bookmark-container card__bookmark-container_type_marked'
            : 'card__bookmark-container'
        }>
      </div>
      <figure className="card__figure">
        <img className="card__img" src={ props.image } alt="Заглавное фото статьи"/>
        <figcaption className="card__caption">{ props.date }</figcaption>
      </figure>
      <div className="card__heading">
        <h3 className="card__title">{ props.title }</h3>
        <p className="card__text">{ props.text }</p>
        <span className="card__source">{ props.source }</span>
      </div>
    </li>
  );
}

export default NewsCard;
