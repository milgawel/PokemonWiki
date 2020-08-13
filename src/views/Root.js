import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import MainView from 'views/MainView';
import PokemonView from 'views/PokemonView';

const Root = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/1" />} />
        <Route path="/pokemon/:pokemon" component={PokemonView} />
        <Route path="/:page" component={MainView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
