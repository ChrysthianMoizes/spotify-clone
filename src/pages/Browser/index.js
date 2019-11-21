import React from 'react';

import {
 Container, Title, List, Playlist 
} from './styles';

export default function Browser() {
  return (
    <Container>
      <Title>Navegar</Title>

      <List>
        <Playlist to="/playlists/1">
          <img
            src="https://sistemasertanejo.com/wp-content/uploads/2019/09/quem-traiu-500x500.jpg"
            alt="Playlist"
          />

          <strong>Sertanejo Universitário</strong>
          <p>Ouça o mais novo sucesso do Embaixador. Fala comigo BB!</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://sistemasertanejo.com/wp-content/uploads/2019/09/quem-traiu-500x500.jpg"
            alt="Playlist"
          />

          <strong>Sertanejo Universitário</strong>
          <p>Ouça o mais novo sucesso do Embaixador. Fala comigo BB!</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://sistemasertanejo.com/wp-content/uploads/2019/09/quem-traiu-500x500.jpg"
            alt="Playlist"
          />

          <strong>Sertanejo Universitário</strong>
          <p>Ouça o mais novo sucesso do Embaixador. Fala comigo BB!</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://sistemasertanejo.com/wp-content/uploads/2019/09/quem-traiu-500x500.jpg"
            alt="Playlist"
          />

          <strong>Sertanejo Universitário</strong>
          <p>Ouça o mais novo sucesso do Embaixador. Fala comigo BB!</p>
        </Playlist>
      </List>
    </Container>
  );
}
