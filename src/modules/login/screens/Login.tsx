/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import { ContainerLogin, Imagelog } from '../styles/login.styles';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const { email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();

  return (
    <View>
      <ContainerLogin>
        <Imagelog
          resizeMode="center"
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
