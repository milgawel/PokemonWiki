import React, { Component } from 'react';
import styled from 'styled-components';
import image from 'assets/image.png';
import PokeList from 'components/molecules/PokeList';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid red;
  display: flex;
`;

const Image = styled.img`
  width: 50%;
`;

class App extends Component {
  state = {
    pokemons: ['pikachu', 'bulbasaur'],
    offset: 0,
  };

  render() {
    const { pokemons, offset } = this.state;
    return (
      <Wrapper>
        <Image src={image} alt="pokemons" />
        <PokeList pokemons={pokemons} />
      </Wrapper>
    );
  }
}

export default App;
