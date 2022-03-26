import axios from 'axios';
import qs from 'qs';
import { VERIFY_OTP } from 'config/constants/apis';
import { IResponse } from 'utils/types';

export type ICreateProps = {
  auth_code: string;
  otp_code: string;
};

export const verify = async (data: ICreateProps) => {
  const encoded =
    qs.stringify({ auth_code: data.auth_code }) +
    '&' +
    qs.stringify({ otp_code: data.otp_code });
  console.log(data, encoded);
  const response = await axios.post(VERIFY_OTP, encoded);
  const { status, response: r } = response.data as IResponse;
  return response.data;
};
