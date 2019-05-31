import {Navigation} from 'react-native-navigation';
import SplashScreen from './SplashScreen';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import InfoScreen from './InfoScreen';
import ImagePickerScreen from './ImagePickerScreen';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux'

const store = configureStore();

Navigation.registerComponent('MySplashScreen', () => SplashScreen)
Navigation.registerComponent('MyFirstScreen', () => FirstScreen)
// Navigation.registerComponent('MySecondScreen', () => SecondScreen)
Navigation.registerComponentWithRedux('MySecondScreen', () => SecondScreen, Provider, store)
Navigation.registerComponent('MyThirdScreen', () => ThirdScreen)
Navigation.registerComponent('MyInfoScreen', () => InfoScreen)
// Navigation.registerComponent('MyImagePickerScreen', () => ImagePickerScreen)
Navigation.registerComponentWithRedux('MyImagePickerScreen', () => ImagePickerScreen, Provider, store)

Navigation.setRoot({
    root: {
        component: {
            name: 'MySplashScreen'
        },
        option: {
            topBar: {
                title: 'Splash Screen'
            }
        }
    }
})