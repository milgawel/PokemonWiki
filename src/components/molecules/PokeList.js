import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import Pokemon from 'components/atoms/Pokemon';
import Pagination from 'components/molecules/Pagination';

const Wrapper = styled.div`
  width: 49%;
  position: relative;
  /* border: 2px solid red; */
`;

const Image = styled.img`
  display: block;
  width: 40%;
  margin: 10px auto 30px;
  object-fit: cover;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListHeader = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr 1fr 1fr;
  padding: 0;
  margin-bottom: 2px;
  background-color: #f9e01d;
`;

const Cell = styled.p`
  text-align: center;
  height: 40px;
  color: #306ab5;
  text-transform: uppercase;
  font-family: sans-serif;
  line-height: 40px;
  font-size: 16px;
  font-weight: 900;
  font-style: italic;
`;

const PokeList = ({ pokemons }) => {
  // list of pokemons mapped from array
  const MappedPokeList = pokemons.map((pokemon) => {
    const { key, id, name, type, minLvl, evolution } = pokemon;

    return (
      <Pokemon
        key={key}
        keyValue={key}
        id={id}
        name={name}
        type={type}
        minLvl={minLvl}
        evolution={evolution}
      />
    );
  });

  return (
    <Wrapper>
      <Image src={logo} alt="logo" />
      {/* {console.log(pokemons)} */}
      <List>
        <ListHeader>
          <Cell>id</Cell>
          <Cell>pokemon</Cell>
          <Cell>nazwa</Cell>
          <Cell>min.lvl</Cell>
          <Cell>typ</Cell>
          <Cell>ewolucja</Cell>
        </ListHeader>
        {MappedPokeList}
      </List>
      <Pagination />
    </Wrapper>
  );
};

export default PokeList;
