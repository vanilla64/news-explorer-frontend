class NewsApi {
  constructor(url, apiKey) {
    this._url = url
    this._apiKey = apiKey
    this._today = new Date().toISOString()
    this._sevenDaysBefore = new Date((Date.now() - 604800000)).toISOString();
  }
  _initialRequest = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getNews = (keyword) => {
    // return fetch(`${this._url}?q=${keyword}&from=${this._sevenDaysBefore}&to=${this._today}&pageSize=100`, {
    //   method: 'GET',
    //   headers: {
    //     'X-Api-Key': `${this._apiKey}`
    //   }
    // }).then((res) => this._initialRequest(res))

    return fetch(`${this._url}?q=${keyword}&from=${this._sevenDaysBefore}&to=${this._today}&pageSize=100&apiKey=${this._apiKey}`)
      .then((res) => this._initialRequest(res))
  }
}

// const newsApi = new NewsApi('https://newsapi.org/v2/everything', 'fb01dedb7800440887fb9cc9fed21c34')
const newsApi = new NewsApi('https://nomoreparties.co/news/v2/everything', 'fb01dedb7800440887fb9cc9fed21c34')

export default newsApi;
