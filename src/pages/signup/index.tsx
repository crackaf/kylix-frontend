import React from 'react';
import DatePicker from '@mui/lab/DatePicker';
import Navbar from 'components/navbar';
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
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <SignupContainer>
      <Navbar />
      <FormContainer>
        <form>
          {/* Full Name Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Full Name</Label>
            <Input type="text" className="form-control" placeholder="Name" />
          </div>

          {/* Phone Number Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Phone Number</Label>
            <Input
              type="tel"
              className="form-control"
              placeholder="921234567890"
              pattern="(92)([0-9]{10})"
            />
          </div>

          {/* Gender Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Gender</Label>
            <HR />
            <GenderInputGroup>
              <GenderGroup className="form-check">
                <GenderInput
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
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>

          {/* Address Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Address</Label>
            <Input type="text" className="form-control" placeholder="address" />
          </div>

          {/* Date of Birth Input */}
          <div className="mb-3 mt-2">
            <Label className="form-label">Date of Birth</Label>
          </div>
          <DatePicker
            disableFuture
            label="Responsive"
            openTo="year"
            views={['year', 'month', 'day']}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <SubmitButton className="btn btn-outline-light">
            Register
          </SubmitButton>
        </form>
      </FormContainer>
    </SignupContainer>
  );
}

export default Signup;
