"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _db = _interopRequireDefault(require("./db"));

var _middleware = _interopRequireDefault(require("./middleware"));

var _api = _interopRequireDefault(require("./api"));

var _config = _interopRequireDefault(require("./config.json"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
app.server = _http["default"].createServer(app); // logger

app.use((0, _morgan["default"])('dev')); // 3rd party middleware

app.use((0, _cors["default"])({
  exposedHeaders: _config["default"].corsHeaders
}));
app.use(_bodyParser["default"].json({
  limit: _config["default"].bodyLimit
})); // connect to db

(0, _db["default"])(function (db) {
  // internal middleware
  app.use((0, _middleware["default"])({
    config: _config["default"],
    db: db
  })); // api router

  app.use('/api', (0, _api["default"])({
    config: _config["default"],
    db: db
  }));
  app.server.listen(process.env.PORT || _config["default"].port, function () {
    console.log("Started on port ".concat(app.server.address().port));
  });
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map