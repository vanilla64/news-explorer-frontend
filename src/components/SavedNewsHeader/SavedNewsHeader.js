import React, { useContext } from 'react';
import Header from '../Header/Header';
import blackLogo from '../../images/logo-black.svg';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import wordPluralize from "../../utils/wordPluralize";
import { words, wordEndings } from "../../utils/constants";

function SavedNewsHeader(props) {
  const userName = useContext(CurrentUserContext);
  const articles = props.savedArticles

  const sortKeywords = articles.map(item => {
    const word = item.keyword;
    const keyword = word.charAt(0).toUpperCase() + word.substr(1);

    return keyword;
  })

  const keywords = Array.from(new Set(sortKeywords))

  return (
    <Header
      isMain={props.isMain}
      isLoggedIn={props.isLoggedIn}
      isCross={props.isCross}
      logo={blackLogo}
      onOpenLoginPopup={props.onOpenLoginPopup}
      onBurgerClick={props.onBurgerClick}>
      <>
        <p className="header__text_black">Сохранённые статьи</p>
        <h2 className="header__title_black">
          { articles.length === ''
            ? `${userName}, у вас нет сохраненных статей`
            : `${userName}, у вас ${articles.length} ${wordPluralize(props.savedArticlesLength, words)}`
          }
        </h2>
        <div className="header__keywords-container">

            { props.savedArticlesLength === ''
              ? null
              : <p className="header__paragraph">
                По ключевым словам: <span className="header__paragraph header__paragraph_type_bold">
                {
                  keywords.length === 1 && keywords[0]
                }
                {
                  keywords.length === 2 && `${keywords[0]} и ${keywords[1]}`
                }
                {
                  keywords.length === 3 && `${keywords[0]}, ${keywords[1]} и еще одному`
                }
                {
                  keywords.length > 3 &&
                  `${keywords[0]}, ${keywords[1]}, ${keywords.length - 2}${wordPluralize(keywords.length - 2, wordEndings)}`
                }

              </span></p>
              // keywords.length === 1 && `По ключевому слову: ${keywords[0]}`
              // `По ключевым словам: и ${wordPluralize(keywords.length, wordEndings)}`
            }
            {/*<span className="header__paragraph header__paragraph_type_bold">{ keywords[0] }</span>{', '}*/}
            {/*<span className="header__paragraph header__paragraph_type_bold">{ keywords[1] }</span> {'и '}*/}
            {/*<span className="header__paragraph header__paragraph_type_bold">2-м другим</span>*/}
          {/*</p>*/}
        </div>
      </>
    </Header>
  );
}

export default SavedNewsHeader;
