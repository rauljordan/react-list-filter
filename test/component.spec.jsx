
import ListFilter from '../src/ListFilter.jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import data from './fixtures/data.js';

var component;

describe('Given an instance of the Component', function () {

  describe('when we render the component', function () {

    before(() => {
      component = TestUtils.renderIntoDocument(
        <ListFilter
          className='search-dropdown'
          placeholder='Search Items'
          data={data()}
          />
      );
    });

    it('should have an input field', function () {
      var input = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');

      expect(input).to.have.length.above(0, 'Expected to have element with tag <input>');
    });

  });
});
