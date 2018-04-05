"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Button.css");
var noop = function () { }; // tslint:disable-line
exports.Button = function (props) {
    var label = props.label, onClick = props.onClick, _a = props.disabled, disabled = _a === void 0 ? false : _a;
    var disabledclass = disabled ? 'Button_disabled' : '';
    return (React.createElement("div", { className: "Button " + disabledclass, onClick: !disabled ? onClick : noop },
        React.createElement("span", null, label)));
};
//# sourceMappingURL=Button.js.map