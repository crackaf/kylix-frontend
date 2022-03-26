import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/navbar';
import useUser from 'hooks/useUser';
import colors from 'theme/colors';
import { TextField } from '@mui/material';

const PageContainer = styled.div`
  background-color: ${colors.background};
  height: 125vh;
  width: 100%;
  @media screen and (max-width: 760px) {
    height: 100%;
  }
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  @media screen and (max-width: 760px) {
    margin-top: 0;
    flex-direction: column;
  }
`;

const AppointmentContainer = styled.div<{ width?: string }>`
  height: fit-content;
  width: ${({ width }) => width ?? '30%'};
  margin: 0 auto;
  margin-top: 2%;
  background-color: ${colors.formBackground};
  border: 1px solid ${colors.border};
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
  margin-left: 10px;
`;

const Title = styled.div`
  width: fit-content;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
`;

const P = styled.div`
  color: white;
  margin-left: 10px;
  margin-bottom: 2px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 80%;
  background-color: #959595;
  margin: 0 auto;
  color: wheat;
`;

const SubTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const HR = styled.hr`
  margin-top: 10px;
  height: 4px;
  width: 100%;
  margin: 0 auto;
  color: black;
`;

/**
 *
 * @return {JSX.Element}
 */
function AppointmentDetails() {
  const { user, isLoggedIn, isVerified } = useUser();
  return (
    <>
      <PageContainer>
        <Navbar />
        {isLoggedIn ? (
          <>
            <OuterContainer>
              <AppointmentContainer>
                <Title>Appointment Details</Title>
                <HR />
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Appointment ID:</Label>
                  <P>ID</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Doctor ID:</Label>
                  <P>Name</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Patient ID:</Label>
                  <P>Name</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Appointment Day:</Label>
                  <P>Name</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Start Time:</Label>
                  <P>Name</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">End Time:</Label>
                  <P>Name</P>
                </div>
              </AppointmentContainer>
              <AppointmentContainer>
                <Title>Patient Feedback</Title>
                <HR />
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Appointment ID:</Label>
                  <P>ID</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Doctor Name:</Label>
                  <P>Name</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Patient Name:</Label>
                  <P>Name</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Appointment Day:</Label>
                  <P>Name</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Start Time:</Label>
                  <P>Name</P>
                </div>
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">End Time:</Label>
                  <P>Name</P>
                </div>
              </AppointmentContainer>
            </OuterContainer>

            <div>
              <AppointmentContainer width="50%">
                <Title>Doctor Notes</Title>
                <HR />
                <div className="mb-3 mt-2 d-flex">
                  <Label className="form-label">Appointment ID:</Label>
                  <P>ID</P>
                </div>
                <div className="form-group" style={{ display: 'block' }}>
                  <textarea className="form-control" rows={5}></textarea>
                </div>
              </AppointmentContainer>
            </div>
          </>
        ) : (
          <></>
        )}
      </PageContainer>
    </>
  );
}

export default AppointmentDetails;
