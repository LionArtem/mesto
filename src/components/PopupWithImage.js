import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopap) {
    super(selectorPopap);
    this._fotoPopup = this._popap.querySelector('.popup-foto__foto');
    this._nameFotoPopup = this._popap.querySelector('.popup-foto__name-foto');
  }

  open(link, name) {
    super.open();
    this._fotoPopup.src = link;
    this._nameFotoPopup.textContent = name;
    this._fotoPopup.alt = name;
  }
}
