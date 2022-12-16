import { blockButton, FormValidator, formSelectors } from './validate.js'
import { Card } from './Card.js'

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddFoto = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_profile');
const popupAddFoto = document.querySelector('.popup_type_elements');

const buttonCloseProfile = document.querySelector('.button-close_tepe_profile');
const buttonCloseFoto = document.querySelector('.button-close_tepe_elements');

const formEditProfile = document.querySelector('.popup__container_type_profile');
const formAddFoto = document.querySelector('.popup__container_type_elements');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitl = document.querySelector('.profile__subtitl');

const popupInfoName = formEditProfile.querySelector('.popup__info-text_type_name');
const popupInfoJob = formEditProfile.querySelector('.popup__info-text_type_job');

const infoFotoTitle = formAddFoto.querySelector('.popup__info-text_type_title');
const infoFotoLink = formAddFoto.querySelector('.popup__info-text_type_fotolink');
 
const sectionFoto = document.querySelector('.elements');// картачка с фото 
const elementTemplate = document.querySelector('#elements').content;//находим Template

const popupFoto = document.querySelector('.popup-foto');
const fotoPopup = popupFoto.querySelector('.popup-foto__foto');
const nameFotoPopup = popupFoto.querySelector('.popup-foto__name-foto');

const buttonClosePopupFoto = document.querySelector('.button-close_tepe_foto');

const buttonElement = popupAddFoto.querySelector('.popup__save-button');

function submitHandlerProfileForm (evt) {
  evt.preventDefault();
  const valueNameProfile = popupInfoName.value;
  profileTitle.textContent = valueNameProfile;
  const valueJobProfile = popupInfoJob.value;
  profileSubtitl.textContent = valueJobProfile;
  closePopup(popupEditProfile);
}

function openEditProfile() {
  openPopup(popupEditProfile);
  formValidatorProfile.closeValidForm();
  popupInfoName.value = profileTitle.textContent;
  popupInfoJob.value = profileSubtitl.textContent;
};

function openAddFoto() {
  openPopup(popupAddFoto);
  formAddFoto.reset();
  formValidatorFoto.closeValidForm();
  blockButton(buttonElement, 'popup__save-button_disabled');
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  addListenerSrc();
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeListenerSrc();
}

const removeListenerSrc = () => {
  document.removeEventListener('keydown', closePopapEsc)
};

const addListenerSrc = () => {
  document.addEventListener('keydown', closePopapEsc)
};

const closePopapEsc = (evt) => {
  if(evt.keyCode === 27) {
    const popapOpened = document.querySelector('.popup_opened');
      closePopup(popapOpened);
}
}

const closePopapOwerlow = () => {
  const popapList = Array.from(document.querySelectorAll('.popup'));
  popapList.forEach((popapElement) => {
    popapElement.addEventListener('click', (evt)=> {
      if(evt.target === evt.currentTarget){
        closePopup(evt.target);
      }
    })
  });
}

function addCard (card) {//добавляет карточку в разметку
  sectionFoto.prepend(card);
};

function submitHandlerElementsForm (evt) { //добавление карточки через попап 
  evt.preventDefault();
  const card = new Card(infoFotoTitle.value, infoFotoLink.value, '.element');
  const cardSubmit = card.generateCard();
  addCard (cardSubmit);
  closePopup(popupAddFoto);
  };

  initialCards.forEach(function (item) { //массив с карточками 
    const card = new Card(item.name, item.link, '.element');
    const cardSubmit = card.generateCard();
    addCard (cardSubmit);
    });

buttonEditProfile.addEventListener('click', openEditProfile);
buttonAddFoto.addEventListener('click', openAddFoto);

buttonCloseProfile.addEventListener('click', ()=> closePopup(popupEditProfile));
buttonCloseFoto.addEventListener('click', ()=> closePopup(popupAddFoto));
buttonClosePopupFoto.addEventListener('click', ()=> closePopup(popupFoto));

formEditProfile.addEventListener('submit', submitHandlerProfileForm);//кнопка редактирования профиля
formAddFoto.addEventListener('submit', submitHandlerElementsForm);

closePopapOwerlow();
const formValidatorProfile = new FormValidator(formSelectors, '.popup__container_type_profile');
const formValidatorFoto = new FormValidator(formSelectors, '.popup__container_type_elements');
formValidatorProfile.enableValidation();
formValidatorFoto.enableValidation();

export { buttonElement, elementTemplate, fotoPopup, nameFotoPopup, openPopup, popupFoto }