import React from 'react'
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

const ImageItem = props => {
    return (
        <TouchableWithoutFeedback onPress={props.deleteItem}>
            <View style={styles.container}>
                <Image resizeMode='contain' source={props.source} style={styles.image}/>
                <Text style={styles.text}>{props.description}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex:1,
        flexDirection: 'row',
        margin: 4,
        borderWidth: 1,
        borderColor: '#546e7a',
        backgroundColor: '#1de9b6',
    },
    image: { width: 64, height: 64, marginRight: 20},
    text: { color: '#546e7a', fontWeight: 'bold', }
})

export default ImageItem

