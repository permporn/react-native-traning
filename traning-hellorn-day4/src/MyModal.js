import React, { Component } from 'react'
import { Text, View, StyleSheet, Modal, Button, Image } from 'react-native'
import reactNativeImage from './assets/React-Native-Apps-Illustration.jpg'

class MyModal extends Component {

    state = {
        modalVisible: false
    }
    showModal = () => {
        this.setState({ modalVisible: true});
    }

    hindModal = () => {
        this.setState({ modalVisible: false});
    }
  render() {
      // onRequestClose for Android
    return (
      <View style={styles.container}> 
        <Modal visible={this.state.modalVisible} animationType='fade' onRequestClose={this.hindModal}> 
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#2bbd7e', fontSize: 40}}>Hello Modal</Text>
                <Image source={reactNativeImage} style={{ width:200, height: 200, resizeMode:'contain'}}/>
                <Button title='Hide Modal' onPress={this.hindModal} color='#69f0ae'/>
            </View>
        </Modal>
        <Text style={{ color: '#2bbd7e', fontSize: 40 }}>Modal Demo</Text>
        <Button title='Show Modal' onPress={this.showModal} color='#69f0ae' style={styles.button}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        width: '80%',
    }
});

export default MyModal