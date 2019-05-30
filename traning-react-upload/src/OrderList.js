import React, { Component } from 'react'
import OrderItem from './OderItem';
// import { threadId } from 'worker_threads';

export default class OrderList extends Component {
    state = {
        items: [
            {name: 'Motor', id: 'a001'},
            {name: 'Wrench', id: 'a002'},
            {name: 'Saw', id: 'a003'},
            {name: 'Hammer', id: 'a004'},
        ]
    }

    textChangeHandler = (event,id) => {
        const newText = event.target.value;
        console.log(newText);
        const newItems = [...this.state.items]; // ... = space function
        const index = newItems.findIndex(item => id === item.id);
        newItems[index].name = newText;
        this.setState({items: newItems});
    }

    deleteItemHandler = id => {
        const _newItems = [...this.state.items]; // ... = space function
        const newItems = _newItems.filter(item => id !== item.id);
        this.setState({items: newItems});
    }

    render() {
      const orderList = this.state.items.map(order => 
        <OrderItem
            key={order.id}
            id={order.id}
            name={order.name}
            textChange={event => this.textChangeHandler(event, order.id)}
            deleteItem={() => this.deleteItemHandler(order.id)}
        />);
    return (
      <div>{orderList}</div>
    )
  }
}
