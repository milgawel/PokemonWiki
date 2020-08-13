import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.png';
import StatsTable from 'components/molecules/StatsTable';
import PokemonData from 'components/molecules/PokemonData';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  @media screen and (max-width: 767px) {
    object-fit: contain;
  }
`;

const LogoImage = styled.img`
  margin: 0 auto;
  height: 100px;
  display: block;
  @media screen and (max-width: 767px) {
    width: 60%;
    object-fit: contain;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const PokeImage = styled.img`
  width: 35%;
  @media screen and (max-width: 767px) {
    width: 90%;
    display: block;
    margin: 10px auto;
  }
`;

const LowerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 10px auto;
  }
`;

const PageButton = styled.button`
  text-align: center;
  height: 40px;
  min-width: 140px;
  color: #306ab5;
  text-transform: uppercase;
  font-family: sans-serif;
  line-height: 40px;
  font-size: 16px;
  font-weight: 900;
  font-style: italic;
  background-color: #f9e01d;
  border: 0px;
  outline: none;
`;

const PokeName = styled.p`
  height: 40px;
  color: #306ab5;
  text-transform: uppercase;
  font-family: sans-serif;
  line-height: 40px;
  font-size: 40px;
  font-weight: 900;
  font-style: italic;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const PokeNameMobile = styled(PokeName)`
  display: none;
  text-align: center;
  margin-top: 25px;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

class Pokemon extends Component {
  state = {
    id: '',
    name: '',
    type: '',
    gender: 1,
    region: '',
    presenceWild: '',
    capturePossibility: 1,
    difficultyCatching: 1,
    presenceShiny: '',
    addedBy: 1,

    stats: { attack: '1', defence: '1', spattack: '1', spdefence: '1', hp: '1' },
  };

  componentDidMount() {
    this.FetchStats();
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname },
    } = this.props;
    if (prevProps.location.pathname !== pathname) {
      this.FetchStats();
    }
  }

  addZerosToNumber = (number) => {
    if (number < 10) return `00${number}`;
    if (number < 100 && number > 9) return `0${number}`;
    return number;
  };

  FetchStats() {
    const {
      match: {
        params: { pokemon },
      },
    } = this.props;
    const id = pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        const {
          species: { name },
        } = data;
        const named = name;
        const stats = {};
        data.stats.forEach((el) => {
          if (el.stat.name === 'speed') return;
          if (el.stat.name === 'special-defense') {
            stats['spdef'] = `${el.base_stat}`;
          } else if (el.stat.name === 'special-attack') {
            stats['spatt'] = `${el.base_stat}`;
          } else stats[el.stat.name] = `${el.base_stat}`;
        });

        const type = [];
        data.types.forEach((el) => type.push(`${el.type.name}`));
        this.setState({ stats, name: named, id, type });

        return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
      })
      .then((response) => response.json())
      .then((data) => {
        const gender = +data.gender_rate;
        const region = data.pokedex_numbers[1].pokedex.name;
        const presenceWild = data.habitat.name;
        const capturePossibility = +data.capture_rate;
        const difficultyCatching = +data.capture_rate;
        const presenceShiny = data.habitat.name;
        const addedBy = +data.capture_rate;

        this.setState({
          gender,
          region,
          presenceWild,
          capturePossibility,
          difficultyCatching,
          presenceShiny,
          addedBy,
        });
      })

      .catch((err) => console.log(err));
  }

  render() {
    const {
      stats,
      id,
      name,
      type,
      gender,
      region,
      presenceWild,
      capturePossibility,
      difficultyCatching,
      presenceShiny,
      addedBy,
    } = this.state;

    return (
      <Wrapper>
        <LogoImage src={Logo} alt="pokemon logo" />
        <PokeNameMobile>{`${this.addZerosToNumber(id)} ${name}`}</PokeNameMobile>
        <Container>
          <StatsTable stats={stats} />
          {id ? (
            <PokeImage
              src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
              alt={`pokemon `}
            />
          ) : null}
          <PokemonData
            name={name}
            type={type}
            gender={gender}
            region={region}
            presenceWild={presenceWild}
            capturePossibility={capturePossibility}
            difficultyCatching={difficultyCatching}
            presenceShiny={presenceShiny}
            addedBy={addedBy}
          />
        </Container>

        <LowerContainer>
          <PageButton
            type="button"
            onClick={() => {
              const { history } = this.props;
              const { identifier = id } = this.state;
              history.push(`/${identifier < 10 ? '1' : `${Math.floor(identifier / 10 + 1)}`}`);
            }}
          >
            {'< powrót'}
          </PageButton>
          <PokeName>{`${this.addZerosToNumber(id)} ${name}`}</PokeName>
          <PageButton
            type="button"
            onClick={() => {
              const { history } = this.props;
              history.push(`/pokemon/${+id + 1}`);
            }}
          >
            {'następny >'}
          </PageButton>
        </LowerContainer>
      </Wrapper>
    );
  }
}

Pokemon.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      pokemon: PropTypes.string.isRequired,
    }),
  }),
};

Pokemon.defaultProps = {
  location: {
    pathname: '',
  },

  match: {
    params: {
      pokemon: '',
    },
  },
};

export default Pokemon;
