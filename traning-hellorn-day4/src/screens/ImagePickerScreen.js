import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, TextInput, ScrollView } from 'react-native'
import { Navigation } from 'react-native-navigation'
import ImagePicker from 'react-native-image-picker';
import placeHolder from '../assets/placeholder.jpg'
import {connect} from 'react-redux'
import {addImage} from '../store/actions/actionCreator'

class ImagePickerScreen extends Component {

    state = {
        image: null,
        description: null,
    }

    componentWillUnmount() {
        this.setState({ image: null, description: null,});
    }

    pickImageHandler = () => {
        const options = {
            title: 'Select Image',
            storageOptions:{
                skipBackup: true,
                path: 'images'
            }
        }
        ImagePicker.showImagePicker(options, res => {
            if (res.didCancel)
                console.log( 'User cancelled image picking' );
            else if (res.error) 
                console.log( 'Image picking error', res.error );
            else {
                this.setState({
                    image: { uri: res.uri }
                })
            }
        });
    }

    addImageHandler = () => {
        this.props.onAddImage({
            image: this.state.image,
            description: this.state.description
        });
        Navigation.pop(this.props.componentId);
    }

    cancelHandler = () => {
        Navigation.pop(this.props.componentId);
    }

    textChangeHandler = text => {
        this.setState({ description: text })
    }

  render() {
    let imageSource;
    if (this.state.image != null)
        imageSource = this.state.image;
    else
        imageSource = placeHolder;

    return (
        <ScrollView>
             <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode='contain' source={imageSource}/>
                    <TextInput style={styles.textInput} onChangeText={this.textChangeHandler}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='Pick image' color='#ff6e40' onPress={this.pickImageHandler}/>
                    <Button title='Add Image' onPress={this.addImageHandler}/>
                    <Button title='cancel' color='#bdbdbd' onPress={this.cancelHandler}/>
                </View>
            </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container: { 
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: { width: '100%', alignItems: 'center', padding: 20, borderColor: 'black', borderWidth: 1 },
    buttonContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, },
    image: { width: 300, height: 300 },
    textInput: { width: '90%', height: 40, borderColor: 'blue', borderWidth: 1, padding: 4, }
})

const mapDispatchToProps = dispatch => ({onAddImage : image => dispatch(addImage(image))})


export default connect(null, mapDispatchToProps)(ImagePickerScreen)