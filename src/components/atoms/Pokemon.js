import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr 1fr 1fr;
  background-color: #f4f4f4;
  margin-bottom: 2px;
  height: 80px;
`;
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
`;

const Pokemon = ({ keyValue, id, name, type, minLvl, evolution }) => {
  return (
    <Wrapper>
      <Cell>{id}</Cell>
      <Image
        src={`https://pokeres.bastionbot.org/images/pokemon/${keyValue}.png`}
        alt={`pokemon ${name}`}
      />
      <Cell>{name}</Cell>
      <Cell>{minLvl}</Cell>
      <Cell>{type}</Cell>
      <Cell>{evolution}</Cell>
    </Wrapper>
  );
};

export default Pokemon;
