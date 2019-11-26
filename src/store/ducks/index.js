import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistDetails from './playlistDetail';

export default combineReducers({
  playlists,
  playlistDetails,
});
