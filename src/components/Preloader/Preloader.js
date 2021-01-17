import React from 'react';
import './Preloader.css'

function Preloader(props) {
  return (
    <section className={
      props.isLoading
        ? 'preloader preloader_active'
        : 'preloader'}>
      <div className="preloader__item"></div>
      <p className="preloader__text">Идет поиск новостей...</p>
    </section>
  );
}

export default Preloader;