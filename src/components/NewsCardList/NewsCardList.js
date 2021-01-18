import React from 'react';
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";
import cardImgFirst from '../../images/card/card/image_08.png'
import cardImgSecond from '../../images/card/card/image_04.png'
import cardImgThird from '../../images/card/card/image_07.png'
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
            title={'Лесные огоньки: история одной фотографии'}
            keyword={'Keyword'}
            text={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, ' +
            'чтобы запечатлеть ускользающую красоту одного' +
            'из местных чудес природы.'}
            date={'2 августа, 2019'}
            source={'Медуза'}
            link={'link'}
            image={cardImgSecond}
            isSaved={false}
            isLoggedIn={props.isLoggedIn}
          />
          <NewsCard
            title={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'}
            keyword={'Keyword'}
            text={'Знаменитый фотограф снимает первозданные леса России, ' +
            'чтобы рассказать о необходимости их сохранения. ' +
            'В этот раз он отправился в Двинско-Пинежскую тайгу, где ' +
            'В этот раз он отправился в Двинско-Пинежскую тайгу, где ' +
            'В этот раз он отправился в Двинско-Пинежскую тайгу, где '}
            date={'2 августа, 2019'}
            source={'Риа'}
            link={'link'}
            image={cardImgThird}
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