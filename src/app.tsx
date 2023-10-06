/* eslint-disable prettier/prettier */

import Login from './modules/login';
import { Provider } from 'react-redux';
import story from './story';
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './modules/home';
import { MenuUrl } from './shared/enums/MenuUrl.wnum';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';

import React = require('react');
import { Icon } from './shared/components/icon/Icon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from './shared/themes/theme';
import Orders from './modules/ordes';
import Profile from './modules/profile';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const renderTabBarIcon = (color: string, route:  RouteProp<ParamListBase, string>) => {
    let iconName: string;
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Orders':
        iconName = 'cart';
        break;
      default:
        iconName = 'profile';
        break;
    }
    return <Icon name={iconName} size={16} color={color} />;
  }
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon:({color}) => renderTabBarIcon(color, route),
          tabBarActiveTintColor: theme.colors.mainTheme.primary,
          tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Orders" component={Orders} options={{title: 'Pedidos', headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{title: 'Perfil', headerShown: false}}/>
      </Tab.Navigator>
  );
};
const App = () => {

  return (
    <Provider store={story}>
      <GlobalModal/>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{headerShown: false}}/>
        <Stack.Screen name={MenuUrl.HOME} component={TabNavigation} options={{headerShown: false}}/>
        <Stack.Screen name={MenuUrl.CREATE_USER} component={CreateUser} options={{title: 'Criar Usuario'}}/>
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>

  );
};


export default App;
