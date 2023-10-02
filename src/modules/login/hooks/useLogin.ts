/* eslint-disable prettier/prettier */
import axios from 'axios';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {useState} from 'react';
export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const handleOnPress = async () => {
    setLoading(true);
     await axios
      .post('http://192.168.2.181:8080/auth', {
        email,
        password,
      })
      .catch(() => {
        setErrorMessage('Usuario ou senha invalidos');
      });
    setLoading(false);
  };
  const handleOnChangeEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };
  const handleOnChangePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setPassword(event.nativeEvent.text);
  };
  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
};