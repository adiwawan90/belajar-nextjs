"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currencyFormatter = void 0;

var currencyFormatter = function currencyFormatter(money) {
  if (money !== undefined) {
    return money.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).slice(0, -3);
  } else {
    console.error('Parameter is undefined or null. parameter val: ', money);
  }
};

exports.currencyFormatter = currencyFormatter;