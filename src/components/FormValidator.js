class FormValidator {
  constructor(formSelectors, form) {
    this._formSelector = formSelectors.formSelector;
    this._inputSelector = formSelectors.inputSelector;
    this._submitButtonSelector = formSelectors.submitButtonSelector;
    this._inactiveButtonClass = formSelectors.inactiveButtonClass;
    this._inputErrorClass = formSelectors.inputErrorClass;
    this._errorClass = formSelectors.errorClass;
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
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
      this._disableButton();
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  resetValidation = () => {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._disableButton();
  };

  _disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

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

export { FormValidator };
