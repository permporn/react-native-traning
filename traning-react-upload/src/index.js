import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import MySuperElement from './MyElement'; // Object
// import Person from './Person'; // stateless functional component
// import PersonList from './PersonList';
// import OrderList from './OrderList';
import Counter from './main/Counter'

// const personData = [
//     { firstname: 'Permporn', lastname: 'Kuibumrung', age: '29', email: 'permporn@haii.or.th'},
//     { firstname: 'Permporn', lastname: 'Kuibumrung', age: '29', email: 'permporn@haii.or.th'},
//     { firstname: 'Permporn', lastname: 'Kuibumrung', age: '29', email: 'permporn@haii.or.th'},
// ]

// const person = (
//     <div>
//        { personData.map( person => <Person
//             firstname={person.firstname}
//             lastname={person.lastname}
//             age={person.age}
//             email={person.email}/>
//        )}
//     </div>
// )

// const person = (
//     <div>
//         <Person
//             firstname={'Permporon'}
//             lastname={'Kuibumrung'}
//             age={'29'}
//             email={'pemrporn@haii.or.th'}
//         />
//         <Person
//             firstname={'Permporon'}
//             lastname={'Kuibumrung'}
//             age={'29'}
//             email={'pemrporn@haii.or.th'}
//         />
//         <Person
//             firstname={'Permporon'}
//             lastname={'Kuibumrung'}
//             age={'29'}
//             email={'pemrporn@haii.or.th'}
//         />
//     </div>
// )
    
ReactDOM.render(<Counter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
