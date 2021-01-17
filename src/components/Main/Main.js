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
        />
        <About />
      </Route>
      <Route path="/saved-news">
        <SavedNewsList />
      </Route>
    </main>
  );
}

export default Main;
