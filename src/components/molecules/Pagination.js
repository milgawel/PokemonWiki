import React from 'react';
import styled from 'styled-components';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled(NavLink)`
  background-color: #f9e01d;
  color: #306ab5;
  height: 40px;
  width: 40px;
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 40px;
  font-size: 20px;
  font-weight: 900;
  margin: 0 4px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &.active {
    background-color: #306ab5;
    color: #f9e01d;
  }
  &:hover {
    /* transform: scale(1.05); */
    box-shadow: 0px 0px 4px black;
  }
`;

const Pagination = (props) => {
  const {
    location: { pathname },
  } = props;
  const page = Number(pathname.substr(1));

  // console.log(typeof page);
  return (
    <Wrapper>
      <Container>
        <Button to={`/${page <= 2 ? 1 : page - 2}`}>{`${page <= 2 ? 1 : page - 2}`}</Button>
        <Button to={`/${page < 3 ? 2 : page - 1}`}>{`${page < 3 ? 2 : page - 1}`}</Button>
        <Button to={`/${page < 4 ? 3 : page}`}>{`${page < 4 ? 3 : page}`}</Button>
        <Button to={`/${page < 4 ? 4 : page + 1}`}>{`${page < 4 ? 4 : page + 1}`}</Button>
        <Button to={`/${page < 4 ? 5 : page + 2}`}>{`${page < 4 ? 5 : page + 2}`}</Button>
        <Button to={`/${page < 4 ? 6 : page + 3}`}>{`${page < 4 ? 6 : page + 3}`}</Button>
      </Container>
    </Wrapper>
  );
};

Pagination.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Pagination);
