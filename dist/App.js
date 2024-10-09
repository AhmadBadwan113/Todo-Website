"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./App.css");
var _Home = _interopRequireDefault(require("./Home.jsx"));
var _Contact = _interopRequireDefault(require("./Contact.jsx"));
var _About = _interopRequireDefault(require("./About.jsx"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function App() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Home["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/App.jsx",
    element: /*#__PURE__*/React.createElement(_Home["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/Contact",
    element: /*#__PURE__*/React.createElement(_Contact["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/About",
    element: /*#__PURE__*/React.createElement(_About["default"], null)
  })));
}
var _default = exports["default"] = App;