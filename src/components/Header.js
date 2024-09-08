import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="Disney Plus Logo" />
      <NavMenu>
        <MenuItem>
          <img src="/images/home-icon.svg" alt="Home Icon" />
          <span>HOME</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/search-icon.svg" alt="Search Icon" />
          <span>SEARCH</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/watchlist-icon.svg" alt="Watchlist Icon" />
          <span>WATCHLIST</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/original-icon.svg" alt="Original Icon" />
          <span>ORIGINAL</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/movie-icon.svg" alt="Movies Icon" />
          <span>MOVIES</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/series-icon.svg" alt="Series Icon" />
          <span>SERIES</span>
        </MenuItem>
      </NavMenu>
      <UserImg src="/images/eddy.jpg" alt="User Image" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  img {
    height: 20px;
    margin-right: 5px; /* Adjusts space between icon and text */
  }

  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    text-transform: uppercase;
    position: relative;

    &::after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: transform 0.3s ease, opacity 0.3s ease; /* Added transition for smooth effect */
    }
  }

  &:hover span::after {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
