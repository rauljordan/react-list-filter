# Material Design React Dropdown With Search

![react-place](http://work.krasimirtsonev.com/react-place/react-place.gif)

## Installation

```
npm install react-search-dropdown
```

## Dependencies

* Of course [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom). You need to have these modules installed.

## Usage (ES6)

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Location from 'react-place';

var location;
var container = document.querySelector('...');

var onLocationSet = (data) => {
  // data.description
  // data.coords.lat
  // data.coords.lng
};

location = ReactDOM.render(
  <Location
    className='location'
    placeholder='Where are you?'
    country='US'
    noMatching='Sorry, I can not find {{value}}.'
    onLocationSet={ onLocationSet }
    />,
  container
);
```


## Testing

```
npm run test
```
