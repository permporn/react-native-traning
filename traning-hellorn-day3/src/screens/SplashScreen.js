import React, { Component } from 'react'
import { View, Button, StyleSheet, Image, Alert } from 'react-native'
import godzilla from '../assets/godzilla.jpg'

class SplashScreen extends Component {

    clickHandler = () => {
        Alert.alert('button clicked')
    }

    render() {
        return (
        <View style={styles.container}>
            <Image source={godzilla} style={{ width:200, height:200, resizeMode:'contain'}}/>
            <Button title='Start App'/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9effff'
    }
})

export default SplashScreen