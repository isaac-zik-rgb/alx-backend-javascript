export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // getter
  get size() {
    return this._size;
  }

  // getter
  get location() {
    return this._location;
  }

  // setter
  set size(newSize) {
    this._size = newSize;
  }

  // setter
  set location(newLocation) {
    this._location = newLocation;
  }

  // method
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return null;
  }
}
