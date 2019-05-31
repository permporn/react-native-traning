import React, { Component } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'
import { Navigation } from 'react-native-navigation'

class FirstScreen extends Component {
    showInfoHandler = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'MyInfoScreen',
                options: {
                    topBar: {
                        title:{
                            text: 'Information'
                        }
                    }
                }
            }
        })
    }

    pickImageHandler = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'MyImagePickerScreen',
                options: {
                    topBar: {
                        title:{
                            text: 'Please select an Image'
                        }
                    }
                }
            }
        })
    }

  render() {
    return (
      <View style={styles.container}>
        <Text> FirstScreen </Text>
        <View style={{ flexDirection:'row', justifyContent: 'space-evenly', marginTop: 10, width: '100%'}}>
            <Button title='Show Info' onPress={this.showInfoHandler}/>
            <Button title='Please select an Image' onPress={this.pickImageHandler} color='#ff6e40'/>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffeb3b'
    }
})

export default FirstScreen