import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistDetails from './playlistDetail';
import error from './error';
import player from './player';

export default combineReducers({
  playlists,
  playlistDetails,
  error,
  player,
});
