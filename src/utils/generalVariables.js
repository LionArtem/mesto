import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithСonfirmation from '../components/PopupWithСonfirmation.js';
import Api from '../components/Api.js';

const buttonCloseProfile = document.querySelector('.button-close_tepe_profile');
const buttonClose = document.querySelector('.button-close');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddFoto = document.querySelector('.profile__add-button');
const formEditProfile = document.querySelector('.popup__form_type_profile');
const formEditFoto = document.querySelector('.popup__form_type_elements');
const formEditAvatar = document.querySelector('.popup__form_type_avatar');

const popupInfoName = formEditProfile.querySelector(
  '.popup__info-text_type_name'
);
const popupInfoJob = formEditProfile.querySelector(
  '.popup__info-text_type_job'
);

const avatar = document.querySelector('.profile__conteiner');

const openWithFoto = new PopupWithImage('.popup-foto');
openWithFoto.setEventListeners();

const popapDelete = new PopupWithСonfirmation('.popup_type_delete');

popapDelete.setEventListeners();

const api = new Api({
  baseUrl: 'nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '83664f83-845b-444d-96ac-5e42c57d9b46',
    'Content-Type': 'application/json',
  },
});

export {
  buttonCloseProfile,
  buttonClose,
  buttonEditProfile,
  buttonAddFoto,
  formEditProfile,
  popupInfoName,
  popupInfoJob,
  formEditFoto,
  openWithFoto,
  api,
  avatar,
  formEditAvatar,
  popapDelete,
};
