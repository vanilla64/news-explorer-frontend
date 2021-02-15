import React from 'react';
import { Route } from 'react-router-dom'
import './Main.css'
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import SavedNewsList from "../SavedNewsList/SavedNewsList";
import Preloader from "../Preloader/Preloader";
import NotFoundNews from "../NotFoundNews/NotFoundNews";

function Main(props) {
  return (
    <main className="content">
      <Preloader isLoading={props.isLoading}/>
      <NotFoundNews
        isNotFoundNewsVisible={props.isNotFoundNewsVisible}
      />
      <Route path="/" exact>
        <NewsCardList
          isLoggedIn={props.isLoggedIn}
          isLoading={props.isLoading}
          isNewsVisible={props.newsVisible}
          newsList={props.newsList}
          keyword={props.keyword}
          token={props.token}
          onShowMoreClick={props.onShowMoreClick}
          isShowMoreButtonVisible={props.isShowMoreButtonVisible}
          onBookmarkClick={props.onBookmarkClick}
          handleBookmarkClick={props.onBookmarkClick}
        />
        <About />
      </Route>
      <Route path="/saved-news">
        <SavedNewsList
          onTrashClick={props.onTrashClick}
          token={props.token}
          savedArticles={props.savedArticles}
          setSavedArticles={props.setSavedArticles}
          onShowMoreClick={props.onShowMoreClick}
          isSavedNewsButtonVisible={props.isSavedNewsButtonVisible}
        />
      </Route>
    </main>
  );
}

export default Main;
