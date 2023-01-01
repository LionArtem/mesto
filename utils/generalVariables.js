const popupFoto = document.querySelector('.popup-foto');
const nameFotoPopup = popupFoto.querySelector('.popup-foto__name-foto');
const fotoPopup = popupFoto.querySelector('.popup-foto__foto');
const buttonCloseProfile = document.querySelector('.button-close_tepe_profile');
const buttonClose = document.querySelector('.button-close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitl = document.querySelector('.profile__subtitl');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddFoto = document.querySelector('.profile__add-button');
const formEditProfile = document.querySelector(
  '.popup__container_type_profile'
);
const popupInfoName = formEditProfile.querySelector(
  '.popup__info-text_type_name'
);
const popupInfoJob = formEditProfile.querySelector(
  '.popup__info-text_type_job'
);
export {
  fotoPopup,
  nameFotoPopup,
  popupFoto,
  buttonCloseProfile,
  buttonClose,
  profileTitle,
  profileSubtitl,
  buttonEditProfile,
  buttonAddFoto,
  formEditProfile,
  popupInfoName,
  popupInfoJob
};
