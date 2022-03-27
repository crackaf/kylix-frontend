import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Colors from 'theme/colors';
import Navbar from 'components/navbar';
import { IUser } from 'utils/types/db';
import useSchedule from 'hooks/useSchedule';
import { clinics } from 'utils/doctors/clinics';
import { contact } from 'utils/doctors/contact';
import useUser from 'hooks/useUser';

const PageContainer = styled.div`
  background-color: ${Colors.background};
  height: 170vh;
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

const SubTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const GenderGroup = styled.div`
  margin-left: 10px;
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
function DoctorProfile() {
  const location = useLocation();
  const { user, isLoggedIn, isVerified } = useUser();
  const doctor = (location.state as IUser) || ({} as IUser);
  console.log(doctor);
  const schedule = useSchedule({
    doctor_id: doctor.user_id,
    auth_code: user?.auth_code || '',
  });
  console.log(schedule);

  const [clinicData, setClinicData] = React.useState<
    { clinic_name: string; address: string; geo_location: string }[]
  >([]);

  const [contactData, setContactData] = React.useState<
    { contact_id: string; contact_data: string }[]
  >([]);

  clinics({
    doctor_id: doctor.user_id,
    auth_code: user?.auth_code || '',
  })
    .then(
      ({
        docs,
      }: {
        docs: { clinic_name: string; address: string; geo_location: string }[];
      }) => {
        setClinicData(docs);
      },
    )
    .catch((err) => {
      console.log(err);
    });

  contact({
    doctor_id: doctor.user_id,
    auth_code: user?.auth_code || '',
  })
    .then(
      ({ docs }: { docs: { contact_id: string; contact_data: string }[] }) => {
        setContactData(docs);
      },
    )
    .catch((err) => {
      console.log(err);
    });

  return (
    <PageContainer>
      <Navbar />
      <>
        <ProfileContainer>
          <div className="mb-3 mt-2">
            <Label className="form-label">Full Name</Label>
            <Input
              type="text"
              className="form-control"
              disabled
              value={doctor.full_name}
            />
          </div>

          <div className="mb-3 mt-2">
            <Label className="form-label">User Type</Label>
            <Input
              type="text"
              className="form-control"
              disabled
              value={doctor.user_type === '1' ? 'Paitient' : 'Doctor'}
            />
          </div>

          <div className="mb-3 mt-2">
            <Label className="form-label">Phone</Label>
            <Input
              type="text"
              className="form-control"
              disabled
              value={doctor.phone}
            />
          </div>

          <div className="mb-3 mt-2">
            <Label className="form-label">Verified</Label>
            <Input
              type="text"
              className="form-control"
              disabled
              value={doctor.ver_status}
            />
          </div>

          <div className="mb-3 mt-2">
            <Label className="form-label">Address</Label>
            <Input
              type="text"
              className="form-control"
              disabled
              value={doctor.address}
            />
          </div>

          <div className="mb-3 mt-2">
            <Label className="form-label">Gender</Label>
            <Input
              type="text"
              className="form-control"
              disabled
              value={doctor.gender}
            />
          </div>

          <div className="mb-3 mt-2">
            <Label className="form-label">Date of Birth</Label>
            <Input
              type="text"
              className="form-control"
              disabled
              value={doctor.dob}
            />
          </div>
          {/*  */}
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
          {/*  */}
          <SubTitle>Available Clinics</SubTitle>
          <div className="mb-3 mt-2">
            <GenderInputGroup>
              {clinicData.map((key) => {
                return (
                  <div>
                    <GenderGroup
                      className="form-check"
                      key={JSON.stringify(key)}
                    >
                      <input
                        value={JSON.stringify(key)}
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="feamke"
                      />
                      <Label className="form-check-label" htmlFor="female">
                        Name:{key.clinic_name}, Address:{key.address}, GeoLoc:
                        {key.geo_location}
                      </Label>
                    </GenderGroup>
                  </div>
                );
              })}
            </GenderInputGroup>
          </div>

          <SubTitle>Available Contacts</SubTitle>
          <div className="mb-3 mt-2">
            <GenderInputGroup>
              {contactData.map((key) => {
                return (
                  <div>
                    <GenderGroup
                      className="form-check"
                      key={JSON.stringify(key)}
                    >
                      <input
                        value={JSON.stringify(key)}
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="feamke"
                      />
                      <Label className="form-check-label" htmlFor="female">
                        Type:{key.contact_id}, Data:{key.contact_data}
                      </Label>
                    </GenderGroup>
                  </div>
                );
              })}
            </GenderInputGroup>
          </div>
        </ProfileContainer>
      </>
    </PageContainer>
  );
}

export default DoctorProfile;
