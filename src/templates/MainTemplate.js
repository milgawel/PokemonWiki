import React from "react";
import styled from "styled-components";
import GlobalStyle from "theme/GlobalStyle";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 10px;
  background-image: linear-gradient(to right bottom, #bb45ff, #f2d2d2);
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    {children}
  </Wrapper>
);

export default MainTemplate;
