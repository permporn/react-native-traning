import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, Alert, StyleSheet } from 'react-native';
import godzilla from './assets/godzilla.jpg'

class TouchableButton extends Component {

    buttonClick = () => {
        Alert.alert('Godzilla ....');
    }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.buttonClick}>
            <Image source={godzilla} style={styles.image}/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 370,
        height: 320,
        resizeMode: 'contain'
    }
});

export default TouchableButton;
