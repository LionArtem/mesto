import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopap, { submitForm }) {
    super(selectorPopap);
    this._submitForm = submitForm;
    this._form = this._selectorPopap.querySelector('.popup__container');
  }

  _getInputValues() {
    const inputList = Array.from(
      this._selectorPopap.querySelectorAll('.popup__info-text')
    );
    return inputList;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener(
      'submit',
      (this._submit = (evt) => {
        evt.preventDefault();

        this._submitForm(this._getInputValues());
        this.close();
      })
    );
  }

  close() {
    super.close();
    this._form.reset();
    this._form.removeEventListener('submit', this._submit);
  }
}
