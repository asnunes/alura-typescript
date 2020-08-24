abstract class View<T> {
  private _elemento: Element;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  update(model: T) {
    this._elemento.innerHTML = this.template(model);
  }

  abstract template(_model: T): string;
}
