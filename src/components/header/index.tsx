import React from 'react';
import styled from 'styled-components';
import colors from 'theme/colors';
import HeaderImage from 'assets/images/header-image.png';

const HeaderDiv = styled.div`
  background-image: url(${HeaderImage});
  width: 100%;
  height: 300px;
  background-size: cover;
  color: ${colors.background};
  font-size: 100px;
  font-weight: 600;
  padding-top: 3%;
  letter-spacing: 3px;
  padding-left: 4%;
  background-repeat: no-repeat;
`;

const HR = styled.div`
  border-bottom: 4px solid ${colors.background};
  height: 12px;
  width: 150px;
  background: ${colors.formBackground};
`;

/**
 * @dev Header component
 * @return {JSX.Element}
 */
function Header() {
  return (
    <HeaderDiv>
      Kylix
      <HR />
    </HeaderDiv>
  );
}

export default Header;
