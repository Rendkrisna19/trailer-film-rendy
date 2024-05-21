// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  & > a {
    margin: 0 1rem;
    color: #fff;
    text-decoration: none;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>Film <span>Rendy</span> </Logo>
    <Nav>
      <a href="#home">Home</a>
      <a href="#movies">Movies</a>
      <a href="#contact">Contact</a>
    </Nav>
  </HeaderWrapper>
);

export default Header;
