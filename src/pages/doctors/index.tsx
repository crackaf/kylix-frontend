import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Card } from '@mui/material';
import Colors from 'theme/colors';
import RecentDoctorsTable from './components/DoctorsTable';
import Navbar from 'components/navbar';
import { IUser } from 'utils/types/db';
import useUser from 'hooks/useUser';

const PageContainer = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100%;
`;

const SubmitButton = styled.button`
  margin: 0 auto;
  display: block;
`;

const Input = styled.input`
  width: 80%;
  background-color: #959595;
  margin: 0 auto;
  color: wheat;
`;

/**
 * @dev Doctors component
 * @return {JSX.Element}
 */
function Doctors() {
  const { user, isLoggedIn, isVerified } = useUser();

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
    <>
      <Helmet>
        <title>Doctors</title>
      </Helmet>
      <PageContainer>
        <Navbar />
        {!isLoggedIn && <>Please login first</>}
        {!isVerified && <>Please verify your account first</>}
        {isLoggedIn && isVerified && (
          <>
            <div className="d-flex w-50 mx-auto mt-5 mb-5">
              <Input
                type="text"
                className="form-control me-4"
                placeholder="Speciality"
              />
              <Input
                type="text"
                className="form-control me-4"
                placeholder="Rating"
              />
              <SubmitButton className="btn btn-outline-light">
                Submit
              </SubmitButton>
            </div>

            <Card>
              <RecentDoctorsTable users={users} />
            </Card>
          </>
        )}
      </PageContainer>
    </>
  );
}

export default Doctors;

// Modified
