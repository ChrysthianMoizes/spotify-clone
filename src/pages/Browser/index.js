import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import {
 Container, Title, List, Playlist 
} from './styles';

export default function Browser() {
  const playlists = useSelector((state) => state.playlists.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PlaylistsActions.getPlaylistsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Title>Navegar</Title>

      <List>
        {playlists.map((playlist) => (
          <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
            <img src={playlist.thumbnail} alt={playlist.title} />

            <strong>{playlist.title}</strong>
            <p>{playlist.description}</p>
          </Playlist>
        ))}
      </List>
    </Container>
  );
}
