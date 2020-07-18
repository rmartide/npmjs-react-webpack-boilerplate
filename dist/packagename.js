(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global = global || self, global['module-name'] = factory(global.React));
}(this, (function (React) { 'use strict';

    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

    function Componente() {
      return /*#__PURE__*/React.createElement("div", null, "Yap");
    }

    return Componente;

})));
