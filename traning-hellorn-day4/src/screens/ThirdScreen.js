import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import GeoLocation from '@react-native-community/geolocation'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

class ThirdScreen extends Component {

    state = {
        location: {
            latitude: 13.7649,
            longitude: 100.5383,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
        }
    }

    componentDidMount() {
        GeoLocation.getCurrentPosition(pos => {
            this.setState(prevState => {
                const newLocation = {...prevState.location};
                newLocation.latitude = pos.coords.latitude;
                newLocation.longitude = pos.coords.longitude;
                return ({ location: newLocation });
            })
        })
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Map Demo</Text>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={this.state.location}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    text: { textAlign: 'center', fontSize: 16, marginBottom: 10,},
    map: {height: '100%', width: '100%', justifyContent: 'center', alignContent: 'center',}
})

export default ThirdScreen