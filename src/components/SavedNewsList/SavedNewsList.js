import React, {useState, useEffect} from 'react';
import '../../components/NewsCardList/NewsCardList.css'
import NewsCard from "../NewsCard/NewsCard";
import Button from "../Button/Button";

function SavedNewsList(props) {
  const savedArticles = props.savedArticles;

  const [quantity, setQuantity] = useState(3);
  const [newArr, setNewArr] = useState(savedArticles.slice(0, 3));

  useEffect(() => {
    setNewArr(savedArticles.slice(0, newArr.length))
    // eslint-disable-next-line
  }, [savedArticles, newArr.length])

  function handleButtonClick(isMainPage) {
    // isMainPage = false
    // props.onShowMoreClick(isMainPage)
    setQuantity((prev) => prev + 3)
    const newElements = savedArticles.slice(quantity, quantity + 3)
    setNewArr(prev => prev.concat(newElements))
  }

  return (
    <section className="news news_active">
      <ul className="news-list">
        {
          newArr.map((article) => {
            const { _id, title, keyword, text, date, source, link, image } = article

            return (
              <NewsCard
                key={_id}
                title={title}
                keyword={keyword}
                text={text}
                date={date}
                source={source}
                link={link}
                image={image}
                isSaved={true}
                savedArticles={savedArticles}
                setSavedArticles={props.setSavedArticles}
                // isLoggedIn={props.isLoggedIn}
                newsCard={article}
                token={props.token}
                onTrashClick={props.onTrashClick}
              />
            )
          })
        }
      </ul>
      {
        newArr.length !== savedArticles.length &&
        <Button classType={'news'} onClick={handleButtonClick}>
          <><p className="button__text">Показать еще</p></>
        </Button>
      }
    </section>
  );
}

export default SavedNewsList;