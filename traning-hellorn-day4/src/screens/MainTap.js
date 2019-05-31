import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const MainTab = () => {
    Promise.all([
        Icon.getImageSource('md-sunny', 30, '#e0e0e0' ),
        Icon.getImageSource('ios-leaf', 30, '#e0e0e0' ),
        Icon.getImageSource('ios-rainy', 30, '#e0e0e0' ),
    ])
    .then( sources => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: 'MyFirstScreen',
                                    options: {
                                        bottomTab: {
                                            text: 'First Screen',
                                            icon: sources[0],
                                            selectedIconColor: '#ffea00',
                                        }
                                    }
                                }
                            }]
                        }
                    },{
                        component: {
                            name: 'MySecondScreen',
                            options: {
                                bottomTab: {
                                    text: 'Second Screen',
                                    icon: sources[1],
                                    selectedIconColor: '#32cb00',
                                }
                            }
                        }
                    },{
                        component: {
                            name: 'MyThirdScreen',
                            options: {
                                bottomTab: {
                                    text: 'Third Screen',
                                    icon: sources[2],
                                    selectedIconColor: '#00b0ff',
                                }
                            }
                        }
                    }]
                }
            }
        })
        
    })
}

export default MainTab;