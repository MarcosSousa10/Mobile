/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {RequestLogin} from '../types/requestLogin';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { ReturnLogin } from '../types/returnLogin';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../story/reducers/userReducer';
export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
const dispatch = useDispatch();
  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('http://192.168.2.181:8080/auth', body).then((result)=>{
        dispatch(setUserAction(result.user));
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
