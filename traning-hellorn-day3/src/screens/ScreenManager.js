import {Navigation} from 'react-native-navigation';
import SplashScreen from './SplashScreen';

Navigation.registerComponent('MySplashScreen', () => SplashScreen)

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