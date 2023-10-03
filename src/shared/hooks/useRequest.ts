/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {RequestLogin} from '../types/requestLogin';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { ReturnLogin } from '../types/returnLogin';
import { useUserReducer } from '../../story/reducers/userReducer/useUserReducer';
import { useGlobalRducer } from '../../story/reducers/globalReducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MenuUrl } from '../enums/MenuUrl.wnum';
export const useRequest = () => {
  const {reset} = useNavigation<NavigationProp<ParamListBase>>();
  // const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const {setUser} = useUserReducer();
    const {setModal} = useGlobalRducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('http://192.168.2.181:8080/auth', body).then((result)=>{
        setUser(result.user);
        reset({
          index: 0,
          routes: [{name: MenuUrl.HOME}]
        });
      //  navigation.navigate('Home');
    }).catch(() => {
        setModal({visible:true,title:'Erro',text:'Usuario ou senha invalidos'});
    });
    setLoading(false);
  }; 
  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
