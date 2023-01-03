import './index.css';
import Section from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { initialCards, formSelectors } from '../utils/constants.js';
import {
  buttonEditProfile,
  buttonAddFoto,
  popupInfoName,
  popupInfoJob,
  formEditProfile,
  formEditFoto,
} from '../utils/generalVariables.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

const openWithFoto = new PopupWithImage('.popup-foto');
openWithFoto.setEventListeners();

const defaultCardList = new Section(
  {
    items: initialCards, // массив с данными
    renderer: (item) => {
      defaultCardList.addItem(createCard(item, '#elements'));
    },
  },
  '.elements'
);

defaultCardList.renderCard();

function createInstanceCard(name, link, templateSelector) {
  return createCard({ name, link }, templateSelector);
}

function createCard(item, templateSelector) {
  const card = new Card(item, templateSelector, {
    handleCardClick: (link, name) => {
      openWithFoto.open(link, name);
    },
  });
  const cardSubmit = card.generateCard();
  return cardSubmit;
}

const inputValues = new UserInfo({
  name: '.profile__title',
  job: '.profile__subtitl',
});

const popupOpenProfile = new PopupWithForm('.popup_type_profile', {
  submitForm: ({ name, job }) => {
    inputValues.setUserInfo(name, job);
  },
});

popupOpenProfile.setEventListeners();

const openAddFoto = new PopupWithForm('.popup_type_elements', {
  submitForm: ({ nameFoto, link }) => {
    defaultCardList.addItem(createInstanceCard(nameFoto, link, '#elements'));
  },
});

openAddFoto.setEventListeners();

buttonAddFoto.addEventListener('click', () => {
  openAddFoto.open();
  formValidatorFoto.closeValidForm();
});

buttonEditProfile.addEventListener('click', () => {
  popupOpenProfile.open();
  const inputInfo = inputValues.getUserInfo();
  popupInfoName.value = inputInfo.name;
  popupInfoJob.value = inputInfo.job;
  formValidatorProfile.closeValidForm();
});

const formValidatorProfile = new FormValidator(formSelectors, formEditProfile);
const formValidatorFoto = new FormValidator(formSelectors, formEditFoto);
formValidatorProfile.enableValidation();
formValidatorFoto.enableValidation();
