import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Alert} from 'react-native'

class ButtonBasic extends Component {
    _onPressButton = () => {
        Alert.alert('you tapped the button!!');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title='Press me'/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title='Press me' color='#841584'/>
                </View>
                <View style={styles.alterButtonContainer}>
                    <Button onPress={this._onPressButton} title='The Look greats'/>
                    <Button onPress={this._onPressButton} title='Ok' color='#841584'/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alterButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default ButtonBasic;