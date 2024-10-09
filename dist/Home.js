"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _TodoList = _interopRequireDefault(require("./TodoList"));
var _Footer = _interopRequireDefault(require("./Footer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Home() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1'
    }
  }, /*#__PURE__*/React.createElement(_Navbar["default"], null), /*#__PURE__*/React.createElement(_TodoList["default"], null)), /*#__PURE__*/React.createElement(_Footer["default"], null)));
}