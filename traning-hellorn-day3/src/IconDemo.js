import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class IconDemo extends Component {
    clickHandler = () => {
        Alert.alert('Icon Click');
    }

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={this.clickHandler}>
            <View style={styles.iconContainer}>
                <Text style={{ fontSize: 24 }}>Contacts</Text>
                <Icon name='ios-contacts' size={30} color='#ff8a80'/>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.clickHandler}>
            <View style={styles.iconContainer}>
                <Text style={{ fontSize: 24 }}>Trophy</Text>
                <Icon name='ios-trophy' size={30} color='#2bbd7e'/>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.clickHandler}>
            <View style={styles.iconContainer}>
                <Text style={{ fontSize: 24 }}>Snow</Text>
                <Icon name='ios-snow' size={30} color='#448aff'/>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.clickHandler}>
            <View style={styles.iconContainer}>
                <Text style={{ fontSize: 24 }}>Planet</Text>
                <Icon name='ios-planet' size={30} color='#ba68c8'/>
            </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        margin: 4,
        borderColor: 'violet',
        borderWidth: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

export default IconDemo