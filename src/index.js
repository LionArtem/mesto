const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddFoto = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_profile');
const popupAddFoto = document.querySelector('.popup_type_elements');

const buttonCloseProfile = document.querySelector('.popup__button-close_tepe_profile');
const buttonCloseFoto = document.querySelector('.popup__button-close_tepe_elements');

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

function submitHandlerProfileForm (evt) {
  evt.preventDefault();
  const valueNameProfile = popupInfoName.value;
  profileTitle.textContent = valueNameProfile;
  const valueJobProfile = popupInfoJob.value;
  profileSubtitl.textContent = valueJobProfile;
  popupEditProfile.classList.remove('popup_opened');
}

function openEditProfile() {
  popupEditProfile.classList.add('popup_opened');
  popupInfoName.value = '';
  popupInfoJob.value = '';
}

function openAddFoto() {
  popupAddFoto.classList.add('popup_opened');
  infoFotoTitle.value = '';
  infoFotoLink.value = '';
}

function openElementFoto() {
  popupFoto.classList.add('popup-foto_opened');
  fotoPopup.src = infoFotoLink.value;
  nameFotoPopup.textContent = infoFotoTitle.value; 
}

function closeEditProfile() {
  popupEditProfile.classList.remove('popup_opened');
}

function closeAddFoto() {
  popupAddFoto.classList.remove('popup_opened');
}

function closePopupFoto() {
  popupFoto.classList.remove('popup-foto_opened');
}

buttonEditProfile.addEventListener('click', openEditProfile);
buttonAddFoto.addEventListener('click', openAddFoto);

buttonCloseProfile.addEventListener('click', closeEditProfile);
buttonCloseFoto.addEventListener('click', closeAddFoto);

formEditProfile.addEventListener('submit', submitHandlerProfileForm);//кнопка редактирования профиля
formAddFoto.addEventListener('submit', submitHandlerElementsForm);

function createCard() { //изначально отрисованные карточки через массив
  initialCards.forEach(function (item) {
    const copyElementTemplate = elementTemplate.querySelector('.element').cloneNode(true);//клонируем содержимое Template
  
    copyElementTemplate.querySelector('.element__name-foto').textContent  = item.name;
    copyElementTemplate.querySelector('.element__foto').src = item.link;
    copyElementTemplate.querySelector('.element__foto').alt = item.name;

    copyElementTemplate.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });
    
    copyElementTemplate.querySelector('.element__delete').addEventListener('click', function (evt) {
        const elementFotoDelete = evt.target.closest('.element');
        elementFotoDelete.remove();
    });

    sectionFoto.prepend(copyElementTemplate);

    const elementFoto = document.querySelector('.element__foto');
    const buttonClosePopupFoto = document.querySelector('.popup-foto__button-close');
    const popupFoto = document.querySelector('.popup-foto');
    const fotoPopup = popupFoto.querySelector('.popup-foto__foto');
    const nameFotoPopup = popupFoto.querySelector('.popup-foto__name-foto');

    elementFoto.addEventListener('click', openElementFoto);
    buttonClosePopupFoto.addEventListener('click', closePopupfoto);

    function openElementFoto() {
      popupFoto.classList.add('popup-foto_opened');
      fotoPopup.src = item.link;
      nameFotoPopup.textContent = item.name; 
    }

    function closePopupfoto() {
      popupFoto.classList.remove('popup-foto_opened');
    }
});
}

function submitHandlerElementsForm (evt) { //добавление карточки через попап 
  evt.preventDefault();
  const copyElementTemplate = elementTemplate.querySelector('.element').cloneNode(true);

  copyElementTemplate.querySelector('.element__name-foto').textContent  = infoFotoTitle.value;
  copyElementTemplate.querySelector('.element__foto').src = infoFotoLink.value;
  copyElementTemplate.querySelector('.element__foto').alt = infoFotoTitle.value;

  copyElementTemplate.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  copyElementTemplate.querySelector('.element__delete').addEventListener('click', function (evt) {
    const elementFotoDelete = evt.target.closest('.element');
    elementFotoDelete.remove();
});

sectionFoto.prepend(copyElementTemplate);

    const elementFoto = document.querySelector('.element__foto');
    const buttonClosePopupFoto = document.querySelector('.popup-foto__button-close');

    elementFoto.addEventListener('click', openElementFoto);
    buttonClosePopupFoto.addEventListener('click', closePopupFoto);

    popupAddFoto.classList.remove('popup_opened');
}

createCard();