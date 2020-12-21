import React, { useState } from 'react';
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LoginPopup from "../LoginPopup/LoginPopup";

function App(props) {
  // Стейт для отображения блока с новостями
  // Будет который будет задействован в следующем этапе диплома
  const [isNewsVisible, setIsNewsVisible] = useState(false);


  // Стейт для отображения прелоудера
  // который будет задействован в следующем этапе диплома
  // const [isLoading, setIsLoading] = useState(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  function handleLoginPopupOpen() {
    setIsLoginPopupOpen(true)
  }

  function handleNewsVisible() {
    setIsNewsVisible(true)
    console.log('click')
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false)
  }

  return (
    <div className="app">
      <Header
        onOpenLoginPopup={handleLoginPopupOpen}
        onNewsVisible={handleNewsVisible}
      />
      <Main
        newsVisible={isNewsVisible}
      />
      <Footer />
      <LoginPopup
        onClose={closeAllPopups}
        isOpen={isLoginPopupOpen}
        name={'login'}
        title={'Вход'}
      />
    </div>
  );
}

export default App;
