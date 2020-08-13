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
`;

const PokeImage = styled.img`
  width: 33%;
  border: 2px solid red;
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
  };

  componentDidMount() {
    this.InitiateFunction();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.InitiateFunction();
    }
  }

  addZerosToNumber = (number) => {
    if (number < 10) return `00${number}`;
    if (number < 100 && number > 9) return `0${number}`;
    return number;
  };

  InitiateFunction() {
    console.log(this.props);
    const id = this.props.match.params.pokemon;
    this.setState({
      id,
    });
  }

  render() {
    return (
      <Wrapper>
        <LogoImage src={Logo} alt="pokemon logo" />
        <Container>
          <StatsTable />
          <PokeImage
            src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`}
            alt={`pokemon `}
          />
          <PokemonData />
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
          <PokeName>{`${this.addZerosToNumber(this.state.id)} BULBASAUR`}</PokeName>
          <PageButton
            type="button"
            onClick={() => {
              console.log('clicked');
              console.log(this.props);
              this.props.history.push(`/pokemon/${+this.state.id + 1}`);
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
