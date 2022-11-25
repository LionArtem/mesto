const enableValidation = (element) => {
  const formList = Array.from(document.querySelectorAll(element.formSelector));//собираем формы
  formList.forEach((formElement) => {
    setEventListeners(formElement, element);
  });
};

const setEventListeners = (formElement, element) => {//собираем формы
  const inputList = Array.from(formElement.querySelectorAll(element.inputSelector));
  const buttonElement = formElement.querySelector(element.submitButtonSelector);
  inputList.forEach((inputElement) => {
    toggleButtonState(inputList, buttonElement, element);
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, element);
      toggleButtonState(inputList, buttonElement, element);
    });
  });
}; 

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, element) => { // состояние кнопки
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(element.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(element.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

// Функция, которая добавляет текст с ошибкой
const showInputError = (formElement, inputElement, errorMessage, element) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);// Находим элемент ошибки
  inputElement.classList.add(element.inputErrorClass);
  errorElement.textContent = errorMessage;
};

// Функция, которая удаляет текст с ошибкой
const hideInputError = (formElement, inputElement, element) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(element.inputErrorClass);
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, element) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage, element);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement, element);
  }
};

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__info-text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__info-text_type_error',
  errorClass: 'popup__error_visible'
});