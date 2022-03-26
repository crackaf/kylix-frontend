import axios from 'axios';
import qs from 'qs';
import { GET_USER_DETAILS } from 'config/constants/apis';
import { IResponse } from 'utils/types';

export type IDetailsProps = {
  auth_code: string;
};

export const details = async (data: IDetailsProps) => {
  const response = await axios.post(GET_USER_DETAILS, qs.stringify(data));
  const { data: userData, status, response: r } = response.data as IResponse;
  return { data: userData, status, r };
};
