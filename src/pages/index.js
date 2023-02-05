let userId;

import './index.css';
import Section from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import Card from '../components/Card.js';
import { formSelectors } from '../utils/constants.js';
import {
  buttonEditProfile,
  buttonAddFoto,
  popupInfoName,
  popupInfoJob,
  formEditProfile,
  formEditFoto,
  openWithFoto,
  api,
  avatar,
  formEditAvatar,
  popapDelete,
} from '../utils/generalVariables.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo({
  name: '.profile__title',
  job: '.profile__subtitl',
  avatar: '.profile__avatar',
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  // тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
  .then(([userData, cards]) => {
    // тут установка данных пользователя
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userId = userData;
    // и тут отрисовка карточек
    defaultCardList.renderCard(cards);
  })
  .catch((err) => {
    // тут ловим ошибку
    console.log(err);
    alert(`Ошибка: ${err}`);
  });

const popupOpenAvatar = new PopupWithForm('.popup_type_avatar', {
  submitForm: ({ linkAvatar }) => {
    api
      .addServerUserAvatar(linkAvatar)
      .then((res) => {
        userInfo.setUserAvatar(res);
      })
      .finally(() => {
        popupOpenAvatar.close();
      })
      .catch((err) => {
        console.log(err);
        alert(`Ошибка: ${err}`);
      });
  },
});

const popupOpenProfile = new PopupWithForm('.popup_type_profile', {
  submitForm: ({ name, job }) => {
    api
      .addServerUserInfo({
        name: name,
        about: job,
      })
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .finally(() => {
        popupOpenProfile.close();
      })
      .catch((err) => {
        console.log(err);
        alert(`Ошибка: ${err}`);
      });
  },
});

const addFotoPopup = new PopupWithForm('.popup_type_elements', {
  submitForm: ({ nameFoto, link }) => {
    api
      .addNewCard({ nameFoto, link })
      .then((result) => {
        defaultCardList.prependItem(createCard(result, '#elements'));
      })
      .finally(() => {
        addFotoPopup.close();
      })
      .catch((err) => {
        console.log(err);
        alert(`Ошибка: ${err}`);
      });
  },
});

const defaultCardList = new Section(
  {
    renderer: (item) => {
      defaultCardList.addItem(createCard(item, '#elements'));
    },
  },
  '.elements'
);

function createCard(item, templateSelector) {
  //отдает готовую карточку
  const card = new Card(item, templateSelector, userId._id, {
    handleCardClick: (link, name) => {
      openWithFoto.open(link, name);
    },
    handleDEliteClick: (itemId) => {
      popapDelete.open();
      popapDelete.setSubmitHandler(itemId, (itemId) => {
        api
          .deleteImg(itemId)
          .then(() => {
            card.deleteFoto();
            popapDelete.close();
          })
          .catch((err) => {
            console.log(err);
            alert(`Ошибка: ${err}`);
          });
      });
    },
    handleLikeClick: (isLike, id) => {
      api
        .changeLikeCard(isLike, id)
        .then((data) => {
          card.toggleLike(data);
        })
        .catch((err) => {
          console.log(err);
          alert(`Ошибка: ${err}`);
        });
    },
  });
  const cardSubmit = card.generateCard();

  return cardSubmit;
}

popupOpenAvatar.setEventListeners();
popupOpenProfile.setEventListeners();
addFotoPopup.setEventListeners();

avatar.addEventListener('click', () => {
  popupOpenAvatar.open();
  formValidatorAvatar.resetValidation();
});

buttonAddFoto.addEventListener('click', () => {
  addFotoPopup.open();
  formValidatorFoto.resetValidation();
});

buttonEditProfile.addEventListener('click', () => {
  popupOpenProfile.open();
  const inputInfo = userInfo.getUserInfo();
  popupInfoName.value = inputInfo.name;
  popupInfoJob.value = inputInfo.job;
  formValidatorProfile.resetValidation();
});

const formValidatorAvatar = new FormValidator(formSelectors, formEditAvatar);
const formValidatorProfile = new FormValidator(formSelectors, formEditProfile);
const formValidatorFoto = new FormValidator(formSelectors, formEditFoto);
formValidatorAvatar.enableValidation();
formValidatorProfile.enableValidation();
formValidatorFoto.enableValidation();
