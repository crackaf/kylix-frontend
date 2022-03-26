import axios from 'axios';
import qs from 'qs';
import { REGISTER_USER } from 'config/constants/apis';
import { IUser } from 'utils/types/db';

export type IRegisterProps = Partial<IUser>;

export const register = async (data: IRegisterProps) => {
  const response = await axios.post(REGISTER_USER, qs.stringify(data));
  const { status, response: r } = response.data;
  return { status, r };
};
