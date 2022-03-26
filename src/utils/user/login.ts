import axios from 'axios';
import qs from 'qs';
import { LOGIN_USER } from 'config/constants/apis';
import { IResponse } from 'utils/types';

export type ILoginProps = {
  phone: string;
  password: string;
};

export const login = async (data: ILoginProps) => {
  const response = await axios.post(LOGIN_USER, qs.stringify(data));
  const { data: auth_code, status, response: r } = response.data as IResponse;
  return { ...data, auth_code, status, r };
};
