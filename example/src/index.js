import React from 'react';
import ReactDOM from 'react-dom';
import SearchDropdown from '../../src/SearchDropdown.jsx';

window.onload = () => {
  let container = document.querySelector('#container');

  ReactDOM.render(<SearchDropdown className='search-dropdown' placeholder='Input Some Text'/>, container);

  /*
  country.addEventListener('change', () => {
    location.updateCountry(country.value);
  });
  */
};
