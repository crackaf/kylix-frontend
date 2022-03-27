import React from 'react';
import Navbar from 'components/navbar';
import Header from 'components/header';
import styled from 'styled-components';
import colors from 'theme/colors';
import { SERVER_API_URL } from 'config/constants';

const PageContainer = styled.div`
  background-color: ${colors.background};
  height: 160vh;
  width: 100%;
  @media screen and (max-width: 760px) {
    height: 100%;
  }
`;

const P = styled.div`
  color: white;
  margin-left: 10px;
  margin-bottom: 2px;
  font-size: 18px;
`;

const HR = styled.hr`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 4px;
  width: 80%;
  margin: 0 auto;
  color: white;
`;

const Title = styled.div`
  width: fit-content;
  font-size: 34px;
  font-weight: 600;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 20px;
  color: white;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const InnerContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  height: fit-content;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    min-width: 400px;
  }
`;

const OuterDiv = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  height: 300px;
  margin: 0 auto;
`;

const InnerDiv = styled.div`
  /* border: 1px solid blue; */
  width: 50%;
  min-width: 400px;
  height: 300px;
  margin: 0 auto;
`;

/**
 * @dev Homepage component
 * @return {JSX.Element}
 */
function Home() {
  console.log(SERVER_API_URL);
  return (
    <>
      <PageContainer>
        <Navbar />
        <Header />
        <Title>Features</Title>
        <HR />
        <ContainerDiv>
          <OuterDiv>
            <InnerContainer>
              <InnerDiv>
                <Title>Schedule Meeting</Title>
                <P>
                  Schedule meeting with the doctor at your desired timeslot.
                </P>
              </InnerDiv>
              <InnerDiv>
                <Title>Direct Contact</Title>
                <P>Easily contact the doctor you need.</P>
              </InnerDiv>
            </InnerContainer>
          </OuterDiv>
          <OuterDiv>
            <InnerContainer>
              <InnerDiv></InnerDiv>
              <InnerDiv></InnerDiv>
            </InnerContainer>
          </OuterDiv>
        </ContainerDiv>
      </PageContainer>
    </>
  );
}

export default Home;
