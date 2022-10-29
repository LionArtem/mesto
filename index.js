let open = document.querySelector('.profile__Edit-button');
let popup = document.querySelector('.popup');
let close = document.querySelector('.popup__button-close');
let formElement = document.querySelector('.popup__container');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitl = document.querySelector('.profile__subtitl');
let infoName = formElement.querySelector('.popup__info-name');
let infoJob = formElement.querySelector('.popup__info-job');

function formSubmitHandler (evt) {
  evt.preventDefault();
  imputName = infoName.value;
  profileTitle.textContent = imputName;
  imputJob = infoJob.value;
  profileSubtitl.textContent = imputJob;
  popup.classList.remove('popup_opened');
}

function openClick() {
  popup.classList.add('popup_opened');
  
}

function closeClick() {
  popup.classList.remove('popup_opened');
  profileTitle = infoName.value;
  infoName.value = 'Жак-Ив Кусто';
  profileSubtitl = infoJob.value;
  infoJob.value = 'Исследователь океана';
}

open.addEventListener('click', openClick);
close.addEventListener('click', closeClick);
formElement.addEventListener('submit', formSubmitHandler);