import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import useUser from 'hooks/useUser';

const Button = styled.button`
  margin-left: 10px;
  @media screen and (max-width: 760px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const ImageDiv = styled.div`
  height: 60px;
  width: 80px;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

/**
 * @dev Navbar component
 * @return {JSX.Element}
 */
function Navbar() {
  const { user, isLoggedIn, isVerified, unloadUser } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="/">
          <ImageDiv />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ButtonDiv>
            <Link to={'/doctors'}>
              <Button type="button" className="btn btn-outline-light">
                Search
              </Button>
            </Link>
            {!isVerified && (
              <>
                <Link to={'/auth'}>
                  <Button type="button" className="btn btn-outline-light">
                    Verify Email
                  </Button>
                </Link>
              </>
            )}
            {!isLoggedIn ? (
              <>
                <Link to={'/login'}>
                  <Button type="button" className="btn btn-outline-light">
                    Log in
                  </Button>
                </Link>
                <Link to={'/signup'}>
                  <Button type="button" className="btn btn-outline-light">
                    SignUp
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to={'/'}>
                  <Button
                    onClick={async () => {
                      unloadUser();
                      // eslint-disable-next-line no-restricted-globals
                      location.reload();
                    }}
                    type="button"
                    className="btn btn-outline-light"
                  >
                    Logout
                  </Button>
                </Link>
                <Link to={'/profile'}>
                  <Button type="button" className="btn btn-outline-light">
                    {user && (user.full_name || 'Profile')}
                  </Button>
                </Link>
              </>
            )}
          </ButtonDiv>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
