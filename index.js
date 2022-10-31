let open = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let close = document.querySelector('.popup__button-close');
let formElement = document.querySelector('.popup__container');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitl = document.querySelector('.profile__subtitl');
let infoName = formElement.querySelector('.popup__info-text_type_name');
let infoJob = formElement.querySelector('.popup__info-text_type_job');

function formSubmitHandler (evt) {
  evt.preventDefault();
  let imputName = infoName.value;
  profileTitle.textContent = imputName;
  let imputJob = infoJob.value;
  profileSubtitl.textContent = imputJob;
  popup.classList.remove('popup_opened');
}

function openClick() {
  popup.classList.add('popup_opened');
  
}

function closeClick() {
  popup.classList.remove('popup_opened');
}

open.addEventListener('click', openClick);
close.addEventListener('click', closeClick);
formElement.addEventListener('submit', formSubmitHandler);