"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Contact;
var _Navbar = _interopRequireDefault(require("./Navbar"));
require("./contact.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Contact() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar["default"], null), /*#__PURE__*/React.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/React.createElement("p", null, "Email: ahmadzeyad80@outlook.com"), /*#__PURE__*/React.createElement("p", null, "Github: ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/AhmadBadwan113"
  }, "https://github.com/AhmadBadwan113"))));
}