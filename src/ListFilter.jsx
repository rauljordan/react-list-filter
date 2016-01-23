'use strict';

import React from 'react';
import ReactDom from 'react-dom';

export default class ListFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filteredData: this.props.data
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
    const { filteredData } = this.state;
    const items = filteredData.map((datum) => {
      return (<li>{datum}</li>);
    });

    return (
      <div>
        <input className={this.props.inputClassName} type='text' placeholder={this.props.placeholder} onChange={this.filterData.bind(this)}></input>
        <ul className={this.props.ulClassName}>
          {items}
        </ul>
      </div>
    );
  }

  _getInputValue() {
    return ReactDom.findDOMNode(this).value;
  }
};

ListFilter.propTypes = {
  ulClassName: React.PropTypes.string,
  inputClassName: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  data: React.PropTypes.array
};
