'use strict';

import React from 'react';
import ReactDom from 'react-dom';
// import Promise from 'promise-polyfill';

/**
const compose = () => {
  var fns = arguments;

  return function (result) {
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i].call(this, result);
    }
    return result;
  };
};
*/

export default class SearchDropdown extends React.Component {

  render() {
    return (
      <input
        type='text'
        className={ this.props.className }
        placeholder={ this.props.placeholder || 'Type your location here.' }
      />
    );
  }

  _getInputValue() {
    return ReactDom.findDOMNode(this).value;
  }
};

SearchDropdown.propTypes = {
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string
};
