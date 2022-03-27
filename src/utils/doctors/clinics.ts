import axios from 'axios';
import qs from 'qs';
import { DOCTOR_CLINICS } from 'config/constants/apis';
import { IResponse } from 'utils/types';

export type ISearchProps = {
  auth_code: string;
  doctor_id: string;
};

export const clinics = async (data: ISearchProps) => {
  const response = await axios.post(DOCTOR_CLINICS, qs.stringify(data));
  const { data: docs, status, response: r } = response.data as IResponse;
  return { status, r, docs: JSON.parse(docs) };
};
