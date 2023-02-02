export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  addServerUserInfo({ name, about }) {
    return fetch('https://nomoreparties.co/v1/cohort-58/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  editInfoProfil() {
    return fetch('https://nomoreparties.co/v1/cohort-58/users/me', {
      headers: this.headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  addServerUserAvatar(url) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  addNewCard({ nameFoto, link }) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: nameFoto,
        link,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  deleteImg(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  changeLikeCard(isLike, id) {
    // if(isLike){
    //   this._method = 'PUT';
    // }
    // this._method = 'DELETE'
    isLike ? (this._method = 'PUT') : (this._method = 'DELETE');
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
      method: this._method,
      headers: this.headers,
      body: JSON.stringify({
        likes: {
          name: 'artem',
          about: 'man',
        },
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  // toggleLike(id, method) {
  //   return fetch(`${this.baseUrl}/cards/${id}/likes`, {
  //     method: method,
  //     headers: this.headers,
  //     body: JSON.stringify({
  //       likes: {
  //         name: 'artem',
  //         about: 'man',
  //       },
  //     }),
  //   }).then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     return Promise.reject(`Ошибка: ${response.status}`);
  //   });
  // }
}
