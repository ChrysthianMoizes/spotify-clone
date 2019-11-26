import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';

import Loading from '../Loading';

import addPlaylistIcon from '../../assets/images/add_playlist.svg';

export default function Sidebar() {
  const playlists = useSelector((state) => state.playlists.data);
  const loading = useSelector((state) => state.playlists.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PlaylistsActions.getPlaylistsRequest());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <Link to="/">Navegar</Link>
          </li>
          <li>
            <a href="">Rádio</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>SUA BIBLIOTECA</span>
          </li>
          <li>
            <a href="">Seu Daily Mix</a>
          </li>
          <li>
            <a href="">Tocadas Recentemente</a>
          </li>
          <li>
            <a href="">Músicas</a>
          </li>
          <li>
            <a href="">Álbums</a>
          </li>
          <li>
            <a href="">Artistas</a>
          </li>
          <li>
            <a href="">Estações</a>
          </li>
          <li>
            <a href="">Arquivos locais</a>
          </li>
          <li>
            <a href="">Vídeos</a>
          </li>
          <li>
            <a href="">Poadcasts</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>PLAYLISTS</span>
            {loading && <Loading />}
          </li>

          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
            </li>
          ))}
        </Nav>
      </div>
      <NewPlaylist>
        <img src={addPlaylistIcon} alt="Adicionar Playlist" />
        Nova Playlist
      </NewPlaylist>
    </Container>
  );
}
