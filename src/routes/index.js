import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Browser from '../pages/Browser';
import Playlist from '../pages/Playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browser} />
    <Route path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default Routes;
