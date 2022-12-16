import { elementTemplate, fotoPopup, nameFotoPopup, openPopup, popupFoto } from './index.js'

class Card {
    constructor(name, link, templateSelector) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
    }
  
    _getTemplate() {
      const copyElementTemplate = elementTemplate.querySelector(this._templateSelector).cloneNode(true);
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
        this._deleteFoto(evt);
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
  
  _deleteFoto(evt) { 
    const elementFotoDelete = evt.target.closest(this._templateSelector);
    elementFotoDelete.remove();
  };
  }

  export { Card }