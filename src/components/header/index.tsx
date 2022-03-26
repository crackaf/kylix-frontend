import React from 'react';
import styled from 'styled-components';
import HeaderImage from 'assets/images/header-image.png';

const HeaderDiv = styled.div`
  background-image: url(${HeaderImage});
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
`;

/**
 * @dev Header component
 * @return {JSX.Element}
 */
function Header() {
  return <HeaderDiv />;
}

export default Header;
