"use strict";

var _arguments = arguments;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var compose = exports.compose = function compose() {
  var fns = _arguments;

  return function (result) {
    for (var i = fns.length - 1; i >= 0; i--) {
      result = fns[i].call(this, result);
    }
    return result;
  };
};
//# sourceMappingURL=utils.js.map