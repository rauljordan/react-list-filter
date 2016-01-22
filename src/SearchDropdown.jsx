'use strict';

import React from 'react';
import ReactDom from 'react-dom';
// import compose from './utils';

export default class SearchDropdown extends React.Component {

  getInitialState() {
    return {
      data: ['hello'],
      filteredData: ['hello']
    };
  }

  filterData(e) {
    e.preventDefault();
    const regex = new RegExp(e.target.value, 'i');
    const filtered = this.state.data.filter((datum) => {
      return (datum.search(regex) > -1);
    });

    this.setState({
      filteredData: filtered
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <input type='text' placeholder={this.props.placeholder} onChange={this.filterData}></input>
        <ul>
          <li>No Items Found</li>
        </ul>
      </div>
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
