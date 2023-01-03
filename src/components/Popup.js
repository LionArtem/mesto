export default class Popup {
  constructor(selectorPopap) {
    this._popap = document.querySelector(selectorPopap);
  }

  open() {
    this._popap.classList.add('popup_opened');
    this._handleEscClose();
  }

  close() {
    this._popap.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._keydown);
  }

  _handleEscClose() {
    document.addEventListener(
      'keydown',
      (this._keydown = (evt) => {
        if (evt.key === 'Escape') {
          this.close();
        }
      })
    );
  }

  setEventListeners() {
    this._popap.querySelector('.button-close').addEventListener(
      'click',
      (this._clickClose = () => {
        this.close();
      })
    );

    this._popap.addEventListener(
      'click',
      (this._clickOwer = (evt) => {
        if (evt.target === evt.currentTarget) {
          this.close();
        }
      })
    );
  }
}
