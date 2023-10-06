/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {CreateUserType} from '../../../shared/types/createUserType';
import { NativeSyntheticEvent,  TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_USER } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../shared/enums/MenuUrl.wnum';
import { validateCpf } from '../../../shared/functions/cpf';
import { validatePhone } from '../../../shared/functions/phone';
import { validateEmail } from '../../../shared/functions/email';
import { removeSpacialCharacters } from '../../../shared/functions/caracteres';


export const useCreateUser = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const {request, loading} = useRequest();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [createUser, setCreateUser] = useState<CreateUserType>({
    confirmPassword: '',
    cpf: '',
    email:'',
    name:'' ,
    password:'',
    phone: '',
  });
  useEffect(()=>{
    if (
        createUser.name !== '' &&
        createUser.password === createUser.confirmPassword &&
        createUser.cpf !== '' &&
        validateCpf( createUser.cpf ) &&
        validatePhone(createUser.phone) &&
        validateEmail(createUser.email) &&
        createUser.email !== '' &&
        createUser.password !== '' &&
        createUser.phone !== ''
    ){
 setDisabled(false);
    } else {
        setDisabled(true);
    }
  },[createUser]);
  const handleCreateUser = async () => {
    const resultCreateUser = await request({
        url: URL_USER,
        method: MethodEnum.POST,
        body:{
            ...createUser,
            phone: removeSpacialCharacters(createUser.phone),
            cpf: removeSpacialCharacters(createUser.cpf),
        },
        message: 'Usuario cadastrado com sucesso!',
    });
    if (resultCreateUser){
        reset({
            index:0,
            routes: [{name: MenuUrl.LOGIN}],
        });
    }
  };
  const handleOnChangeInput = ( event: NativeSyntheticEvent<TextInputChangeEventData>, name: string)=>{
    setCreateUser((currentCreateUser) =>({
      ...currentCreateUser,
      [name]: event.nativeEvent.text,
}));
  };
  return {
    createUser,
    loading,
    disabled,
    handleOnChangeInput,
    handleCreateUser,
  };
};
