class MainApi {
  constructor(url) {
    this._url = url
  }

  _initialRequest = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  registerUser = (data) => {
    const { email, password, name } = data;

    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password,
        email,
        name
      })
    }).then((res) => this._initialRequest(res))
  }

  loginUser = (data) => {
    const { email, password } = data;

    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password,
        email
      })
    }).then((res) => this._initialRequest(res))
  }

  checkToken = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    }).then((res) => this._initialRequest(res))
  }

  saveArticle = (token, data) => {
    const { keyword, title, description, publishedAt, source, url, urlToImage } = data;

    return fetch(`${this._url}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
          keyword,
          title,
          text: description,
          date: publishedAt,
          source: source.name,
          link: url,
          image: urlToImage,
        })
    }).then((res) => this._initialRequest(res))
  }

  deleteArticle = (id, token) => {
    return fetch(`${this._url}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    }).then((res) => this._initialRequest(res))
  }

  getSavedArticles = (token) => {
    return fetch(`${this._url}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    }).then((res) => this._initialRequest(res))
  }
}

const mainApi = new MainApi('https://api.newsexplorer.site')
// const mainApi = new MainApi('http://localhost:4000')

export default mainApi;
