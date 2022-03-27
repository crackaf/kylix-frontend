import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import DatePicker from '@mui/lab/DatePicker';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import useUser from 'hooks/useUser';
import Colors from 'theme/colors';
import Navbar from 'components/navbar';
import { IUser } from 'utils/types/db';
import { getPatientAppointments } from 'utils/appointment_details/search';

const PageContainer = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  margin: auto;
  margin-top: 10px;
  font-size: 20px;
`;

const AppointmentContainer = styled.div`
  height: fit-content;
  width: 50%;
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

const Title = styled.div`
  width: fit-content;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
`;

const SubTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Label = styled.label<{ isGenderLabel?: boolean }>`
  color: #cccccc;
  font-weight: 600;
  margin-left: ${(props) => (props.isGenderLabel ? '0px' : '60px')};
  @media screen and (max-width: 760px) {
    margin-left: 5px;
  }
`;

const GenderInputGroup = styled.div`
  @media screen and (max-width: 760px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

const GenderGroup = styled.div`
  margin-left: 10px;
  @media screen and (max-width: 760px) {
    margin-left: 5px;
  }
`;

const HR = styled.hr`
  margin-top: 10px;
  height: 4px;
  width: 100%;
  margin: 0 auto;
  color: black;
`;

const SubmitButton = styled.button`
  margin: 0 auto;
  display: block;
`;

/**
 *
 * @return {JSX.Element}
 */
function Appointments() {
  const location = useLocation();
  const doctor: IUser = location.state as any;

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const { user, isLoggedIn, isVerified } = useUser();
  const handleDob = (e: any) => {
    setSelectedDate(e);
  };
  return (
    <PageContainer>
      <Navbar />
      {isLoggedIn ? (
        <>
          <AppointmentContainer>
            <Title>{doctor.full_name}</Title>
            <HR />
            <SubTitle>Available Slots</SubTitle>
            <div className="mb-3 mt-2">
              <GenderInputGroup>
                <GenderGroup className="form-check">
                  <input
                    value="Mon 2pm-4pm"
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <Label
                    isGenderLabel
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Mon 2pm-4pm
                  </Label>
                </GenderGroup>
                <GenderGroup className="form-check">
                  <input
                    value="Wed 2pm-4pm"
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="feamke"
                  />
                  <Label
                    isGenderLabel
                    className="form-check-label"
                    htmlFor="female"
                  >
                    Wed 2pm-4pm
                  </Label>
                </GenderGroup>
              </GenderInputGroup>
            </div>

            <SubTitle>Select Time Slot</SubTitle>
            <div
              style={{
                marginTop: '20px',
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disablePast
                  label="Time Slot"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={selectedDate}
                  onChange={handleDob}
                  renderInput={(params) => (
                    <TextField
                      sx={{
                        svg: { color: '#cccccc' },
                        input: { color: '#cccccc' },
                        label: { color: '#cccccc' },
                      }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>

            <SubmitButton className="btn btn-outline-light">
              Submit
            </SubmitButton>
          </AppointmentContainer>
        </>
      ) : (
        <ErrorMessage>Please Login First</ErrorMessage>
      )}
    </PageContainer>
  );
}

export default Appointments;
