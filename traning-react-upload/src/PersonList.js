import React, {Component} from 'react'; // state full component
import Person from './Person';

export default class PersonList extends Component {
    state = {
        persons: [
            { firstname: 'Permporn', lastname: 'Kuibumrung', age: '29', email: 'permporn@haii.or.th'},
            { firstname: 'Permporn', lastname: 'Kuibumrung', age: '29', email: 'permporn@haii.or.th'},
            { firstname: 'Permporn', lastname: 'Kuibumrung', age: '29', email: 'permporn@haii.or.th'},
        ]
    }
    render () {
        const personList = this.state.persons.map(person =>
            <Person
                firstname={person.firstname}
                lastname={person.lastname}
                age={person.age}
                email={person.email}/>
            )
        return(
            <div>{personList}</div>
        );
    }
}