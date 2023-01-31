export default class Section {
  constructor({ items, renderer }, containerSelector) {
    
    this._renderedCard = items
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(card) {
    this._container.append(card);
  }

  renderCard() {
    this._renderedCard.forEach((item) => {
      this._renderer(item);
    });
  }
}
