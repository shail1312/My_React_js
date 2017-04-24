var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Shailesh',
  location: 'India'
};

var objTwo = {
  age:25,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>This is boilerplate</h1>,
  document.getElementById('app')
);
