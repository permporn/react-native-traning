import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import reactNativeImage from './assets/React-Native-Apps-Illustration.jpg';

const imageUrl = 'https://www.iotgadgets.com/wp-content/uploads/2016/04/Facebook-Brings-React-Native-Windows-10-Tizen-1.jpg';
class ShowImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={reactNativeImage} style={styles.image}/>
        <Image source={{ uri: imageUrl }} style={styles.image}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
});

export default ShowImage;