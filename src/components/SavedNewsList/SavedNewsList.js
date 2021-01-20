import React from 'react';
import '../../components/NewsCardList/NewsCardList.css'
import NewsCard from "../NewsCard/NewsCard";
import cardImgFirst from "../../images/card/card/image_08.png";

function SavedNewsList(props) {
  return (
    <section className="news news_active">
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
          isSaved={true}
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
          isSaved={true}
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
          isSaved={true}
        />
      </ul>

    </section>
  );
}

export default SavedNewsList;