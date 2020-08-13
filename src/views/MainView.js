import React, { Component } from 'react';
import styled from 'styled-components';
import image from 'assets/image.png';
import PokeList from 'components/molecules/PokeList';
import MainTemplate from 'templates/MainTemplate';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Image = styled.img`
  position: relative;
  width: 48%;
  height: auto;
  margin-right: 1%;
  object-fit: contain;
  top: 10px;
  padding: 5px;
`;

class App extends Component {
  state = {
    pokemons: [],
    offset: 0,
  };

  componentDidMount() {
    this.InitiateFunction();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.InitiateFunction();
    }
  }

  translateType = (type) => {
    switch (type) {
      case 'grass':
        return 'trawiasty';

      case 'fire':
        return 'ognisty';

      case 'water':
        return 'wodny';

      case 'bug':
        return 'robaczy';
      case 'ice':
        return 'lodowy';
      case 'normal':
        return 'normalny';
      case 'electric':
        return 'elektryczny';
      case 'poison':
        return 'trujący';
      case 'ghost':
        return 'duch';
      case 'ground':
        return 'ziemny';
      case 'rock':
        return 'kamienny';
      case 'psychic':
        return 'psychiczny';
      case 'flying':
        return 'latający';
      case 'fighting':
        return 'walczący';
      case 'fairy':
        return 'bajkowy';
      case 'dragon':
        return 'smoczy';
      case 'steel':
        return 'stalowy';
      case 'dark':
        return 'mroczny';
      default:
        return type;
    }
  };

  addZerosToNumber = (number) => {
    if (number < 10) return `00${number}`;
    if (number < 100 && number > 9) return `0${number}`;
    return number;
  };

  // get data about pokemons
  fetchPokemons = () => {
    const { offset } = this.state;
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${10}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        const pokemons = [];
        // get infos about single specific pokemon
        data.results.forEach((pokemon) => {
          let key = '';
          let id = '';
          let name = '';
          let minLvl = '';
          let type = '';
          let evolution = '';

          fetch(pokemon.url)
            .then((response) => response.json())
            .then((newData) => {
              key = newData.id;
              id = newData.id;
              name = newData.name;
              type = newData.types[0].type.name;
              return fetch(newData.species.url);
            })
            .then((response) => response.json())
            .then((newData) => {
              return fetch(newData.evolution_chain.url);
            })
            .then((response) => response.json())
            .then((newData) => {
              if (newData.chain.species.name === name) {
                console.log(`[first]`);
                console.log(name);
                console.log(`[test]`);

                if (newData.chain.evolves_to[0]) {
                  evolution = newData.chain.evolves_to[0].species.name;
                  minLvl = '1';
                } else if (newData.chain.evolution_details.length === 0) {
                  evolution = '';
                  minLvl = '1';
                } else {
                  minLvl = newData.chain.evolves_to[0].evolution_details[0].min_level;
                }
                if (minLvl === null) minLvl = '1';
              } else if (newData.chain.evolves_to[0].species.name === name) {
                console.log(`[second]`);
                if (newData.chain.evolves_to[0].evolves_to[0]) {
                  evolution = newData.chain.evolves_to[0].evolves_to[0].species.name;
                  minLvl = newData.chain.evolves_to[0].evolution_details[0].min_level;
                } else {
                  minLvl = newData.chain.evolves_to[0].evolution_details[0].min_level;
                }
                if (minLvl === null) minLvl = '1';
              } else {
                console.log(`[third]`);

                evolution = '';
                if (newData.chain.evolves_to[1]) {
                  minLvl = newData.chain.evolves_to[1].evolution_details[0].min_level;
                } else
                  minLvl = newData.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level;

                if (minLvl === null) minLvl = '1';
              }

              type = this.translateType(type);

              id = this.addZerosToNumber(id);
              minLvl = this.addZerosToNumber(minLvl);
              pokemons.push({
                key,
                id,
                name,
                type,
                minLvl,
                evolution,
              });

              pokemons.sort(function (a, b) {
                return a.id - b.id;
              });
              this.setState({
                pokemons,
              });
            })

            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  };

  InitiateFunction() {
    console.log(this.props);
    const offset = `${this.props.location.pathname.substr(1)}0` - 10;

    this.setState(
      {
        offset,
      },
      () => {
        this.fetchPokemons();
      },
    );
  }

  render() {
    const { pokemons } = this.state;
    return (
      <MainTemplate>
        <Wrapper>
          <Image src={image} alt="pokemons" />
          <PokeList pokemons={pokemons} />
        </Wrapper>
      </MainTemplate>
    );
  }
}

export default App;
