import React, { useState } from 'react';
import './NewsCard.css'
import dateParser from "../../utils/dateParser";

function NewsCard(props) {
  // const { savedArticles, setSavedArticles } = props;
  // const [savedCard, setSavedCard] = useState([]);
  const [isMarked, setIsMarked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const card = props.newsCard
  card.keyword = props.keyword

  const keyword = props.keyword.charAt(0).toUpperCase() + props.keyword.substr(1)

  function handleBookmarkClick() {
    props.onBookmarkClick(isMarked, setIsMarked, card)
    // mainApi.saveArticle(props.token, card)
    //   .then((res) => {
    //     setIsMarked(true)
    //     console.log(res)
    //     setSavedCard(savedCard.concat(res));
    //     // console.log(savedCard)
    //   })
    //   .catch((err) => {console.log(err)})
  }

  function handleTrashClick() {
    props.onTrashClick(card)
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
        { props.isSaved ? <p className="card__keyword">{ keyword }</p> : null }

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
              onClick={handleBookmarkClick}
              // onClick={props.isLoggedIn ? handleBookmarkClick : props.onBookmarkClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={
                isMarked
                  ? 'card__button card__button_type_bookmark_is-marked_true'
                  : 'card__button card__button_type_bookmark_is-marked_false'}>
            </button>
        }

      <a
        href={ props.link }
        target="_blank"
        rel="noreferrer"
        className="card__link">

      <div className="card__figure">
        <img className="card__img" src={ props.image } alt="Заглавное фото статьи"/>
        <p className="card__caption">{ dateParser(props.date) }</p>
      </div>

        <div className="card__container">
          <div className="card__heading">
            <h3 className="card__title">{ props.title }</h3>
            <span className="card__text">{ props.text }</span>
          </div>

          <span className="card__source">{ props.source }</span>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
