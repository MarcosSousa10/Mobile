/* eslint-disable prettier/prettier */
import {AUTORIZATION_KEY} from '../../constants/authorizationConstants';
import {getItemStorage, removeItemStorage, setItemStorage} from '../storageProxy';

export const unsetAuthorizationToken = () =>
  removeItemStorage(AUTORIZATION_KEY);

export const setAuthorizationToken = async (token: string) =>
  setItemStorage(AUTORIZATION_KEY, token);

export const getAuthorizationToken = async () =>
  getItemStorage(AUTORIZATION_KEY);
