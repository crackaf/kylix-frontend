import axios from 'axios';
import qs from 'qs';
import { VERIFY_OTP } from 'config/constants/apis';
import { IResponse } from 'utils/types';

export type ICreateProps = {
  auth_code: string;
  otp_code: string;
};

export const verify = async (data: ICreateProps) => {
  const response = await axios.post(VERIFY_OTP, qs.stringify(data));
  const { status, response: r } = response.data as IResponse;
  return { status, r };
};
