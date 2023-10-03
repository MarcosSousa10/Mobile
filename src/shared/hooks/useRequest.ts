/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {RequestLogin} from '../types/requestLogin';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { ReturnLogin } from '../types/returnLogin';
import { useUserReducer } from '../../story/reducers/userReducer/useUserReducer';
export const useRequest = () => {
    const {setUser} = useUserReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('http://192.168.2.181:8080/auth', body).then((result)=>{
        setUser(result.user);
    }).catch(() => {

      setErrorMessage('Usuario ou senha invalidos');
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
