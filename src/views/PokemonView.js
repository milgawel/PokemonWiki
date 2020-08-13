import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.png';
import StatsTable from 'components/molecules/StatsTable';
import PokemonData from 'components/molecules/PokemonData';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const LogoImage = styled.img`
  margin: 0 auto;
  height: 100px;
  display: block;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PokeImage = styled.img`
  width: 40%;
`;

const LowerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const PageButton = styled.button`
  text-align: center;
  height: 40px;
  min-width: 120px;
  color: #306ab5;
  text-transform: uppercase;
  font-family: sans-serif;
  line-height: 40px;
  font-size: 16px;
  font-weight: 900;
  font-style: italic;
  background-color: #f9e01d;
  border: 0px;
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
`;

class Pokemon extends Component {
  state = {
    id: '',
    name: '',
    type: '',
    gender: '',
    region: '',
    presenceWild: '',
    capturePossibility: '',
    difficultyCatching: '',
    presenceShiny: '',
    addedBy: '',

    stats: { attack: '1', defence: '1', spattack: '1', spdefence: '1', hp: '1' },
  };

  componentDidMount() {
    this.FetchStats();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.FetchStats();
    }
  }

  addZerosToNumber = (number) => {
    if (number < 10) return `00${number}`;
    if (number < 100 && number > 9) return `0${number}`;
    return number;
  };

  FetchStats() {
    const id = this.props.match.params.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const name = data.species.name;
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
        this.setState({ stats, name, id, type });

        return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
      })
      .then((response) => response.json())
      .then((data) => {
        let gender = data.gender_rate;
        let region = data.pokedex_numbers[1].pokedex.name;
        let presenceWild = data.habitat.name;
        let capturePossibility = data.capture_rate;
        let difficultyCatching = data.capture_rate;
        let presenceShiny = data.habitat.name;
        let addedBy = data.capture_rate;
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
        <Container>
          <StatsTable stats={stats} />
          <PokeImage
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt={`pokemon `}
          />
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
            onClick={() =>
              this.props.history.push(
                `/${this.state.id < 10 ? '1' : `${Math.floor(this.state.id / 10 + 1)}`}`,
              )
            }
          >
            {'< powrót'}
          </PageButton>
          <PokeName>{`${this.addZerosToNumber(id)} ${name}`}</PokeName>
          <PageButton
            type="button"
            onClick={() => {
              console.log('clicked');
              console.log(this.props);
              this.props.history.push(`/pokemon/${+id + 1}`);
            }}
          >
            {'następny >'}
          </PageButton>
        </LowerContainer>
      </Wrapper>
    );
  }
}

export default Pokemon;
