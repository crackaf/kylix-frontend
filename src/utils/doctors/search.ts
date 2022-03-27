import axios from 'axios';
import qs from 'qs';
import { SEARCH_DOCTOR } from 'config/constants/apis';
import { IResponse } from 'utils/types';

export type ISearchProps = {
  auth_code?: string;
  speciality?: string;
  rating?: string;
  limit?: string;
};

export const search = async (data: ISearchProps) => {
  const { auth_code, speciality, rating, limit } = data;
  const localData: ISearchProps = {};
  if (auth_code && auth_code.length > 0) localData['auth_code'] = auth_code;
  if (speciality && speciality.length > 0) localData['speciality'] = speciality;
  if (rating && rating.length > 0) localData['rating'] = rating;
  if (limit && limit.length > 0) localData['limit'] = limit;
  // console.log(localData);
  const response = await axios.post(SEARCH_DOCTOR, qs.stringify(localData));
  const { data: docs, status, response: r } = response.data as IResponse;
  return { status, r, docs: JSON.parse(docs) };
};
