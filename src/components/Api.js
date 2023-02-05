export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`https://mesto.${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then(this._checkResponse);
  }

  addServerUserInfo({ name, about }) {
    return fetch(`https://${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`https://${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then(this._checkResponse);
  }

  addServerUserAvatar(url) {
    return fetch(`https://mesto.${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then(this._checkResponse);
  }

  addNewCard({ nameFoto, link }) {
    return fetch(`https://mesto.${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: nameFoto,
        link,
      }),
    }).then(this._checkResponse);
  }

  deleteImg(id) {
    return fetch(`https://mesto.${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this._checkResponse);
  }

  changeLikeCard(isLike, id) {
    isLike ? (this._method = 'PUT') : (this._method = 'DELETE');
    return fetch(`https://mesto.${this.baseUrl}/cards/${id}/likes`, {
      method: this._method,
      headers: this.headers,
      body: JSON.stringify({
        likes: {},
      }),
    }).then(this._checkResponse);
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
  };
}
