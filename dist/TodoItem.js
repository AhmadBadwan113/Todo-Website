"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TodoItem;
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _ListItemButton = _interopRequireDefault(require("@mui/material/ListItemButton"));
var _ListItemIcon = _interopRequireDefault(require("@mui/material/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Clear = _interopRequireDefault(require("@mui/icons-material/Clear"));
require("./todoItem.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function TodoItem(_ref) {
  var item = _ref.item,
    remove = _ref.remove,
    toggle = _ref.toggle;
  var labelId = "checkbox-list-label-".concat(item.id);
  var removeTodo = function removeTodo() {
    remove(item.id);
  };
  return /*#__PURE__*/React.createElement(_ListItem["default"], {
    onClick: toggle,
    secondaryAction: /*#__PURE__*/React.createElement(_IconButton["default"], {
      edge: "end",
      "aria-label": "comments",
      onClick: removeTodo
    }, /*#__PURE__*/React.createElement(_Clear["default"], null)),
    disablePadding: true,
    className: "listItem"
  }, /*#__PURE__*/React.createElement(_ListItemButton["default"], {
    role: undefined,
    dense: true
  }, /*#__PURE__*/React.createElement(_ListItemIcon["default"], null, /*#__PURE__*/React.createElement(_Checkbox["default"], {
    edge: "start",
    checked: item.completed,
    tabIndex: -1,
    disableRipple: true,
    inputProps: {
      'aria-labelledby': labelId
    }
  })), /*#__PURE__*/React.createElement(_ListItemText["default"], {
    id: labelId,
    primary: item.text
  })));
}