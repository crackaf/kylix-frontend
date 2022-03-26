import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/navbar';
import useUser from 'hooks/useUser';
import colors from 'theme/colors';

const PageContainer = styled.div`
  background-color: ${colors.background};
  height: 100vh;
  width: 100%;
`;

const AppointmentContainer = styled.div`
  height: fit-content;
  width: 50%;
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
            <AppointmentContainer>
              <Title>{user?.full_name}</Title>
              <HR />
              <SubTitle>Available Slots</SubTitle>
              <div className="mb-3 mt-2">
                {/* <GenderInputGroup>
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
                </GenderInputGroup> */}
              </div>
            </AppointmentContainer>
          </>
        ) : (
          <></>
        )}
      </PageContainer>
    </>
  );
}

export default AppointmentDetails;
