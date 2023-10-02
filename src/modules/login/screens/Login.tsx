/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import { ContainerLogin, Imagelog } from '../styles/login.styles';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/themes/theme';
const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Imagelog resizeMode="center" source={require("../../../assets/images/download.png")}/>
        <Input 
        margin='0px 0px 8px 0px'
        title='Email:' 
        placeholder='Digite seu email'
        />
        <Input 
        secureTextEntry
        title='Senha:' 
        placeholder='Digite sua senha'
        />
        <Button
          
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
