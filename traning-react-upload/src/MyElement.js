import React from 'react';

const fruits = ['apple', 'banana', 'kiwi', 'orange', 'mango'];

const FruitsElement = fruits.map(fruit => 
    React.createElement('li', null, fruit));

console.log(FruitsElement);

// const MySpan = React.createElement('span', null, 'Hello react');
const MyElement = React.createElement('ul' , {'id':'myelement'}, FruitsElement);

export default MyElement;