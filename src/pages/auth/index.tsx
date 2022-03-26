import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/navbar';
import Colors from 'theme/colors';

const PageContainer = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100%;
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
  return (
    <PageContainer>
      <Navbar isLoggedIn />
      <AuthContainer>
        <form>
          <div className="mb-3 mt-2">
            <Label className="form-label">Enter OTP Code</Label>
            <Input type="text" className="form-control" placeholder="Code" />
          </div>
        </form>
        <SubmitButton className="btn btn-outline-light">Submit</SubmitButton>
      </AuthContainer>
    </PageContainer>
  );
}

export default Auth;
