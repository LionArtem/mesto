export default class Popup {
  constructor(selectorPopap) {
    this._selectorPopap = document.querySelector(selectorPopap);
  }

  open() {
    this._selectorPopap.classList.add('popup_opened');
    this._handleEscClose();
    this.setEventListeners();
  }

  close() {
    this._selectorPopap.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._keydown);
    this._selectorPopap
      .querySelector('.button-close')
      .removeEventListener('click', this._clickClose);
    this._selectorPopap.removeEventListener('click', this._clickOwer);
  }

  _handleEscClose() {
    document.addEventListener(
      'keydown',
      (this._keydown = (evt) => {
        if (evt.keyCode === 27) {
          this.close();
        }
      })
    );
  }

  setEventListeners() {
    this._selectorPopap.querySelector('.button-close').addEventListener(
      'click',
      (this._clickClose = () => {
        this.close();
      })
    );

    this._selectorPopap.addEventListener(
      'click',
      (this._clickOwer = (evt) => {
        if (evt.target === evt.currentTarget) {
          this.close();
        }
      })
    );
  }
}
