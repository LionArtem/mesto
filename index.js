const openEdit = document.querySelector('.profile__edit-button');
const openAdd = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_type_profile');
const popupElements = document.querySelector('.popup_type_elements');

const closeProfile = document.querySelector('.popup__button-close_tepe_profile');
const closeElements = document.querySelector('.popup__button-close_tepe_elements');

const formElementProfile = document.querySelector('.popup__container_type_profile');
const formElementElements = document.querySelector('.popup__container_type_elements');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitl = document.querySelector('.profile__subtitl');

const infoName = formElementProfile.querySelector('.popup__info-text_type_name');
const infoJob = formElementProfile.querySelector('.popup__info-text_type_job');

const infoTitle = formElementElements.querySelector('.popup__info-text_type_title');
const infoFotoLink = formElementElements.querySelector('.popup__info-text_type_fotolink');

const elements = document.querySelector('.elements');// картачка с фото 
const elementsTemplate = document.querySelector('#elements').content;//находим Template




function formSubmitHandlerProfile (evt) {
  evt.preventDefault();
  const imputName = infoName.value;
  profileTitle.textContent = imputName;
  const imputJob = infoJob.value;
  profileSubtitl.textContent = imputJob;
  popupProfile.classList.remove('popup_opened');
}

function openClickEdit() {
  popupProfile.classList.add('popup_opened');
  infoName.value = profileTitle.textContent;
  infoJob.value = profileSubtitl.textContent;
}

function openClickAdd() {
  popupElements.classList.add('popup_opened');
  infoTitle.value = '';
  infoFotoLink.value = '';
}

function closeClickProfile() {
  popupProfile.classList.remove('popup_opened');
}

function closeClickElements() {
  popupElements.classList.remove('popup_opened');
}

openEdit.addEventListener('click', openClickEdit);
openAdd.addEventListener('click', openClickAdd);

closeProfile.addEventListener('click', closeClickProfile);
closeElements.addEventListener('click', closeClickElements);



formElementProfile.addEventListener('submit', formSubmitHandlerProfile);
formElementElements.addEventListener('submit', formSubmitHandlerElements);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

  initialCards.forEach(function (item) {
    const element = elementsTemplate.querySelector('.element').cloneNode(true);//клонируем содержимое Template
  
    element.querySelector('.element__name-foto').textContent  = item.name;
    element.querySelector('.element__foto').src = item.link;

    element.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });
    
    element.querySelector('.element__delete').addEventListener('click', function (evt) {
        const elementDelete = evt.target.closest('.element');
        elementDelete.remove();
    });

    

    elements.prepend(element);

    

    const elementFoto = document.querySelector('.element__foto');
    const fotoClose = document.querySelector('.popup-foto__button-close');
    const popupFoto = document.querySelector('.popup-foto');
    const popupFotoAdd = popupFoto.querySelector('.popup-foto__foto');
    const popupNameFotoAdd = popupFoto.querySelector('.popup-foto__name-foto');


    elementFoto.addEventListener('click', openElementFoto);
    fotoClose.addEventListener('click', fotoCloseButton);

    function openElementFoto() {
      popupFoto.classList.add('popup-foto_opened');
      popupFotoAdd.src = item.link;
      popupNameFotoAdd.textContent = item.name; 
    }

    function fotoCloseButton() {
      popupFoto.classList.remove('popup-foto_opened');
    }

    
});


function formSubmitHandlerElements (evt) {
  evt.preventDefault();
  const element = elementsTemplate.querySelector('.element').cloneNode(true);

  element.querySelector('.element__name-foto').textContent  = infoTitle.value;
  element.querySelector('.element__foto').src = infoFotoLink.value;

  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  element.querySelector('.element__delete').addEventListener('click', function (evt) {
    const elementDelete = evt.target.closest('.element');
    elementDelete.remove();
});

  elements.prepend(element);

    const elementFoto = document.querySelector('.element__foto');
    const fotoClose = document.querySelector('.popup-foto__button-close');
    const popupFoto = document.querySelector('.popup-foto');
    const popupFotoAdd = popupFoto.querySelector('.popup-foto__foto');
    const popupNameFotoAdd = popupFoto.querySelector('.popup-foto__name-foto');


    elementFoto.addEventListener('click', openelementFoto);
    fotoClose.addEventListener('click', fotoCloseButton);

    function openelementFoto() {
      popupFoto.classList.add('popup-foto_opened');
      popupFotoAdd.src = infoFotoLink.value;
      popupNameFotoAdd.textContent = infoTitle.value; 
    }

    function fotoCloseButton() {
      popupFoto.classList.remove('popup-foto_opened');
    }

  popupElements.classList.remove('popup_opened');
}