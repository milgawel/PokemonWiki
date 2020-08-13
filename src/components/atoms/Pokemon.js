import React from 'react';
import styled from 'styled-components';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Image = styled.img`
  height: 70%;
  margin: 0 auto;
  margin-top: 10%;
`;

const Cell = styled.p`
  color: #306ab5;
  text-transform: uppercase;
  text-align: center;
  height: 80px;
  line-height: 80px;
  margin-top: 0px;
  padding: 0px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const Cellx = styled(Cell)``;
const Celly = styled(Cell)``;
const Cellz = styled(Cell)`
  display: none;
  color: #f9e01d;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr 1fr 1fr;
  background-color: #f4f4f4;
  margin-bottom: 2px;
  height: 80px;
  text-decoration: none;
  min-width: 550px;

  &:hover {
    background-color: #306ab5;
  }

  &:hover ${Cellx} {
    color: #f9e01d;
  }
  &:hover ${Celly} {
    display: none;
  }
  &:hover ${Cellz} {
    display: block;
  }
`;

const Pokemon = ({ keyValue, id, name, type, minLvl, evolution }) => {
  return (
    <Wrapper as={Link} to={`/pokemon/${keyValue}`}>
      <Cell>{id}</Cell>
      <Image
        src={`https://pokeres.bastionbot.org/images/pokemon/${keyValue}.png`}
        alt={`pokemon ${name}`}
      />
      <Cellx>{name}</Cellx>
      <Cell>{minLvl}</Cell>
      <Cell>{type}</Cell>
      <Celly>{evolution}</Celly>
      <Cellz onClick={() => <Redirect to={`/pokemon/${keyValue}`} />}>więcej </Cellz>
    </Wrapper>
  );
};
Pokemon.propTypes = {
  keyValue: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  minLvl: PropTypes.string.isRequired,
  evolution: PropTypes.string.isRequired,
};

export default Pokemon;
