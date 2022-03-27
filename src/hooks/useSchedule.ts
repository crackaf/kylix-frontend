import axios from 'axios';
import { DOCTOR_SCHEDULE } from 'config/constants/apis';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { IResponse } from 'utils/types';

export enum WeekDays {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export type ISchedule = {
  [key in keyof typeof WeekDays]: {
    start: string;
    end: string;
  }[];
};

/**
 *
 * @param  {string} doctor_id
 * @return {data}
 */
export default function useSchedule({
  auth_code,
  doctor_id,
}: {
  auth_code: string;
  doctor_id: string;
}) {
  const [schedule, setSchedule] = useState<ISchedule>({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  const convertData = (
    data: { day_name: string; start_time: string; end_time: string }[],
  ) => {
    const newSchedule = { ...schedule };
    for (const element of data) {
      const s = element.start_time.split(':');
      const e = element.end_time.split(':');

      const start = s[0] + ':' + s[1];
      const end = e[0] + ':' + e[1];

      newSchedule[element.day_name as any] = [
        ...newSchedule[element.day_name as any],
        { start, end },
      ];
    }
    setSchedule(newSchedule);
  };

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await axios.post(
        DOCTOR_SCHEDULE,
        qs.stringify({ auth_code, doctor_id }),
      );
      const { data: docs, status, response: r } = response.data as IResponse;
      if (status) {
        const localData = JSON.parse(docs);
        console.log(response.data);
        // setSchedule(localData);
        convertData(localData);
      }
    };

    fetchSchedule();
  }, [doctor_id]);

  return schedule;
}
