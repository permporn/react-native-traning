import React, { Component } from 'react'
import { Text, View } from 'react-native'

class JustifyContentBasic extends Component {
    render() {
        return (
            <View style={{flex:1, flexDirection:'row', justifyContent: 'space-around'}}>
                <View style={{width: 50, height:50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height:50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height:50, backgroundColor: 'steelblue'}}/>
            </View>
        )
    }
}

export default JustifyContentBasic;