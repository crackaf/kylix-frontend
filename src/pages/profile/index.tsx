import React from 'react';
import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/material/styles';
import Colors from 'theme/colors';
import Navbar from 'components/navbar';
import useUser from 'hooks/useUser';
import AppointmentList from './components/AppointmentList';

const PageContainer = styled.div`
  background-color: ${Colors.background};
  height: 170vh;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  margin: auto;
  margin-top: 10px;
  font-size: 20px;
`;

const ProfileContainer = styled.div`
  height: fit-content;
  width: 40%;
  margin: 0 auto;
  margin-top: 2%;
  background-color: ${Colors.formBackground};
  border: 1px solid ${Colors.border};
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 760px) {
    min-width: 350px;
    padding: 10px;
  }
`;

const Label = styled.label`
  color: #cccccc;
  font-weight: 600;
  margin-left: 60px;
  @media screen and (max-width: 760px) {
    margin-left: 26px;
  }
`;

const ListContainer = styled.div`
  margin-left: 60px;
  width: fit-content;
  @media screen and (max-width: 760px) {
    margin-left: 25px;
  }
`;

const Input = styled.input`
  width: 80%;
  background-color: #959595;
  margin: 0 auto;
  color: black;
`;

/**
 * @dev Profile Component
 * @return {JSX.Element}
 */
function Profile() {
  const { user, isLoggedIn, isVerified } = useUser();
  return (
    <PageContainer>
      <Navbar />
      {isLoggedIn ? (
        <>
          <ProfileContainer>
            <div className="mb-3 mt-2">
              <Label className="form-label">Full Name</Label>
              <Input
                type="text"
                className="form-control"
                disabled
                value={user?.full_name}
              />
            </div>

            <div className="mb-3 mt-2">
              <Label className="form-label">User Type</Label>
              <Input
                type="text"
                className="form-control"
                disabled
                value={user?.user_type === '1' ? 'Paitient' : 'Doctor'}
              />
            </div>

            <div className="mb-3 mt-2">
              <Label className="form-label">Phone</Label>
              <Input
                type="text"
                className="form-control"
                disabled
                value={user?.phone}
              />
            </div>

            <div className="mb-3 mt-2">
              <Label className="form-label">Verified</Label>
              <Input
                type="text"
                className="form-control"
                disabled
                value={isVerified ? 'Verified' : 'Not Verified'}
              />
            </div>

            <div className="mb-3 mt-2">
              <Label className="form-label">Address</Label>
              <Input
                type="text"
                className="form-control"
                disabled
                value={user?.address}
              />
            </div>

            <div className="mb-3 mt-2">
              <Label className="form-label">Gender</Label>
              <Input
                type="text"
                className="form-control"
                disabled
                value={user?.gender}
              />
            </div>

            <div className="mb-3 mt-2">
              <Label className="form-label">Date of Birth</Label>
              <Input
                type="text"
                className="form-control"
                disabled
                value={user?.dob}
              />
            </div>

            {user?.user_type === '1' ? (
              <>
                <div className="mb-3 mt-2">
                  <Label className="form-label">Total Appointments</Label>
                  <Input
                    type="text"
                    className="form-control"
                    disabled
                    value="0"
                  />
                </div>
                <div className="mb-3 mt-2">
                  <Label className="form-label">Appointments</Label>
                  <StyledEngineProvider injectFirst>
                    <ListContainer>
                      <AppointmentList itemData={[]} />
                    </ListContainer>
                  </StyledEngineProvider>
                </div>
              </>
            ) : (
              // doctor
              <>Doctro</>
            )}
          </ProfileContainer>
        </>
      ) : (
        <ErrorMessage>Please Login First</ErrorMessage>
      )}
    </PageContainer>
  );
}

export default Profile;
