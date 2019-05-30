/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LotsOfStyles from './src/LotsOfStyles';
import FixedDimensionsBasic from './src/FixedDimensionsBasic';
import FlexDirectionBasic from './src/FlexDirectionBasic';
import JustifyContentBasic from './src/JustifyContentBasic';
import AlignItemBasic from './src/AlignItemBasic';
import ButtonBasic from './src/ButtonBasic'

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => ButtonBasic);
