import Popup from './Popup.js';

export default class PopupWithСonfirmation extends Popup {
  constructor(selectorPopap) {
    super(selectorPopap);
    this._form = this._popap.querySelector('.popup__form_type_deleteFoto');
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
    });
  }

  close() {
    super.close();
  }
}
