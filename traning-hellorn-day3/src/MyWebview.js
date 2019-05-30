import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export class MyWebview extends Component {
    render() {
        return (
            <WebView source={{ uri: 'http://www.swpark.or.th'}}/>
        )
    }
}

export default MyWebview
