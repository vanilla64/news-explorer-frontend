import React from 'react';
import './Main.css'
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";

function Main(props) {
  return (
    <main className="content">
      <NewsCardList
        isLoading={props.isLoading}
        isNewsVisible={props.newsVisible}
      />
      <About />
    </main>
  );
}

export default Main;
