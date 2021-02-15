const ARTICLE_KEY = 'articles';

export const saveNewsInLocalStorage = (articles) => {
  localStorage.setItem(ARTICLE_KEY, JSON.stringify(articles));
}

export const getNewsInLocalStorage = () => JSON.parse(localStorage.getItem(ARTICLE_KEY));

export const removeNewsInLocalStorage = () => {
  localStorage.removeItem(ARTICLE_KEY)
}
