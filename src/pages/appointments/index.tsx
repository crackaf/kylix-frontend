import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import DatePicker from '@mui/lab/DatePicker';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import useUser from 'hooks/useUser';
import Colors from 'theme/colors';
import Navbar from 'components/navbar';
import useSchedule from 'hooks/useSchedule';
import { IUser } from 'utils/types/db';

const PageContainer = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100%;
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

/**
 *
 * @return {JSX.Element}
 */
function Appointments() {
  const location = useLocation();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const { user, isLoggedIn, isVerified } = useUser();

  const handleDate = (e: any) => {
    setSelectedDate(e);
  };

  const [errorcheck, setErrorCheck] = useState('');

  // get doctor_id from state
  const doctor = (location.state as IUser) || ({} as IUser);

  // call the useSchedule
  const schedule = useSchedule({
    doctor_id: doctor.user_id,
    auth_code: user?.auth_code || '',
  });
  console.log(schedule);

  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  useEffect(() => {
    for (const key in schedule) {
      if (Object.prototype.hasOwnProperty.call(schedule, key)) {
        const element = schedule[key];
        for (const iterator of element) {
          if (selectedDate) {
            // compare it with date
            if (key !== weekDays[selectedDate.getDay()]) {
              setErrorCheck('No appointment available on this day');
            }
            const shour = parseInt(iterator.start.split(':')[0]);
            const sminute = parseInt(iterator.start.split(':')[1]);
            const ehour = parseInt(iterator.end.split(':')[0]);
            const eminute = parseInt(iterator.end.split(':')[1]);
            if (
              selectedDate.getHours() >= shour &&
              selectedDate.getMinutes() >= sminute &&
              selectedDate.getHours() <= ehour &&
              selectedDate.getMinutes() <= eminute
            ) {
              setErrorCheck('Appointment is available');
            } else {
              setErrorCheck('Appointment is not available');
            }
          }
        }
      }
    }
  }, [schedule, selectedDate, weekDays]);

  return (
    <PageContainer>
      <Navbar />
      {isLoggedIn ? (
        <>
          <AppointmentContainer>
            <Title>{user?.full_name}</Title>
            <HR />
            <SubTitle>Available Slots</SubTitle>
            <div className="mb-3 mt-2">
              <GenderInputGroup>
                {Object.keys(schedule).map((key) => {
                  return (
                    <div>
                      {schedule[key as any].map((slot) => {
                        return (
                          <GenderGroup className="form-check" key={key}>
                            <input
                              value={JSON.stringify(key + '-' + slot)}
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="feamke"
                            />
                            <div key={JSON.stringify(slot)}>
                              <Label
                                isGenderLabel
                                className="form-check-label"
                                htmlFor="female"
                              >
                                {key} - {slot.start} to {slot.end}
                              </Label>
                            </div>
                          </GenderGroup>
                        );
                      })}
                    </div>
                  );
                })}
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
                  onChange={handleDate}
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
              {errorcheck}
            </div>
          </AppointmentContainer>
        </>
      ) : (
        <>Please Login First</>
      )}
    </PageContainer>
  );
}

export default Appointments;
