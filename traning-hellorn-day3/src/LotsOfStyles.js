import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red}> Just Red </Text>
                <Text style={styles.bigBlue}> Just bigBlue </Text>
                <Text style={[styles.red, styles.bigBlue]}> red, then bigBlue </Text>
                <Text style={[styles.bigBlue, styles.red]}> bigBlue, then red </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    red: {
        color: 'red'
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }
});
