import React from 'react';
import './Person.css';

const Person = props => {
    return (
        <div className='Person'>
            <p>First name: <em>{props.firstname}</em></p>
            <p>Last name: <em>{props.lastname}</em></p>
            <p>Age: <em>{props.age}</em></p>
            <p>Email: <em>{props.email}</em></p>
        </div>
    );
}

export default Person;