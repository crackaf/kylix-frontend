import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

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
function Navbar({ isLoggedIn }: { isLoggedIn?: boolean }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Appointment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <ButtonDiv>
            <Link to={'/search'}>
              <Button type="button" className="btn btn-outline-light">
                Search
              </Button>
            </Link>
            {!isLoggedIn && (
              <Link to={'/login'}>
                <Button type="button" className="btn btn-outline-light">
                  Log in
                </Button>
              </Link>
            )}
          </ButtonDiv>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
