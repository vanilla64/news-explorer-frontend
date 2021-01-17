import React from 'react';
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";
import cardImgFirst from '../../images/card/card/image_08.png'
import Button from "../Button/Button";

function NewsCardList(props) {
  return (
    <section>
      <section className={
        props.isNewsVisible
          ? 'news news_active' : 'news'
      }>
        <h2 className='news__title'>Результаты поиска</h2>
        <ul className="news-list">
          <NewsCard
            title={'Национальное достояние – парки'}
            keyword={'Keyword'}
            text={'В 2016 году Америка отмечала важный юбилей: ' +
            'сто лет назад здесь начала складываться система национальных парков ' +
            '– охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
            date={'2 августа, 2019'}
            source={'Лента.ру'}
            link={'link'}
            image={cardImgFirst}
            isSaved={false}
            isLoggedIn={props.isLoggedIn}
          />
          <NewsCard
            title={'Национальное достояние – парки'}
            keyword={'Keyword'}
            text={'В 2016 году Америка отмечала важный юбилей: ' +
            'сто лет назад здесь начала складываться система национальных парков ' +
            '– охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
            date={'2 августа, 2019'}
            source={'Лента.ру'}
            link={'link'}
            image={cardImgFirst}
            isSaved={false}
            isLoggedIn={props.isLoggedIn}
          />
          <NewsCard
            title={'Национальное достояние – парки'}
            keyword={'Keyword'}
            text={'В 2016 году Америка отмечала важный юбилей: ' +
            'сто лет назад здесь начала складываться система национальных парков ' +
            '– охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
            date={'2 августа, 2019'}
            source={'Лента.ру'}
            link={'link'}
            image={cardImgFirst}
            isSaved={false}
            isLoggedIn={props.isLoggedIn}
          />
          <NewsCard
            title={'Национальное достояние – парки'}
            keyword={'Keyword'}
            text={'В 2016 году Америка отмечала важный юбилей: ' +
            'сто лет назад здесь начала складываться система национальных парков ' +
            '– охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
            date={'2 августа, 2019'}
            source={'Лента.ру'}
            link={'link'}
            image={cardImgFirst}
            isSaved={false}
            isLoggedIn={props.isLoggedIn}
          />
          <NewsCard
            title={'Национальное достояние – парки'}
            keyword={'Keyword'}
            text={'В 2016 году Америка отмечала важный юбилей: ' +
            'сто лет назад здесь начала складываться система национальных парков ' +
            '– охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
            date={'2 августа, 2019'}
            source={'Лента.ру'}
            link={'link'}
            image={cardImgFirst}
            isSaved={false}
            isLoggedIn={props.isLoggedIn}
          />
          <NewsCard
            title={'Национальное достояние – парки'}
            keyword={'Keyword'}
            text={'В 2016 году Америка отмечала важный юбилей: ' +
            'сто лет назад здесь начала складываться система национальных парков ' +
            '– охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
            date={'2 августа, 2019'}
            source={'Лента.ру'}
            link={'link'}
            image={cardImgFirst}
            isSaved={false}
            isLoggedIn={props.isLoggedIn}
          />
        </ul>
        <Button
          classType={'news'}
        >
          <>
            <p className="button__text">Показать еще</p>
          </>
        </Button>
      </section>
    </section>

  );
}

export default NewsCardList;