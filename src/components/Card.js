export default class Card {
  constructor(
    item,
    templateSelector,
    userId,
    { handleCardClick, handleDEliteClick, handleLikeClick }
  ) {
    this._userId = userId;
    this._item = item;
    this._name = item.name;
    this._link = item.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDEliteClick = handleDEliteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const elementTemplate = document.querySelector(
      this._templateSelector
    ).content;

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

    if (this._item.likes.find((el) => el._id == this._userId)) {
      this._buttonLike.classList.add('element__like_active');
    }
    this._likeCounter = this._element.querySelector('.element__like-counter');

    if (this._item.likes.length !== 0) {
      this._likeCounter.textContent = this._item.likes.length;
    }
    this._setEventListeners();
    if (!(this._item.owner._id === this._userId)) {
      this._element.querySelector('.element__delete').remove();
    }
    return this._element;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick(this.isLiked(this._item), this._item._id);
    });

    this._element
      .querySelector('.element__delete')
      .addEventListener('click', () => {
        this._handleDEliteClick(this._item._id);
      });

    this._copyElementFotoTemplate.addEventListener('click', () =>
      this._handleCardClick(this._link, this._name)
    );
  }
  isLiked(data) {
    return (
      data.likes.length == 0 || !data.likes.find((el) => el._id == this._userId)
    );
  }

  toggleLike(data) {
    if (this.isLiked(data)) {
      this._buttonLike.classList.remove('element__like_active');
      this._lakesLenght(data);
    } else {
      this._buttonLike.classList.add('element__like_active');
      this._lakesLenght(data);
    }
  }

  _lakesLenght(data) {
    this._item = data;
    this._likeCounter.textContent = data.likes.length;
  }

  deleteFoto() {
    this._element.remove();
    this._element = null;
  }
}
