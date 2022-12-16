import { addListenerSrc } from './index.js'

const popupFoto = document.querySelector('.popup-foto');
const nameFotoPopup = popupFoto.querySelector('.popup-foto__name-foto');
const fotoPopup = popupFoto.querySelector('.popup-foto__foto');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    addListenerSrc();
  }

  export { fotoPopup, nameFotoPopup, openPopup, popupFoto }