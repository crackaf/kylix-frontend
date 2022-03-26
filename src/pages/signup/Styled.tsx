import styled from 'styled-components';
import Colors from 'theme/colors';

export const SignupContainer = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100%;
`;

export const FormContainer = styled.div`
  height: fit-content;
  width: 40%;
  margin: 0 auto;
  margin-top: 6%;
  background-color: ${Colors.formBackground};
  border: 1px solid ${Colors.border};
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 760px) {
    padding: 10px;
  }
`;

export const Label = styled.label<{ isGenderLabel?: boolean }>`
  color: #cccccc;
  font-weight: 600;
  margin-left: ${(props) => (props.isGenderLabel ? '0px' : '60px')};
  @media screen and (max-width: 760px) {
    margin-left: 5px;
  }
`;

export const SubmitButton = styled.button`
  margin: 0 auto;
  display: block;
`;

export const GenderInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Input = styled.input`
  width: 80%;
  background-color: #959595;
  margin: 0 auto;
  color: wheat;
  @media screen and (max-width: 760px) {
    margin-left: 5px;
  }
`;

export const GenderInput = styled.input`
  background-color: #959595;
  color: wheat;
`;

export const GenderGroup = styled.div`
  margin-left: 50px;
  @media screen and (max-width: 760px) {
    margin-left: 5px;
  }
`;

export const HR = styled.hr`
  height: 3px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
  color: #cccccc;
`;
