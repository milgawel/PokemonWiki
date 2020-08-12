import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import Main from 'views/Main';

const Root = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/1" />} />
        {/* <Route path="/1" component={Main} /> */}
        <Route path="/:page" component={Main} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
