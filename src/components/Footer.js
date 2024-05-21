// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <p>&copy; 2024 MovieApp. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
