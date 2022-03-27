import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from 'components/navbar';
import Colors from 'theme/colors';
import useUser from 'hooks/useUser';
import { create as createOtp } from 'utils/otp/create';
import { verify as verifyOtp } from 'utils/otp/verify';

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

const AuthContainer = styled.div`
  height: 180px;
  width: 35%;
  margin: 0 auto;
  margin-top: 10%;
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
 * @dev Auth Component
 * @return {JSX.Element}
 */
function Auth() {
  const { user, isLoggedIn, isVerified, loadUser } = useUser();
  const [otp, setOtp] = useState('');

  const handleOtp = (e: any) => {
    console.log(e.target.value);
    setOtp(e.target.value);
  };

  const handleGenerate = (e: any) => {
    console.log(user);
    if (user && user.auth_code) {
      createOtp({ auth_code: user.auth_code })
        .then((data) => {
          console.log(data);
          if (data.status == 200) alert('OTP has been sent to your phone');
          else alert('Error has occured');
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
    e.preventDefault();
    console.info('Generated OTP');
  };

  const handleSubmit = (e: any) => {
    if (user && user.auth_code) {
      verifyOtp({ auth_code: user.auth_code, otp_code: otp })
        .then((data) => {
          console.log(data);
          if (data) {
            loadUser(user);
            // eslint-disable-next-line no-restricted-globals
            location.reload();
            if (data.status == 200) alert('OTP has been verified');
            else alert('Error has occured');
          }
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
    e.preventDefault();
    console.info('Checked OTP');
  };

  return (
    <PageContainer>
      <Navbar />
      {!isLoggedIn && <ErrorMessage>Please Login First</ErrorMessage>}
      {isVerified && <ErrorMessage>User is already verified</ErrorMessage>}
      {isLoggedIn && !isVerified && (
        <AuthContainer>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-2">
              <Label className="form-label">Enter OTP Code</Label>
              <Input
                onChange={handleOtp}
                type="text"
                className="form-control"
                placeholder="Code"
              />
            </div>
            <SubmitButton className="btn btn-outline-light">
              Submit
            </SubmitButton>
          </form>
          <SubmitButton
            onClick={handleGenerate}
            className="btn btn-outline-light"
          >
            Generate OTP
          </SubmitButton>
        </AuthContainer>
      )}
    </PageContainer>
  );
}

export default Auth;
