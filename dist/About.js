"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = About;
var _Navbar = _interopRequireDefault(require("./Navbar"));
require("./contact.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar["default"], null), /*#__PURE__*/React.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "This is a project created using user-defined React components as well as the MaterialUI library."), /*#__PURE__*/React.createElement("li", null, "By using react hooks like useState and useEffect, the list updates itself according to user actions and does so without mutating the array of objects used to store the data."), /*#__PURE__*/React.createElement("li", null, "The list stores it's items in local storage in order to perserve the data."))));
}