import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Navbar from 'components/navbar';
import { register as registerUser } from 'utils/user/register';
import {
  SignupContainer,
  FormContainer,
  Label,
  Input,
  HR,
  GenderInputGroup,
  GenderGroup,
  GenderInput,
  SubmitButton,
} from './Styled';
import { TextField } from '@mui/material';

/**
 * @dev Signup component
 * @return {JSX.Element}
 */
function Signup() {
  const navigate = useNavigate();
  const [full_name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState<Date | null>(new Date());
  const [checkMatch, setCheckMatch] = useState('');

  // handle name, phone, email, password, confirmPassword, gender, address, dob
  useEffect(() => {
    if (password !== confirmPassword) {
      setCheckMatch('Password not match');
    } else {
      setCheckMatch('Password Matched');
    }
  }, [confirmPassword, password]);

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handlePhone = (e: any) => {
    setPhone(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleConfirmedPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  };
  const handleGender = (e: any) => {
    setGender(e.target.value);
  };
  const handleAddress = (e: any) => {
    setAddress(e.target.value);
  };
  const handleDob = (e: any) => {
    setDob(e);
  };

  const handleSubmit = (e: any) => {
    registerUser({
      full_name,
      phone,
      password,
      gender,
      address,
      dob: `${dob?.getDate()}/${dob?.getMonth()}/${dob?.getFullYear()}`,
    });
    e.preventDefault();
    console.info('submit');
    navigate('/');
  };

  return (
    <SignupContainer>
      <Navbar />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Full Name</Label>
            <Input
              onChange={handleName}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Phone Number</Label>
            <Input
              onChange={handlePhone}
              type="tel"
              className="form-control"
              placeholder="03001234567"
              pattern="([0-9]{11})"
            />
          </div>

          {/* Gender Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Gender</Label>
            <HR />
            <GenderInputGroup>
              <GenderGroup className="form-check">
                <GenderInput
                  onChange={handleGender}
                  value="Male"
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
                  Male
                </Label>
              </GenderGroup>
              <GenderGroup className="form-check">
                <GenderInput
                  onChange={handleGender}
                  value="Female"
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
                  Female
                </Label>
              </GenderGroup>
            </GenderInputGroup>
          </div>

          {/* Password Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Password</Label>
            <Input
              onChange={handlePassword}
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>

          {/* Password Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Confirm Password</Label>
            <Input
              onChange={handleConfirmedPassword}
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>

          {checkMatch}

          {/* Address Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Address</Label>
            <Input
              onChange={handleAddress}
              type="text"
              className="form-control"
              placeholder="address"
            />
          </div>

          {/* Date of Birth Input */}
          <div className="mb-3 mt-2 d-flex flex-column">
            <Label className="form-label">Date of Birth</Label>
            <div
              style={{
                margin: '0 auto',
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  label="Responsive"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={dob}
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
          </div>
          <SubmitButton className="btn btn-outline-light">
            Register
          </SubmitButton>
        </form>
      </FormContainer>
    </SignupContainer>
  );
}

export default Signup;
