import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { login as userLogin } from 'utils/user/login';
import Navbar from 'components/navbar';
import Colors from 'theme/colors';
import useUser from 'hooks/useUser';

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

const P = styled.p`
  color: #cccccc;
  font-weight: 600;
  width: fit-content;
  margin: 0 auto;
  margin-top: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
  @media screen and (max-width: 760px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

/**
 * @dev Signup component
 * @return {JSX.Element}
 */
function Login() {
  const { isLoggedIn, isVerified, loadUser } = useUser();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  if (isLoggedIn && !isVerified) {
    return (
      <LoginContainer>
        <Navbar />
        <FormContainer>
          <P>You need to verify your phone before you can use.</P>
          <Button className="btn btn-outline-light">
            <Link to="/auth">Verify Phone</Link>
          </Button>
        </FormContainer>
      </LoginContainer>
    );
  }

  const handlePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    userLogin({ phone, password })
      .then((data) => {
        console.info('RESPONSE', data);
        loadUser({ auth_code: data.auth_code });
      })
      .catch((err) => {
        console.error(err);
      });
    e.preventDefault();
    console.info(phone, password);
  };

  return (
    <LoginContainer>
      <Navbar />
      {isLoggedIn ? (
        <>
          <h1>You are already logged In</h1>
          <Link to="/">
            <Button type="button" className="btn btn-outline-light">
              Go To Home
            </Button>
          </Link>
        </>
      ) : (
        <>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-2">
                <Label className="form-label">Phone Number</Label>
                <Input
                  onChange={handlePhone}
                  type="tel"
                  className="form-control"
                  placeholder="01234567890"
                  pattern="([0-9]{11})"
                />
              </div>
              <div className="mb-3 mt-2">
                <Label className="form-label">Password</Label>
                <Input
                  onChange={handlePassword}
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
              </div>
              <SubmitButton className="btn btn-outline-light">
                Submit
              </SubmitButton>
            </form>
          </FormContainer>
          <P>
            Don't have an account?
            <Link
              to="/signup"
              style={{
                color: '#cccccc',
                fontWeight: '600',
                marginLeft: '10px',
              }}
            >
              Sign Up
            </Link>
          </P>
        </>
      )}
    </LoginContainer>
  );
}

export default Login;
