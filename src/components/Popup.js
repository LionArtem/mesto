export default class Popup {
  constructor(selectorPopap) {
    this._popap = document.querySelector(selectorPopap); // извините но мне сказали - это изюменка))
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popap.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popap.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popap.querySelector('.button-close').addEventListener('click', () => {
      this.close();
    });

    this._popap.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}
