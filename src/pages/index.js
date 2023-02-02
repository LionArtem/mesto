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

api
  .editInfoProfil()
  .then((result) => {
    userInfo.setUserInfo(result.name, result.about);
    userInfo.setUserAvatar(result.avatar);
  })
  .catch((err) => {
    console.log(err);
  });

const popupOpenAvatar = new PopupWithForm('.popup_type_avatar', {
  submitForm: ({ linkAvatar }) => {
    api
      .addServerUserAvatar(linkAvatar)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        popupOpenAvatar.close();
      })
      .catch((err) => {
        console.log(err);
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
        userInfo.setUserInfo(res.name, res.about);
        popupOpenProfile.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

const openAddFoto = new PopupWithForm('.popup_type_elements', {
  submitForm: ({ nameFoto, link }) => {
    api
      .addNewCard({ nameFoto, link })
      .then((result) => {
        const container = document.querySelector('.elements');
        container.prepend(createCard(result, '#elements'));
        openAddFoto.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

api
  .getInitialCards()
  .then((result) => {
    addAllCArd(result);
  })
  .catch((err) => {
    console.log(err);
  });

function createCard(item, templateSelector) {
  //отдает готовую карточку
  const card = new Card(item, templateSelector, {
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
          });
      });
    },
    handleLikeClick: (isLike, id) => {
      
      api
        .changeLikeCard(isLike, id)
        .then((data) => {
          //console.log(data);
          card.toggleLike(data)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  const cardSubmit = card.generateCard();

  if (!(item.owner._id === '0fd71b3fe64db14c2991b773')) {
    cardSubmit.querySelector('.element__delete').remove();
  }

  return cardSubmit;
}

const addAllCArd = (item) => {
  const defaultCardList = new Section(
    {
      items: item,
      renderer: (item) => {
        defaultCardList.addItem(createCard(item, '#elements'));
      },
    },
    '.elements'
  );

  defaultCardList.renderCard();
};

popupOpenAvatar.setEventListeners();
popupOpenProfile.setEventListeners();
openAddFoto.setEventListeners();

avatar.addEventListener('click', () => {
  popupOpenAvatar.open();
  formValidatorAvatar.closeValidForm();
});

buttonAddFoto.addEventListener('click', () => {
  openAddFoto.open();
  formValidatorFoto.closeValidForm();
});

buttonEditProfile.addEventListener('click', () => {
  popupOpenProfile.open();
  const inputInfo = userInfo.getUserInfo();
  popupInfoName.value = inputInfo.name;
  popupInfoJob.value = inputInfo.job;
  formValidatorProfile.closeValidForm();
});

const formValidatorAvatar = new FormValidator(formSelectors, formEditAvatar);
const formValidatorProfile = new FormValidator(formSelectors, formEditProfile);
const formValidatorFoto = new FormValidator(formSelectors, formEditFoto);
formValidatorAvatar.enableValidation();
formValidatorProfile.enableValidation();
formValidatorFoto.enableValidation();
