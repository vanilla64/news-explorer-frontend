import React from 'react';
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";
import Button from "../Button/Button";

function NewsCardList(props) {
  const newsList = props.newsList
  console.log(newsList)

  return (
    <section>
      <section className={
        props.isNewsVisible
          ? 'news news_active' : 'news'
      }>
        <h2 className='news__title'>Результаты поиска</h2>
        <ul className="news-list">
          {
            newsList.map((newsCard, i = 0) => (
              <NewsCard
                key={i++}
                title={newsCard.title}
                keyword={props.keyword}
                text={newsCard.description}
                date={newsCard.publishedAt}
                source={newsCard.source.name}
                link={newsCard.url}
                image={newsCard.urlToImage}
                isSaved={false}
                isLoggedIn={props.isLoggedIn}
                newsCard={newsCard}
                token={props.token}
                onBookmarkClick={props.onBookmarkClick}
              />
            ))
          }
        </ul>
        {
          props.isShowMoreButtonVisible ?
          <Button classType={'news'} onClick={props.onShowMoreClick}>
            <><p className="button__text">Показать еще</p></>
          </Button> : <></>
        }
      </section>
    </section>

  );
}

export default NewsCardList;