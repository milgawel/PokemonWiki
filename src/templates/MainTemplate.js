import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 98vw;
  margin: 0 auto;
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    {children}
  </Wrapper>
);

MainTemplate.propTypes = { children: PropTypes.element.isRequired };

export default MainTemplate;
