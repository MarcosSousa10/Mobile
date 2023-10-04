/* eslint-disable react-hooks/exhaustive-deps *//* eslint-disable prettier/prettier *//* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {ContainerLogin, Imagelog} from '../styles/login.styles';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/Button';
import {theme} from '../../../shared/themes/theme';
import {useLogin} from '../hooks/useLogin';
import { useEffect } from 'react';
import { connectionAPIGet } from '../../../shared/functions/connection/connectionAPI';
import { URL_USER } from '../../../shared/constants/urls';
import { UserType } from '../../../shared/types/userType';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MenuUrl } from '../../../shared/enums/MenuUrl.wnum';

const Login = () => {
   const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();
 useEffect(() => {
  const text = async () =>{
    const result = await connectionAPIGet<UserType>(URL_USER).catch(()=> undefined);
    console.log(result);
    if (result){
      navigation.navigate(MenuUrl.HOME);
    }
  }
  text();
 }, []);

  return (
    <View>
      <ContainerLogin>
        <Imagelog
          resizeMode="contain"
          source={require('../../../assets/images/download.png')}
        />
        <Input
          value={email}
          errorMessage={errorMessage}
          margin="0px 0px 8px 0px"
          title="Email:"
          placeholder="Digite seu email"
          onChange={handleOnChangeEmail}
        />
        <Input
          errorMessage={errorMessage}
          value={password}
          secureTextEntry
          title="Senha:"
          onChange={handleOnChangePassword}
          placeholder="Digite sua senha"
        />
        <Button
          loading={loading}
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};
export default Login;
