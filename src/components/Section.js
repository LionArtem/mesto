export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(card) {
    this._container.append(card);
  }

  prependItem(card) {
    this._container.prepend(card);
  }

  renderCard(card) {
    card.forEach((item) => {
      this._renderer(item);
    });
  }
}
