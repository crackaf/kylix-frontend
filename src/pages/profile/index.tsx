import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/colors';
import Navbar from 'components/navbar';

const PageContainer = styled.div`
  background-color: ${Colors.background};
  height: 110vh;
  width: 100%;
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
`;

const Label = styled.label`
  color: #cccccc;
  font-weight: 600;
  margin-left: 60px;
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
  const type = 1;
  return (
    <PageContainer>
      <Navbar isLoggedIn />
      <ProfileContainer>
        <div className="mb-3 mt-2">
          <Label className="form-label">Full Name</Label>
          <Input type="text" className="form-control" disabled value="Arbab" />
        </div>

        <div className="mb-3 mt-2">
          <Label className="form-label">User Type</Label>
          <Input type="text" className="form-control" disabled value="Arbab" />
        </div>

        <div className="mb-3 mt-2">
          <Label className="form-label">Phone</Label>
          <Input type="text" className="form-control" disabled value="Arbab" />
        </div>

        <div className="mb-3 mt-2">
          <Label className="form-label">Address</Label>
          <Input type="text" className="form-control" disabled value="Arbab" />
        </div>

        <div className="mb-3 mt-2">
          <Label className="form-label">Gender</Label>
          <Input type="text" className="form-control" disabled value="Arbab" />
        </div>

        <div className="mb-3 mt-2">
          <Label className="form-label">Date of Birth</Label>
          <Input type="text" className="form-control" disabled value="Arbab" />
        </div>
        {type == 1 && (
          <div className="mb-3 mt-2">
            <Label className="form-label">Total Appointments</Label>
            <Input
              type="text"
              className="form-control"
              disabled
              value="Arbab"
            />
          </div>
        )}
      </ProfileContainer>
    </PageContainer>
  );
}

export default Profile;
