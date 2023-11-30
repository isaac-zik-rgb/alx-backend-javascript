import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) { throw TypeError('Currency must be a Currency'); }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) { throw TypeError('Currency must be a Currency'); }
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number') { throw TypeError('ConversionRate must be a number'); }
    return amount * conversionRate;
  }
}
