import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 33%;
`;

const PokemonData = () => {
  return (
    <Wrapper>
      <p style={{ marginBottom: '20px' }}>
        Bulbasaur (jap. フシギダネ Fushigidane) – jeden z gatunków Pokémonów, typu trawiastego i
        trującego[1]. Znajduje się pod pierwszym numerem w Narodowym Pokédeksie[2]. Obok Charmandera
        i Squirtle'a jest jednym ze starterów w regionie Kanto i może zostać wybrany przez gracza na
        początku gier Pokémon Red, Blue, FireRed i LeafGreen.
      </p>
      <p>
        <b>Typ:</b> Trawiasty Trujący
      </p>
      <p>
        <b>Płeć:</b> 12,5% samica, 87,5% samiec
      </p>
      <p>
        <b>Region:</b> Kanto
      </p>
      <p>
        <b>Występowanie w dziczy:</b> łąka
      </p>
      <p>
        <b>Możliwość złapania:</b> Tak
      </p>
      <p>
        <b>Trudność złapania:</b> Średnia
      </p>
      <p>
        <b>Występowanie shiny:</b> Łąka
      </p>
      <p>
        <b>Dodawany do kolekcji przez:</b> Złapanie
      </p>
    </Wrapper>
  );
};

export default PokemonData;
