"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _products = _interopRequireDefault(require("@server/data/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(req, res) {
  res.statusCode = 200;
  res.json(_products["default"]);
};

exports["default"] = _default;