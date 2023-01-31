import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopap, { submitForm }) {
    super(selectorPopap);
    this._submitForm = submitForm;
    this._form = this._popap.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__info-text');
    this._seveBtn = this._popap.querySelector('.popup__save-button');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener(
      'submit',
      (this._submit = (evt) => {
        evt.preventDefault();

        this._submitForm(this._getInputValues());
        this._seveBtn.textContent = 'Сохранение...';
      })
    );
  }

  close() {
    super.close();
    this._form.reset();
    setTimeout(() => {
      this._seveBtn.textContent = 'Сохранить';
    }, 1000);
  }
}
