import Popup from './Popup.js';
import { fotoPopup, nameFotoPopup } from '../utils/generalVariables.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopap) {
    super(selectorPopap);
  }

  open(link, name) {
    super.open();
    fotoPopup.src = link;
    nameFotoPopup.textContent = name;
    fotoPopup.alt = name;
  }
}
