"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navbar;
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _FaceRetouchingNatural = _interopRequireDefault(require("@mui/icons-material/FaceRetouchingNatural"));
var _Brightness = _interopRequireDefault(require("@mui/icons-material/Brightness3"));
var _BrightnessHigh = _interopRequireDefault(require("@mui/icons-material/BrightnessHigh"));
var _reactRouterDom = require("react-router-dom");
require("./navBar.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Navbar() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var handleContact = function handleContact() {
    navigate('/Contact');
  };
  var handleHome = function handleHome() {
    navigate('/');
  };
  var handleAbout = function handleAbout() {
    navigate('/About');
  };
  return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(_AppBar["default"], {
    position: "static",
    sx: {
      bgcolor: '#16423C'
    }
  }, /*#__PURE__*/React.createElement(_Toolbar["default"], null, /*#__PURE__*/React.createElement(_FaceRetouchingNatural["default"], {
    sx: {
      mr: 2,
      ml: '-10px'
    }
  }), /*#__PURE__*/React.createElement(_Typography["default"], {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "./App.jsx"
  }, /*#__PURE__*/React.createElement(_Button["default"], {
    color: "white",
    className: "navBtn",
    onClick: handleHome
  }, /*#__PURE__*/React.createElement("p", null, "Todo List")))), /*#__PURE__*/React.createElement(_Button["default"], {
    color: "white",
    onClick: handleContact
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: ""
  }, /*#__PURE__*/React.createElement(_Button["default"], {
    color: "white",
    onClick: handleAbout
  }, "About")))));
}