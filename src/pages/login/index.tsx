import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/navbar';
import Colors from 'theme/colors';

const LoginContainer = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100%;
`;

const FormContainer = styled.div`
  height: fit-content;
  width: 40%;
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
 * @dev Signup component
 * @return {JSX.Element}
 */
function Login() {
  return (
    <LoginContainer>
      <Navbar isLoggedIn />
      <FormContainer>
        <form>
          <div className="mb-3 mt-2">
            <Label className="form-label">Phone Number</Label>
            <Input
              type="tel"
              className="form-control"
              placeholder="921234567890"
              pattern="(92)([0-9]{10})"
            />
          </div>
          <div className="mb-3 mt-2">
            <Label className="form-label">Password</Label>
            <Input
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <SubmitButton className="btn btn-outline-light">Submit</SubmitButton>
        </form>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;
