import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Image} from 'react-native'
import godzilla from './assets/godzilla.jpg'

const ListItem = props => {
    return (
        <TouchableHighlight onPress={props.deleteItem}>
            <View style={styles.container}>
                <Image style={styles.image} source={godzilla} />
                <Text style={styles.text}>{props.message}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        margin: 4,
        backgroundColor: '#69f0ae'
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginRight: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#767271'
    }
});

export default ListItem;




