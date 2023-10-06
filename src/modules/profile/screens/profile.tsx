/* eslint-disable prettier/prettier */
import React = require('react');
import Text from '../../../shared/components/text/Text';
import { View } from 'react-native';
import Button from '../../../shared/components/button/Button';
import { logout } from '../../../shared/functions/connection/auth';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (<View><Text>Profile</Text><Button title="SAIR" onPress={()=>{logout(navigation);}}/></View>);
};
export default Profile;
