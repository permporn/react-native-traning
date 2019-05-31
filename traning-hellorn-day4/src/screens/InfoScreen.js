import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'

class InfoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> InfoScreen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ce93d8'
    }
})

export default InfoScreen