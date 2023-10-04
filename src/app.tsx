/* eslint-disable prettier/prettier *//* eslint-disable react/react-in-jsx-scope */

import Login from './modules/login';
import { Provider } from 'react-redux';
import story from './story';
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './modules/home';
import { MenuUrl } from './shared/enums/MenuUrl.wnum';
import Splash from './modules/splash';
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <Provider store={story}>
      <GlobalModal/>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{headerShown: false}}/>
        <Stack.Screen name={MenuUrl.HOME} component={Home} options={{title: 'Home'}}/>
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>

  );
};


export default App;
