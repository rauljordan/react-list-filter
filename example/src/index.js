import React from 'react';
import ReactDOM from 'react-dom';
import ListFilter from '../../src/ListFilter.jsx';

window.onload = () => {
  let container = document.querySelector('#container');
  let data = ['Boston', 'Palo Alto', 'Columbus'];

  ReactDOM.render(
    <ListFilter
      className='search-dropdown'
      placeholder='Search Items'
      data={data}
      />,
    container
  );
};
