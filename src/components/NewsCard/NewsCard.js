import React, { useState } from 'react';
import './NewsCard.css'

function NewsCard(props) {
  const [isMarked, setIsMarked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleBookmarkClick() {
    if (isMarked) {
      setIsMarked(false)
      return;
    }
    setIsMarked(true)
  }

  function handleTrashClick(evt) {
    const currentCard = evt.target.closest('.card')
    currentCard.remove()
  }

  function handleMouseEnter() {
    if (isMarked) {
      return;
    }
    setIsOpen(true)
  }

  function handleMouseLeave() {
    setIsOpen(false)
  }

  return (
    <li className="card">
      { props.isSaved ?
        <p className="card__keyword">
          { props.keyword }
        </p> : null
      }

      {
        props.isLoggedIn
        ?
          null
          :
          <p className={isOpen
            ? `
          card__warning
          card__warning_active
          card__warning_is-saved_${props.isSaved}
          `
            : 'card__warning'}>
            { props.isSaved
              ? 'Убрать из сохранённых'
              : 'Войдите, чтобы сохранять статьи' }
          </p>
      }

      {
        props.isSaved
          ?
          <button
            onClick={handleTrashClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={'card__button card__button_type_trash'}>
          </button>
          :
          <button
            // onClick={handleBookmarkClick}
            onClick={props.isLoggedIn ? handleBookmarkClick : null}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={
              isMarked
                ? 'card__button card__button_type_bookmark_is-marked_true'
                : 'card__button card__button_type_bookmark_is-marked_false'}>
          </button>
      }

      <figure className="card__figure">
        <img className="card__img" src={ props.image } alt="Заглавное фото статьи"/>
        <figcaption className="card__caption">{ props.date }</figcaption>
      </figure>
      <div className="card__container">
        <div className="card__heading">
          <h3 className="card__title">{ props.title }</h3>
          <span className="card__text">{ props.text }</span>
        </div>

        <span className="card__source">{ props.source }</span>
      </div>
      {/*<span className="card__source">{ props.source }</span>*/}
    </li>
  );
}

export default NewsCard;
