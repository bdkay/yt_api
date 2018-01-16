import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDCgD1fx18NbRaSGFHnVJy63ryMhezFO34';

// create a new component, which should produce some html

//COMPONENT class
const App = () => {
  return <div>Hi!</div>;
};

//COMPONENT INSTANCE
// <App />

// take this component's generated HTML and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
