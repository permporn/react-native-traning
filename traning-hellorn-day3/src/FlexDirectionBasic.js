import React, { Component } from 'react'
import { Text, View } from 'react-native'

class FlexDirectionBasic extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}}/>
        <View style={{flex:2, backgroundColor: 'skyblue'}}/>
        <View style={{flex:3, backgroundColor: 'steelblue'}}/>
      </View>
    )
  }
}

export default FlexDirectionBasic;