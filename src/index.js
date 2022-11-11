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

const buttonClosePopupFoto = document.querySelector('.popup-foto__button-close');

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
buttonClosePopupFoto.addEventListener('click', closePopupFoto);

formEditProfile.addEventListener('submit', submitHandlerProfileForm);//кнопка редактирования профиля
formAddFoto.addEventListener('submit', submitHandlerElementsForm);

function getCard (name, link) {//возвращает готовую карточку 
    const copyElementTemplate = elementTemplate.querySelector('.element').cloneNode(true);
    copyElementTemplate.querySelector('.element__name-foto').textContent  = name;
    copyElementTemplate.querySelector('.element__foto').src = link;
    copyElementTemplate.querySelector('.element__foto').alt = name;
    copyElementTemplate.querySelector('.element__like').addEventListener('click', addLike);
    copyElementTemplate.querySelector('.element__delete').addEventListener('click', deleteFoto);
    copyElementTemplate.querySelector('.element__foto').addEventListener('click', openElementFoto);
    return copyElementTemplate;
};

function addcard (card) {//добавляет карточку в разметку
  sectionFoto.prepend(card);
};

function submitHandlerElementsForm (evt) { //добавление карточки через попап 
  evt.preventDefault();
  let cardSubmit = getCard(infoFotoTitle.value, infoFotoLink.value);
  addcard (cardSubmit);
  };

  initialCards.forEach(function (item) { //массив с карточками 
    let cardSubmit = getCard(item.name, item.link);
    addcard (cardSubmit);
    });

    function addLike (evt) { 
      evt.target.classList.toggle('element__like_active');
  };

  function deleteFoto (evt) { 
    const elementFotoDelete = evt.target.closest('.element');
    elementFotoDelete.remove();
  };

  /*
    const elementFoto = document.querySelector('.element__foto');
    const buttonClosePopupFoto = document.querySelector('.popup-foto__button-close');
    const popupFoto = document.querySelector('.popup-foto');
    const fotoPopup = popupFoto.querySelector('.popup-foto__foto');
    const nameFotoPopup = popupFoto.querySelector('.popup-foto__name-foto');

    elementFoto.addEventListener('click', openElementFoto);
    
    function openElementFoto() {
      fotoPopup.src = item.link;
      nameFotoPopup.textContent = item.name; 
    }
});*/