class Card {
  constructor(item, templateSelector, { handleCardClick }) {
    this._name = item.name;
    this._link = item.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const elementTemplate = document.querySelector(
      this._templateSelector
    ).content; //находим Template
    const copyElementTemplate = elementTemplate
      .querySelector('.element')
      .cloneNode(true);
    return copyElementTemplate;
    // здесь выполним все необходимые операции, чтобы вернуть разметку
  }
  generateCard() {
    this._element = this._getTemplate();

    this._copyElementFotoTemplate =
      this._element.querySelector('.element__foto');
    this._element.querySelector('.element__name-foto').textContent = this._name;
    this._copyElementFotoTemplate.src = this._link;
    this._copyElementFotoTemplate.alt = this._name;
    this._buttonLike = this._element.querySelector('.element__like');
    this._setEventListeners();
    

    return this._element;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', (evt) => {
      this._addLike(evt);
    });

    this._element
      .querySelector('.element__delete')
      .addEventListener('click', (evt) => {
        this._deleteFoto();
      });

    this._copyElementFotoTemplate.addEventListener('click', () =>
      this._handleCardClick(this._link, this._name)
    );
  }

  _addLike(evt) {
    this._buttonLike.classList.toggle('element__like_active');
  }

  _deleteFoto() {
    this._element.remove();
    this._element = null;
  }
}

export { Card };
