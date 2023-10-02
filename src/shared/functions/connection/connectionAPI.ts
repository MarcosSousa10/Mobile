/* eslint-disable prettier/prettier *//* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { MethodEnum } from '../../../enums/methods.enum';
import metroConfig from '../../../../metro.config';

export type MetgoType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export default class ConnectionAPI {
    static async call<T >(url: string, method: MetgoType, body?: unknown): Promise<T> {
        switch (method) {
            case MethodEnum.DELETE:
            case MethodEnum.GET:
                return (await axios[method]<T>(url)).data;
            case MethodEnum.PATCH:
            case MethodEnum.POST:
            case MethodEnum.PUT:

            default:
                return (await axios[method]<T>(url, body)).data;

        }
    }
    static async connect<T>(url: string, method: MetgoType, body?: unknown): Promise<T>{
        return this.call<T>(url,method,body).catch((error) =>{
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                    case 403:
                        throw new Error( 'Sem Permissão');
                    default:
                        throw new Error( 'Sem Internet');
                }
            }
            throw new Error( 'Sem Internet');
        });
    }
}
export const connectionAPIGet = async <T>(url: string): Promise<T> =>{
    return ConnectionAPI.connect(url, MethodEnum.GET);
  };
export const connectionAPIPost = async <T>(url: string, body: unknown): Promise<T> =>{
    return ConnectionAPI.connect(url, MethodEnum.POST, body);
  };
export const connectionAPIDelete = async <T>(url: string): Promise<T> =>{
    return ConnectionAPI.connect(url, MethodEnum.DELETE);
  };
export const connectionAPIPut = async <T>(url: string): Promise<T> =>{
    return ConnectionAPI.connect(url, MethodEnum.PUT);
  };
export const connectionAPIPatch = async <T>(url: string): Promise<T> =>{
    return ConnectionAPI.connect(url, MethodEnum.PATCH);
  };