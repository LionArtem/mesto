import { buttonElement } from './index.js'

const formSelectors = {
  formSelector: '.popup__container',
  inputSelector: '.popup__info-text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__info-text_type_error',
  errorClass: 'popup__error_visible',
};

class FormValidator {
  constructor(formSelectors, form) {
    this._formSelector = formSelectors.formSelector;
    this._inputSelector = formSelectors.inputSelector;
    this._submitButtonSelector = formSelectors.submitButtonSelector;
    this._inactiveButtonClass = formSelectors.inactiveButtonClass;
    this._inputErrorClass = formSelectors.inputErrorClass;
    this._errorClass = formSelectors.errorClass;
    this._form = document.querySelector(form);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState = () => {
    // состояние кнопки
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

    // Функция принимает массив полей
_hasInvalidInput = () => {
  return this._inputList.some((input) => {
    // Если поле не валидно, колбэк вернёт true
    return !input.validity.valid;
  });
};

// Функция, которая добавляет текст с ошибкой
_showInputError = (inputElement, errorMessage) => {
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`); // Находим элемент ошибки
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
};

closeValidForm = () => {
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  });
  this._buttonElement.classList.remove(this._inactiveButtonClass);
}

// Функция, которая удаляет текст с ошибкой
_hideInputError = (inputElement) => {
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
_isValid = (inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    this._hideInputError(inputElement);
  }
};
}

function blockButton(button, buttonSelectorDisabled) {
  button.classList.add(buttonSelectorDisabled);
  buttonElement.disabled = true;
}

export { blockButton, FormValidator, formSelectors }