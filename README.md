# React List With Text Filter

![Imgur](http://i.imgur.com/dQxF3UJ.gif)

Builds a simple component with a text input that can filter a <ul> with data passed in as its list items through props. Style the text input and ul with classNames passed in as props to the component, namely ```ulClassName``` and ```inputClassName```
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
    ulClassName='material-ul'
    inputClassName='material-input'
    placeholder='Filter Items'
    data={data}
    />,
  container
);
```


## Testing

```
npm run test
```
