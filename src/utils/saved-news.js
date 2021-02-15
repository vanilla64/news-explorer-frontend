const ARTICLE_KEY = 'savedArticles';

export const storeSavedArticleInLocalStorage = (articles) => {
  localStorage.setItem(ARTICLE_KEY, JSON.stringify(articles));
}

export const getSavedArticleInLocalStorage = () => JSON.parse(localStorage.getItem(ARTICLE_KEY));

export const removeSavedArticleInLocalStorage = () => {
  localStorage.removeItem(ARTICLE_KEY)
}
