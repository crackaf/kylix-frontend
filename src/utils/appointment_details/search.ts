import axios from 'axios';
import qs from 'qs';
import { SERCH_PATIENT_APPOINTMENTS } from 'config/constants/apis';
import { IResponse } from 'utils/types';

export type IGetAppointmentProps = {
  auth_code?: string;
};

export const getPatientAppointments = async ({
  auth_code,
}: {
  auth_code?: string | undefined;
}) => {
  const localData: IGetAppointmentProps = {};
  if (auth_code && auth_code.length > 0) localData['auth_code'] = auth_code;
  console.log(localData);
  const response = await axios.post(
    SERCH_PATIENT_APPOINTMENTS,
    qs.stringify(localData),
  );
  const { data: docs, status, response: r } = response.data as IResponse;
  return { status, r, docs: JSON.parse(docs) };
};
