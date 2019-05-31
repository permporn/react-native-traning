import React, { Component } from 'react'
import { View, Button, StyleSheet, Image } from 'react-native'
import godzilla from '../assets/godzilla.jpg'
import MainTab from './MainTap';

class SplashScreen extends Component {

    clickHandler = () => {
        MainTab();
    }

    render() {
        return (
        <View style={styles.container}>
            <Image source={godzilla} style={{ width:200, height:200, resizeMode:'contain'}}/>
            <Button title='Start App' onPress={this.clickHandler}/>
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