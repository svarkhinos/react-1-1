// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//---------------
// const link = React.createElement('a', {href: 'react.org'}, "link");
// const jsxLink = <a href ="react.org">link</a>;

// console.log(link);
// console.log(jsxLink);

// ReactDOM.render(link, document.getElementById("root"));

//------------
// const elem1 = React.createElement('span', { children: 'Hello' });
// const elem2 = React.createElement('span', { children: 'World' });

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem1, '', elem2],
// });

// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));
//-------------

const elem1 = <span>Hello</span>;

const elem2 = <span>world</span>;

const jsxElem = (
  <div>
    {elem1}
    {elem2}
  </div>
);
console.log(jsxElem);

//--------
