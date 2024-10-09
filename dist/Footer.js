"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _reactRouterDom = require("react-router-dom");
require("./footer.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Footer() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var handleContact = function handleContact() {
    navigate('/Contact');
  };
  var handleAbout = function handleAbout() {
    navigate('/About');
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "myFooter"
  }, /*#__PURE__*/React.createElement(_Button["default"], {
    onClick: handleContact
  }, "contact me"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Button["default"], {
    onClick: handleAbout
  }, "about"), /*#__PURE__*/React.createElement("p", null, "Powered by REACT"));
}