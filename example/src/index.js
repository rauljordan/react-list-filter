import React from 'react';
import ReactDOM from 'react-dom';
import SearchDropdown from '../../src/SearchDropdown.jsx';

window.onload = () => {
  let container = document.querySelector('#container');
  let data = ['Boston', 'Palo Alto', 'Columbus'];

  ReactDOM.render(
    <SearchDropdown
      className='search-dropdown'
      placeholder='Search Items'
      data={data}
      />, container);
  /*
  country.addEventListener('change', () => {
    location.updateCountry(country.value);
  });
  */
};
