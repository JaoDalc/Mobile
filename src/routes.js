import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
            title: 'DevRadar',
            },
        }, 
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github',
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "#4e0312",
            },
        }
    })
);

export default Routes;