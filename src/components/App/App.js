import React, {useState, useEffect, useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import newsApi from '../../utils/NewsApi';
import mainApi from "../../utils/MainApi";
import { setToken, getToken, removeToken } from '../../utils/token';
import { saveNewsInLocalStorage, getNewsInLocalStorage, removeNewsInLocalStorage } from '../../utils/articles';
import {
  storeSavedArticleInLocalStorage,
  getSavedArticleInLocalStorage,
  removeSavedArticleInLocalStorage } from '../../utils/saved-news';

import MainHeader from "../MainHeader/MainHeader";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LoginPopup from "../LoginPopup/LoginPopup";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import SuccessRegisterPopup from "../SuccessRegisterPopup/SuccessRegisterPopup";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import MenuBurger from "../MenuBurger/MenuBurger";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newsList, setNewsList] = useState([]);

  // Стейт для отображения блока с новостями
  const [isNewsVisible, setIsNewsVisible] = useState(false);

  // Стейт для отображения прелоудера
  const [isLoading, setIsLoading] = useState(false);

  const [isNotFoundNewsVisible, setIsNotFoundNewsVisible] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessRegisterPopupOpen, setIsSuccessRegisterPopupOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState(false);
  const [isSavedNewsButtonVisible, setIsSavedNewsButtonVisible] = useState(false);
  const [isCross, setIsCross] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [userName, setUserName] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);
  const [savedArticlesLength, setSavedArticlesLength] = useState('');
  const [serverError, setServerError] = useState('');

  const token = getToken()

  function tokenCheck(jwt) {

    if (!jwt) {
      return
    }

    mainApi.checkToken(jwt)
      .then((res) => {
        setIsLoggedIn(true)
        setUserName(res.name)
      })
      .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    tokenCheck(token)
    // eslint-disable-next-line
  }, [])

  const savedNewsList = getNewsInLocalStorage()

  function articlesCheck(news) {
    if ((!news) || (news.length === 0) || (news === null)) {
      return;
    }

    setNewsList(news.slice(0, 3))
    setIsNewsVisible(true)

    if (news.length <= 3) {
      setIsShowMoreButtonVisible(false)
    } else {
      setIsShowMoreButtonVisible(true)
    }
  }

  useEffect(() => {
    articlesCheck(savedNewsList)
    // eslint-disable-next-line
  }, [])

  function getSavedArticles() {
    mainApi.getSavedArticles(token)
      .then((res) => {
        setSavedArticlesLength(res.length)
        storeSavedArticleInLocalStorage(res)
        // setSavedArticles(res.reverse().slice(0, 3))
        setSavedArticles(res.reverse())

        if (res.length > 3) {
          setIsSavedNewsButtonVisible(true)
        }
      }).catch((err) => {console.log(err)})
  }

  useEffect(() => {
    getSavedArticles()
    // eslint-disable-next-line
  }, [isLoggedIn]);



  function handleSearchFormChange(word) {
    setKeyword(word)
  }

  function handleUserRegister(data) {
    mainApi.registerUser(data)
      .then(() => {
        closeAllPopups()
        setIsSuccessRegisterPopupOpen(true)
      })
      .catch((err) => {
        console.log(err)
        setIsLoggedIn(false)
      })
  }

  function handleUserLogin(data) {
    // evt.preventDefault()

    mainApi.loginUser(data)
      .then((res) => {
        mainApi.checkToken(res.token)
          .then((response) => {
            // console.log(response)
            setToken(res.token)
            setUserName(response.name)
            setIsLoggedIn(true)
            closeAllPopups()

          }).catch((err) => {console.log(err)})
      }).catch((err) => {console.log(err)})
  }

  function handleLogout() {
    removeToken()
    removeNewsInLocalStorage()
    setIsLoggedIn(false)
    setIsBurgerOpen(false)
    setIsCross(false)
    setNewsList([])
    setIsNewsVisible(false)
  }

  function handleBurgerClick() {
    if (isCross) {
      setIsCross(false)
      setIsBurgerOpen(false)
    } else {
      setIsCross(true)
      setIsBurgerOpen(true)
    }
  }

  function handleTrashClick({ _id }) {
    mainApi.deleteArticle(_id, token)
      .then(() => {
        const newArticles = savedArticles.filter(item => item._id !== _id)
        setSavedArticles(newArticles)
      })
      .catch((err) => {console.log(err)})
  }

  function handleBookmarkClick(isMarked, setIsMarked, card) {
    if (isMarked) {
      mainApi.deleteArticle(card._id, token)
        .then(() => {
          const newArray = savedArticles.filter(item => item._id !== card._id)

          setSavedArticles(newArray)
          setIsMarked(false)
        }).catch((err) => {console.log(err)})
    } else {
      mainApi.saveArticle(token, card)
        .then((res) => {
          setIsMarked(true)
          card._id = res._id
          const newArticles = savedArticles.concat(res)
          storeSavedArticleInLocalStorage(newArticles.reverse())
          setSavedArticles(getSavedArticleInLocalStorage());
        })
        .catch((err) => {console.log(err)})
    }
  }

  const storageNews = getNewsInLocalStorage()

  useEffect(() => {
    if (storageNews === null || storageNews.length === newsList.length) {
      setIsShowMoreButtonVisible(false)
    }
    // eslint-disable-next-line
  }, [newsList.length])

  function handleShowMoreArticlesClick(isMainPage) {
    if (isMainPage) {
      setNewsList(storageNews.slice(0, newsList.length + 3))
    }
    // else {
    //   if (storageNews.length === 0) {
    //     setIsSavedNewsButtonVisible(false)
    //   }
    // }
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

  function handleNewsVisible(keyword) {
    setIsNotFoundNewsVisible(false)
    setIsNewsVisible(false)
    setIsLoading(true)
    saveNewsInLocalStorage([])

    newsApi.getNews(keyword)
      .then((res) => {
        if (res.articles.length === 0) {
          setIsNotFoundNewsVisible(true)
          return;
        } else {
          const newsArray = res.articles.map(item => {
            item.keyword = keyword
            return item
          })

          console.log(newsArray)
          saveNewsInLocalStorage(newsArray)
          setNewsList(getNewsInLocalStorage().slice(0, 3))
          setIsNewsVisible(true)

          // saveNewsInLocalStorage(res.articles)
          // setNewsList(getNewsInLocalStorage().slice(0, 3))
          // setIsNewsVisible(true)
        }

        if (res.articles.length <= 3) {
          setIsShowMoreButtonVisible(false)
        } else {
          setIsShowMoreButtonVisible(true)
        }
      })
      .finally(() => setIsLoading(false))
      .catch((err) => { console.log(err) })
  }

  function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups()
    }
  }

  function handleUnloggedBookmarkClick() {
    setIsRegisterPopupOpen(true)
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
    <CurrentUserContext.Provider value={userName}>
      <div className="app">
        <Switch>
          <Route path="/" exact >
            <MainHeader
              isMain={true}
              isLoggedIn={isLoggedIn}
              isCross={isCross}
              onOpenLoginPopup={ isLoggedIn ? handleLogout : handleLoginPopupOpen }
              onNewsVisible={handleNewsVisible}
              onBurgerClick={handleBurgerClick}
              onSearchFormChange={handleSearchFormChange}
            />
            <Main
              isLoggedIn={isLoggedIn}
              newsVisible={isNewsVisible}
              isLoading={isLoading}
              isNotFoundNewsVisible={isNotFoundNewsVisible}
              isShowMoreButtonVisible={isShowMoreButtonVisible}
              newsList={newsList}
              keyword={keyword}
              token={token}
              onShowMoreClick={handleShowMoreArticlesClick}
              onBookmarkClick={isLoggedIn ? handleBookmarkClick : handleUnloggedBookmarkClick}
              // handleBookmarkClick={handleBookmarkClick}
            />
          </Route>
          <Route path="/saved-news">
            <ProtectedRoute
              path="/saved-news"
              loggedIn={isLoggedIn}
              isMain={false}
              isLoggedIn={isLoggedIn}
              isCross={isCross}
              onOpenLoginPopup={ isLoggedIn ? handleLogout : handleLoginPopupOpen }
              onBurgerClick={handleBurgerClick}
              savedArticles={savedArticles}
              setRegisterOpen={setIsRegisterPopupOpen}
              savedArticlesLength={savedArticlesLength}
              isSavedNewsButtonVisible={isSavedNewsButtonVisible}
              component={SavedNewsHeader} />
            <Main
              token={token}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              onTrashClick={handleTrashClick}
              onShowMoreClick={handleShowMoreArticlesClick}
              isSavedNewsButtonVisible={isSavedNewsButtonVisible}
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
          onLogin={handleUserLogin}
          onClose={closeAllPopups}
          onOverlayClose={handleOverlayClose}
          isOpen={isLoginPopupOpen}
          onLinkClick={handleRegisterPopupOpen}
          name={'login'}
          title={'Вход'}
        />
        <RegisterPopup
          onRegister={handleUserRegister}
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
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
