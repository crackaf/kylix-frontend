import React from 'react';
import { Card } from '@mui/material';
import RecentDoctorsTable from './components/DoctorsTable';
import { IUser } from 'utils/types/db';

/**
 * @dev Doctors component
 * @return {JSX.Element}
 */
function Doctors() {
  /**
  export interface IUser {
  user_id: number;
  user_type: number;
  full_name: string;
  phone: string;
  password: string;
  address: string;
  gender: string;
  dob: string;
  auth_code: string;
  ver_status: 'unverified' | 'verified';
}
     */
  const users: IUser[] = [
    {
      user_id: 1,
      user_type: 1,
      full_name: 'Arbab Hamd Rizwan',
      phone: '921234567890',
      password: '123456',
      address: 'Dhaka',
      gender: 'Male',
      dob: 'March 3, 2000',
      auth_code: 'asf',
      ver_status: 'verified',
    },
    {
      user_id: 2,
      user_type: 1,
      full_name: 'Zeerak Ahmad',
      phone: '921234567890',
      password: '123456',
      address: 'Dhaka',
      gender: 'Male',
      dob: 'March 3, 2000',
      auth_code: 'asf',
      ver_status: 'verified',
    },
    {
      user_id: 1,
      user_type: 1,
      full_name: 'Hunzlah Malik',
      phone: '921234567890',
      password: '123456',
      address: 'Dhaka',
      gender: 'Male',
      dob: 'March 3, 2000',
      auth_code: 'asf',
      ver_status: 'verified',
    },
  ];
  return (
    <Card>
      <RecentDoctorsTable users={users} />
    </Card>
  );
}

export default Doctors;

// Modified
