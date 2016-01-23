# React List With Text Filter

![Imgur](http://i.imgur.com/dQxF3UJ.gif)

## Installation

```
npm install react-list-filter
```

## Dependencies

* Of course [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom). You need to have these modules installed.

## Usage (ES6)

```js
import React from 'react';
import ReactDOM from 'react-dom';
import ListFilter from 'react-place';

var container = document.querySelector('#container');

let data = ['Boston', 'Palo Alto', 'Columbus'];

ReactDOM.render(
  <ListFilter
    className='list-filter'
    placeholder='Filter Cities'
    data={data}
    />,
  container
);
```


## Testing

```
npm run test
```
