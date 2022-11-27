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

const fotoElement = document.querySelector('.element__foto');
const fotoNameElement = document.querySelector('.lement__name-foto');

const popup = document.querySelector('.popup');

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
  closeValidForm(popupEditProfile);
  popupInfoName.value = profileTitle.textContent;
  popupInfoJob.value = profileSubtitl.textContent;
};

function openAddFoto() {
  openPopup(popupAddFoto);
  formAddFoto.reset();
  closeValidForm(popupAddFoto);
  blockButton(buttonElement, 'popup__save-button_disabled');
};

function openElementFoto(name, link) {
  fotoPopup.src = link;
  nameFotoPopup.textContent = name;
  fotoPopup.alt = name;
  openPopup(popupFoto);
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

function getCard (name, link) {//возвращает готовую карточку 
  const copyElementTemplate = elementTemplate.querySelector('.element').cloneNode(true);
  const copyElementFotoTemplate = copyElementTemplate.querySelector('.element__foto');
  copyElementTemplate.querySelector('.element__name-foto').textContent  = name;
  copyElementFotoTemplate.src = link;
  copyElementFotoTemplate.alt = name;
  copyElementTemplate.querySelector('.element__like').addEventListener('click', addLike);
  copyElementTemplate.querySelector('.element__delete').addEventListener('click', deleteFoto);
  copyElementFotoTemplate.addEventListener('click', () => openElementFoto(name, link));
  return copyElementTemplate;
};

function addCard (card) {//добавляет карточку в разметку
  sectionFoto.prepend(card);
};

function submitHandlerElementsForm (evt) { //добавление карточки через попап 
  evt.preventDefault();
  const cardSubmit = getCard(infoFotoTitle.value, infoFotoLink.value);
  addCard (cardSubmit);
  closePopup(popupAddFoto);
  };

  initialCards.forEach(function (item) { //массив с карточками 
    const cardSubmit = getCard(item.name, item.link);
    addCard (cardSubmit);
    });

    function addLike (evt) { 
      evt.target.classList.toggle('element__like_active');
  };

  function deleteFoto (evt) { 
    const elementFotoDelete = evt.target.closest('.element');
    elementFotoDelete.remove();
  };

buttonEditProfile.addEventListener('click', openEditProfile);
buttonAddFoto.addEventListener('click', openAddFoto);

buttonCloseProfile.addEventListener('click', ()=> closePopup(popupEditProfile));
buttonCloseFoto.addEventListener('click', ()=> closePopup(popupAddFoto));
buttonClosePopupFoto.addEventListener('click', ()=> closePopup(popupFoto));

formEditProfile.addEventListener('submit', submitHandlerProfileForm);//кнопка редактирования профиля
formAddFoto.addEventListener('submit', submitHandlerElementsForm);

closePopapOwerlow();