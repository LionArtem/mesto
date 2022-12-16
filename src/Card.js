import { fotoPopup, nameFotoPopup, openPopup, popupFoto } from './generalVariables.js'

class Card {
    constructor(name, link, templateSelector) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
    }
  
    _getTemplate() {
      const elementTemplate = document.querySelector(this._templateSelector).content;//находим Template
      const copyElementTemplate = elementTemplate.querySelector('.element').cloneNode(true);
      return copyElementTemplate;
      // здесь выполним все необходимые операции, чтобы вернуть разметку
    }
    generateCard() {
      this._element = this._getTemplate();
      
      this._copyElementFotoTemplate = this._element.querySelector('.element__foto');
      this._element.querySelector('.element__name-foto').textContent  = this._name;
      this._copyElementFotoTemplate.src = this._link;
      this._copyElementFotoTemplate.alt = this._name;
      this._setEventListeners();

      return this._element;
    }
  
    _setEventListeners() {
      this._element.querySelector('.element__like').addEventListener('click', (evt) => {
        this._addLike(evt);
      })
  
      this._element.querySelector('.element__delete').addEventListener('click', (evt) => {
        this._deleteFoto();
      })
  
      this._copyElementFotoTemplate.addEventListener('click', () => 
      this._openElementFoto());
    }
  
    _openElementFoto() {
      fotoPopup.src = this._link;
      nameFotoPopup.textContent = this._name;
      fotoPopup.alt = this._name;
      openPopup(popupFoto);
    };
  
    _addLike(evt) { 
      evt.target.classList.toggle('element__like_active');
  };
  
  _deleteFoto() { 
    this._element.remove();
    this._element = null
  };
  }

  export { Card }