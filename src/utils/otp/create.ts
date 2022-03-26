import axios from 'axios';
import qs from 'qs';
import { CREATE_OTP } from 'config/constants/apis';

export type ICreateProps = {
  auth_code: string;
};

export const create = async (data: ICreateProps) => {
  const response = await axios.post(CREATE_OTP, qs.stringify(data));
  return response.data;
};
