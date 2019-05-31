import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native'
import ListItem from './ListItem';

class MyList extends Component {

    state = {
        text: '',
        items: []
    }

    textChangeHandler = val => {
        this.setState({text: val});
    }

    componentDidUpdate(){
        console.log('state',this.state);
    }

    addTextHandler = () => {
        if(this.state.text.trim() === '')
            return;
        this.setState( prevState => {
            return {
                items: prevState.items.concat({
                    key: Math.random().toString(),
                    message: prevState.text,
                }),
                text: '',
            }
        })
        console.log('state',this.state);
    }

    renderItem = info => {
        return <ListItem  message={info.item.message} key={info.item.kes} 
        deleteItem={() => this.deleteItemHandler(info.item.key)}/>;
    }

    deleteItemHandler = key => {
        this.setState(prevState => {
            return {
                items: prevState.items.filter(item => item.key != key)
            }
        })
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput placeholder='Enter your text here..' style={styles.textInput}
                value={this.state.text} onChangeText={this.textChangeHandler}
            />
            <Button title='add' style={styles.button} onPress={this.addTextHandler} color='#2bbd7e' />
        </View>
        <View>
            <FlatList data={this.state.items} renderItem={this.renderItem} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    textInput: {
        width: '80%',
        backgroundColor: '#9fffe0'
    },
    button: {
        width: '20%',
    }
});

export default MyList;