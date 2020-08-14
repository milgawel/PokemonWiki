import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 27%;
  margin: 3% 0 3% 3%;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 10px auto;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  color: #306ab5;
  line-height: 25px;
  padding: 0px;
  font-family: sans-serif;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 10px auto;
    text-align: center;
  }
`;

const PokemonData = ({
  name,
  type,
  gender,
  region,
  presenceWild,
  capturePossibility,
  difficultyCatching,
  presenceShiny,
  addedBy,
}) => {
  const translateTypeOfHabitat = (typo) => {
    switch (typo) {
      case 'grassland':
        return 'Łąka';
      case 'mountain':
        return 'Góry';
      case 'waters-edge':
        return 'Wybrzeże';
      case 'forest':
        return 'Las';
      case 'rough-terrain':
        return 'Łąka Las Góry';
      case 'sea':
        return 'Morze';
      case 'cave':
        return 'Jaskinia';
      case 'urban':
        return 'Miasto';
      case 'rare':
        return 'Brak okreśłonego miejsca';
      default:
        return type;
    }
  };

  const difficultyType = (typo) => {
    if (typo > 150) {
      return 'Łatwa';
    }
    if (typo < 40) {
      return 'Trudna';
    }
    return 'Średnia';
  };

  const translateTypeOfPokemon = (typo) => {
    switch (typo) {
      case 'grass':
        return 'Trawiasty';
      case 'fire':
        return 'Ognisty';
      case 'water':
        return 'Wodny';
      case 'bug':
        return 'Robaczy';
      case 'ice':
        return 'Lodowy';
      case 'normal':
        return 'Normalny';
      case 'electric':
        return 'Elektryczny';
      case 'poison':
        return 'Trujący';
      case 'ghost':
        return 'Duch';
      case 'ground':
        return 'Ziemny';
      case 'rock':
        return 'Kamienny';
      case 'psychic':
        return 'Psychiczny';
      case 'flying':
        return 'Latający';
      case 'fighting':
        return 'Walczący';
      case 'fairy':
        return 'Bajkowy';
      case 'dragon':
        return 'Smoczy';
      case 'steel':
        return 'Stalowy';
      case 'dark':
        return 'Mroczny';
      default:
        return type;
    }
  };

  return (
    <Wrapper>
      <TextContainer>
        <p style={{ textTransform: 'capitalize' }}>
          <b>Nazwa:</b> {name}
        </p>
        <p>
          <b>Typ:</b> {translateTypeOfPokemon(type[0])}
          {type[1] ? ` ${translateTypeOfPokemon(type[1])}` : null}
        </p>
        <p>
          <b>Płeć:</b> {(+gender / 8) * 100}% samica, {100 - (+gender / 8) * 100}% samiec
        </p>
        <p style={{ textTransform: 'capitalize' }}>
          <b>Region:</b>
          {region.length ? ` ${region}` : 'brak informacji'}
        </p>
        <p>
          <b>Występowanie w dziczy:</b>{' '}
          {translateTypeOfHabitat(presenceWild)
            ? translateTypeOfHabitat(presenceWild)
            : 'brak informacji'}
        </p>
        <p>
          <b>Możliwość złapania:</b> {capturePossibility > 1 ? 'Tak' : 'Nie'}
        </p>
        <p>
          <b>Trudność złapania:</b> {difficultyType(difficultyCatching)}
        </p>
        <p>
          <b>Występowanie shiny:</b>{' '}
          {translateTypeOfHabitat(presenceShiny)
            ? translateTypeOfHabitat(presenceShiny)
            : 'brak informacji'}
        </p>
        <p>
          <b>Dodawany do kolekcji przez:</b> {addedBy > 1 ? 'Złapanie' : 'Kupienie'}
        </p>
      </TextContainer>
    </Wrapper>
  );
};

PokemonData.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  gender: PropTypes.number,
  region: PropTypes.string.isRequired,
  presenceWild: PropTypes.string.isRequired,
  capturePossibility: PropTypes.number.isRequired,
  difficultyCatching: PropTypes.number.isRequired,
  presenceShiny: PropTypes.string.isRequired,
  addedBy: PropTypes.number.isRequired,
};

PokemonData.defaultProps = {
  gender: '',
};

export default PokemonData;
