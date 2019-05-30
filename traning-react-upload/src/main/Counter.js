import React, { Component } from 'react'
import CounterOutput from '../components/CounterOutput';
import CounterControl from '../components/CounterControl';

const ACTION = {
    'INCREASE':'INCREASE',
    'DECREASE':'DECREASE',
    'ADD':'ADD',
    'SUBTRACT':'SUBTRACT',
}
export default class Counter extends Component {
    state = {
        counter: 0
    }
    counterHandler = (action, value) => {
        switch (action) {
            case ACTION.INCREASE: this.setState(prevState => ({ counter : prevState.counter + 1 }));
                break;
            case ACTION.DECREASE: this.setState(prevState => ({ counter : prevState.counter - 1 }));
                break;
            case ACTION.ADD: this.setState(prevState => ({ counter : prevState.counter + value }));
                break; 
            case ACTION.SUBTRACT: this.setState(prevState => ({ counter : prevState.counter - value }));
                break;
            default:
                break;
        }
    }

    render() {
        return (
        <div>
            <CounterOutput value={this.state.counter}/>
            <CounterControl label='Increment' clicked={() => this.counterHandler(ACTION.INCREASE)}/>
            <CounterControl label='Decrement' clicked={() => this.counterHandler(ACTION.DECREASE)}/>
            <CounterControl label='Add 7' clicked={() => this.counterHandler(ACTION.ADD, 7)}/>
            <CounterControl label='Subtract 5' clicked={() => this.counterHandler(ACTION.SUBTRACT, 5)}/>
        </div>
        )
  }
}
