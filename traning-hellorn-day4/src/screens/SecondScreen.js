import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Alert} from 'react-native'
import { connect } from 'react-redux';
import { deleteImage } from '../store/actions/actionCreator';
import ImageItem from '../components/ImageItem'

class SecondScreen extends Component {

    deleteItemHandler = key => {
        this.props.onDeleteImage(key)
    }

    renderItem = imageData => {
        return  <ImageItem 
        source={imageData.item.image} 
        description={imageData.item.description} 
        key={imageData.item.key} 
        deleteItem={() => this.deleteItemHandler(imageData.item.key)}/>;
    }

  render() {

    if (this.props.images.length <= 0 || this.props.images === null) 
    return  <View><Text> No Images Available</Text></View>

    return (
        <FlatList data={this.props.images} renderItem={this.renderItem} />
        //   <View style={styles.container}>
        //     <Text> SecondScreen </Text>
        //   </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 16
    }
})

const mapStateToProps = state => ({ images: state.imageStore.images });
const mapDispatchToProps = dispatch => ({onDeleteImage: key => dispatch(deleteImage(key))});

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen)