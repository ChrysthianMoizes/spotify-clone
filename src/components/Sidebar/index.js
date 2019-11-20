import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import addPlaylistIcon from '../../assets/images/add_playlist.svg';

export default function Sidebar() {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <a href="">Navegar</a>
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
          </li>
          <li>
            <a href="">Top Sertanejo</a>
          </li>
        </Nav>
      </div>
      <NewPlaylist>
        <img src={addPlaylistIcon} alt="Adicionar Playlist" />
        Nova Playlist
      </NewPlaylist>
    </Container>
  );
}
