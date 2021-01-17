import React, { useState,useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import MainHeader from "../MainHeader/MainHeader";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LoginPopup from "../LoginPopup/LoginPopup";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import SuccessRegisterPopup from "../SuccessRegisterPopup/SuccessRegisterPopup";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import MenuBurger from "../MenuBurger/MenuBurger";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Стейт для отображения блока с новостями
  // который будет задействован в следующем этапе диплома
  const [isNewsVisible, setIsNewsVisible] = useState(false);

  // Стейт для отображения прелоудера
  // который будет задействован в следующем этапе диплома
  const [isLoading, setIsLoading] = useState(false);

  const [isNotFoundNewsVisible, setIsNotFoundNewsVisible] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessRegisterPopupOpen, setIsSuccessRegisterPopupOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isCross, setIsCross] = useState(false);

  function handleBurgerClick() {
    if (isCross) {
      setIsCross(false)
      setIsBurgerOpen(false)
    } else {
      setIsCross(true)
      setIsBurgerOpen(true)
    }
  }

  function handleLoginPopupOpen() {
    setIsLoginPopupOpen(true)
    setIsRegisterPopupOpen(false)
    setIsSuccessRegisterPopupOpen(false)
    setIsBurgerOpen(false)
    setIsCross(false)
  }

  function handleRegisterPopupOpen() {
    setIsRegisterPopupOpen(true)
    setIsLoginPopupOpen(false)
    setIsSuccessRegisterPopupOpen(false)
  }

  function handleLogout() {
    setIsLoggedIn(false)
    setIsBurgerOpen(false)
    setIsCross(false)
  }

  function handleNewsVisible() {
    setIsNotFoundNewsVisible(false)
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsNewsVisible(true)
    }, 1500)

    setTimeout(() => {
      setIsNewsVisible(false)
      setIsNotFoundNewsVisible(true)
    }, 3000)
  }

  function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups()
    }
  }

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups()
      }
    }

    document.addEventListener('keydown', handleEscClose)
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  }, [])

  function closeAllPopups() {
    setIsLoginPopupOpen(false)
    setIsRegisterPopupOpen(false)
    setIsSuccessRegisterPopupOpen(false)
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact >
          <MainHeader
            isMain={true}
            isLoggedIn={isLoggedIn}
            isCross={isCross}
            userName={'Грета'}
            onOpenLoginPopup={ isLoggedIn ? handleLogout : handleLoginPopupOpen }
            onNewsVisible={handleNewsVisible}
            onBurgerClick={handleBurgerClick}
          />
          <Main
            isLoggedIn={isLoggedIn}
            newsVisible={isNewsVisible}
            isLoading={isLoading}
            isNotFoundNewsVisible={isNotFoundNewsVisible}
          />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader
            isMain={false}
            isLoggedIn={isLoggedIn}
            isCross={isCross}
            userName={'Грета'}
            onOpenLoginPopup={ isLoggedIn ? handleLogout : handleLoginPopupOpen }
            onBurgerClick={handleBurgerClick}/>
          <Main
            // newsVisible={true}
          />
        </Route>
        <Route path="/404">
          <NotFoundPage />
        </Route>
        <Redirect to="/404" />
      </Switch>
      <Footer />
      <LoginPopup
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
        isOpen={isLoginPopupOpen}
        onLinkClick={handleRegisterPopupOpen}
        name={'login'}
        title={'Вход'}
      />
      <RegisterPopup
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
        isOpen={isRegisterPopupOpen}
        onLinkClick={handleLoginPopupOpen}
        name={'register'}
        title={'Регистрация'}
      />
      <SuccessRegisterPopup
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
        isOpen={isSuccessRegisterPopupOpen}
        onLinkClick={handleLoginPopupOpen}
        name={'success-register'}
        title={'Пользователь успешно зарегистрирован!'}
      />
      <MenuBurger
        isLoggedIn={isLoggedIn}
        isBurgerOpen={isBurgerOpen}
        onOpenLoginPopup={ isLoggedIn ? handleLogout : handleLoginPopupOpen }
        userName={'Грэта'}
      />
    </div>
  );
}

export default App;
