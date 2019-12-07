"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _package = require("../../package.json");

var _default = function _default(_ref) {
  var config = _ref.config,
      db = _ref.db;
  var api = (0, _express.Router)(); // perhaps expose some API metadata at the root

  api.get('/', function (req, res) {
    res.json({
      version: _package.version
    });
  });
  api.get('/hello', function (req, res) {
    res.json({
      greeting: 'world'
    });
  });
  api.get('/db/url', function (req, res) {
    res.json({
      url: "".concat(process.env.DB_HOST, ":").concat(process.env.DB_PORT)
    });
  });
  return api;
};

exports["default"] = _default;
//# sourceMappingURL=index.js.map