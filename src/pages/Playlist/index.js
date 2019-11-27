import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
 Container, Header, SongList, SongItem 
} from './styles';

import Loading from '../../components/Loading';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetail';
import { Creators as PlayerActions } from '../../store/ducks/player';

import clockIcon from '../../assets/images/clock.svg';
import plusIcon from '../../assets/images/plus.svg';

export default function Playlist({ match }) {
  const playlist = useSelector((state) => state.playlistDetails.data);
  const player = useSelector((state) => state.player);
  const loading = useSelector((state) => state.playlistDetails.loading);
  const dispatch = useDispatch();

  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    function loadPlaylistDetails() {
      const { id } = match.params;

      dispatch(PlaylistDetailsActions.getPlaylistDetailsRequest(id));
    }

    loadPlaylistDetails();
  }, [dispatch, match.params]);

  function loadSong(song, songs) {
    dispatch(PlayerActions.loadSong(song, songs));
  }

  function renderDetails() {
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

            <button>PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th> </th>
            <th>Título</th>
            <th>Artista</th>
            <th>Álbumn</th>
            <th>
              <img src={clockIcon} alt="Duração" />
            </th>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map((song) => (
                <SongItem
                  key={song.id}
                  onClick={() => setSelectedSong(song.id)}
                  onDoubleClick={() => loadSong(song, playlist.songs)}
                  selected={selectedSong === song.id}
                  playing={player.current && player.current.id === song.id}
                >
                  <td>
                    <img src={plusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>4:24</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  }

  return loading ? (
    <Container loading>
      <Loading />
    </Container>
  ) : (
    renderDetails()
  );
}
