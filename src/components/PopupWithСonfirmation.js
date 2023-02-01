import Popup from './Popup.js';

export default class PopupWithСonfirmation extends Popup {
  constructor(selectorPopap) {
    super(selectorPopap);
    this._form = this._popap.querySelector('.popup__form');
    this._seveBtn = this._popap.querySelector('.popup__save-button');
  }

  setSubmitHandler(handler) {
    this._handleSubmitHandler = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitHandler();
      this._seveBtn.textContent = 'Сохранение...';
    });
  }

  close() {
    super.close();
    setTimeout(() => {
      this._seveBtn.textContent = 'Сохранить';
    }, 1000);
  }
}
