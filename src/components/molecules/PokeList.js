import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';

const Wrapper = styled.div`
  border: 2px solid blue;
  width: 50%;
  position: relative;
`;

const Image = styled.img`
  display: block;
  width: 60%;
  margin: 10px auto;
`;

const PokeList = ({ pokemons }) => {
  return (
    <Wrapper>
      <Image src={logo} alt="logo" />
      <ul>
        {pokemons.map((pokemon) => (
          <li>{pokemon}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default PokeList;
