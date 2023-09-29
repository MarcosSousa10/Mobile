/* eslint-disable prettier/prettier */
import {SafeAreaView} from 'react-native';

import Login from './modules/login';
import Modal from './shared/components/modal/Modal';
import Button from './shared/components/button/Button';
import { useState } from 'react';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <Modal onCloseModal={()=>{setModalVisible(false)}} visible={modalVisible} text='TEXTO TEXT' title='TITULO TESTE'/>
      <Button title='OPEN' onPress={()=>{setModalVisible(true)}}/>
      <Login/>
    </SafeAreaView>
  );
};


export default App;
