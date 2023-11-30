import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(_sqft, floors) {
    super(_sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
