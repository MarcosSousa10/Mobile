/* eslint-disable prettier/prettier *//* eslint-disable react/react-in-jsx-scope */
import { SafeAreaView } from 'react-native';

import Login from './modules/login';
import { Provider } from 'react-redux';
import story from './story';
const App = () => {

  return (
    <Provider store={story}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>

  );
};


export default App;
