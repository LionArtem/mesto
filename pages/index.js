import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { initialCards, formSelectors } from '../utils/constants.js';
import {
  buttonEditProfile,
  buttonAddFoto,
  profileTitle,
  profileSubtitl,
  popupInfoName,
  popupInfoJob,
} from '../utils/generalVariables.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

const openWithFoto = new PopupWithImage('.popup-foto');

const defaultCardList = new Section(
  {
    items: initialCards, // массив с данными
    renderer: (item) => {
      const card = new Card(item, '#elements', {
        handleCardClick: (link, name) => {
          openWithFoto.open(link, name);
        },
      });
      const cardSubmit = card.generateCard();
      defaultCardList.addItem(cardSubmit);
    },
  },
  '.elements'
);

defaultCardList.renderCard();

function createInstanceCard(name, link, templateSelector) {
  const card = new Card({ name, link }, templateSelector, {
    handleCardClick: (link, name) => {
      openWithFoto.open(link, name);
    },
  });
  const cardSubmit = card.generateCard();
  return cardSubmit;
}

const openPopupProfile = new PopupWithForm('.popup_type_profile', {
  submitForm: (valuelist) => {
    const InputValues = new UserInfo({
      name: profileTitle.textContent,
      job: profileSubtitl.textContent,
    });

    InputValues.setUserInfo(valuelist[0].value, valuelist[1].value);
  },
});

const openAddFoto = new PopupWithForm('.popup_type_elements', {
  submitForm: (valuelist) => {
    defaultCardList.addItem(
      createInstanceCard(valuelist[0].value, valuelist[1].value, '#elements')
    );
  },
});

buttonAddFoto.addEventListener('click', () => {
  openAddFoto.open();
});

buttonEditProfile.addEventListener('click', () => {
  openPopupProfile.open();

  const InputValues = new UserInfo({
    name: profileTitle.textContent,
    job: profileSubtitl.textContent,
  });
  popupInfoName.value = InputValues.getUserInfo().name;
  popupInfoJob.value = InputValues.getUserInfo().job;
});

const openPopupFoto = new Popup('.popup_type_elements');

const formValidatorProfile = new FormValidator(
  formSelectors,
  '.popup__container_type_profile'
);
const formValidatorFoto = new FormValidator(
  formSelectors,
  '.popup__container_type_elements'
);
formValidatorProfile.enableValidation();
formValidatorFoto.enableValidation();