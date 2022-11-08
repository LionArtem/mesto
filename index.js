let openEdit = document.querySelector('.profile__edit-button');
let openAdd = document.querySelector('.profile__add-button');

let popupProfile = document.querySelector('.popup_type_profile');
let popupElements = document.querySelector('.popup_type_elements');

let closeProfile = document.querySelector('.popup__button-close_tepe_profile');
let closeElements = document.querySelector('.popup__button-close_tepe_elements');

let formElementProfile = document.querySelector('.popup__container_type_profile');
let formElementElements = document.querySelector('.popup__container_type_elements');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitl = document.querySelector('.profile__subtitl');

let infoName = formElementProfile.querySelector('.popup__info-text_type_name');
let infoJob = formElementProfile.querySelector('.popup__info-text_type_job');

let infoTitle = formElementElements.querySelector('.popup__info-text_type_title');
let infoFotoLink = formElementElements.querySelector('.popup__info-text_type_fotolink');





function formSubmitHandlerProfile (evt) {
  evt.preventDefault();
  let imputName = infoName.value;
  profileTitle.textContent = imputName;
  let imputJob = infoJob.value;
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
  infoTitle.value = 'Название';
  infoFotoLink.value = 'Ссылка на картинку';
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
    const elements = document.querySelector('.elements');
    const elementsTemplate = document.querySelector('#elements').content;//находим Template
    const element = elementsTemplate.querySelector('.element').cloneNode(true);//клонируем содержимое Template
  
    element.querySelector('.element__name-foto').textContent  = item.name;
    element.querySelector('.element__foto').src = item.link;

    element.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    element.querySelector('.element__delete').addEventListener('click', function (evt) {
        const elementDelete = evt.target.closest('.element');
        elementDelete.remove();
        console.log(evt.target.closest('.element'));
    });

    elements.prepend(element);

    let elementFoto = document.querySelector('.element__foto');
    let fotoClose = document.querySelector('.popup-foto__button-close');
    let popupFoto = document.querySelector('.popup-foto');
    let popupFotoAdd = popupFoto.querySelector('.popup-foto__foto');
    let popupNameFotoAdd = popupFoto.querySelector('.popup-foto__name-foto');


    elementFoto.addEventListener('click', openelementFoto);
    fotoClose.addEventListener('click', fotoCloseButton);

    function openelementFoto() {
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
  const elements = document.querySelector('.elements');
  const elementsTemplate = document.querySelector('#elements').content;
  const element = elementsTemplate.querySelector('.element').cloneNode(true);

  element.querySelector('.element__name-foto').textContent  = infoTitle.value;
  element.querySelector('.element__foto').src = infoFotoLink.value;

  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  element.querySelector('.element__delete').addEventListener('click', function (evt) {
    const elementDelete = evt.target.closest('.element');
    elementDelete.remove();
    console.log(evt.target.closest('.element'));
});

  elements.prepend(element);

    let elementFoto = document.querySelector('.element__foto');
    let fotoClose = document.querySelector('.popup-foto__button-close');
    let popupFoto = document.querySelector('.popup-foto');
    let popupFotoAdd = popupFoto.querySelector('.popup-foto__foto');
    let popupNameFotoAdd = popupFoto.querySelector('.popup-foto__name-foto');


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