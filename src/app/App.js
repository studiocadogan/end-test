import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const AppContainer = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;

const Header = styled.div``;

const Logo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  a {
    background: url(https://js.endclothing.com/static/version1548430476/frontend/Endclothing/base/en_GB/images/svg/sprite-e06d122c.svg)
      27.971813725490197% 33.59683794466403% no-repeat;
    width: 122px;
    height: 45px;
    transform: scale(0.84428);
  }
  span {
    display: none;
  }
`;

const MockBanner = styled.div`
  height: 600px;
  width: 100vw;
  background: black;
`;

const App = ({ navData }) => (
  <AppContainer>
    <Header>
      <Logo>
        <a>
          <span>End Clothing</span>
        </a>
      </Logo>
      <Nav navData={navData} />
    </Header>
    <MockBanner />
  </AppContainer>
);

module.exports = App;
