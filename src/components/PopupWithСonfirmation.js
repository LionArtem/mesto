import Popup from './Popup.js';

export default class PopupWithСonfirmation extends Popup {
  constructor(selectorPopap) {
    super(selectorPopap);
    this._form = this._popap.querySelector('.popup__form_type_deleteFoto');
    this._submitButton = this._popap.querySelector('.popup__save-button');
  }

  setSubmitHandler(itemId, handler) {
    this._handleSubmitHandler = handler;
    this._itemId = itemId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitHandler(this._itemId);
      this._submitButton.textContent = 'Удаление...';
    });
  }

  close() {
    super.close();
    setTimeout(() => {
      this._submitButton.textContent = 'Да';
    }, 1000);
  }
}
