/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {ContainerLogin} from '../styles/login.styles';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/Button';
const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Input />
        <Button margin="16px" title="ENTRAR" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};
export default Login;
