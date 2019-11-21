import React from 'react';

import { Container, Header, SongList } from './styles';

import clockIcon from '../../assets/images/clock.svg';
import plusIcon from '../../assets/images/plus.svg';

export default function Playlist() {
  return (
    <Container>
      <Header>
        <img
          src="https://sistemasertanejo.com/wp-content/uploads/2019/09/quem-traiu-500x500.jpg"
          alt="Playlist"
        />

        <div>
          <span>PLAYLIST</span>
          <h1>Esquenta Sertanejo</h1>
          <p>17 músicas</p>

          <button>PLAY</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Álbumn</th>
          <th>
            <img src={clockIcon} alt="Duração" />
          </th>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={plusIcon} alt="Adicionar" />
            </td>
            <td>Quem Traiu Levou</td>
            <td>Gusttavo Lima</td>
            <td>O Embaixador in Cariri</td>
            <td>4:24</td>
          </tr>
          <tr>
            <td>
              <img src={plusIcon} alt="Adicionar" />
            </td>
            <td>Quem Traiu Levou</td>
            <td>Gusttavo Lima</td>
            <td>O Embaixador in Cariri</td>
            <td>4:24</td>
          </tr>
          <tr>
            <td>
              <img src={plusIcon} alt="Adicionar" />
            </td>
            <td>Quem Traiu Levou</td>
            <td>Gusttavo Lima</td>
            <td>O Embaixador in Cariri</td>
            <td>4:24</td>
          </tr>
          <tr>
            <td>
              <img src={plusIcon} alt="Adicionar" />
            </td>
            <td>Quem Traiu Levou</td>
            <td>Gusttavo Lima</td>
            <td>O Embaixador in Cariri</td>
            <td>4:24</td>
          </tr>
          <tr>
            <td>
              <img src={plusIcon} alt="Adicionar" />
            </td>
            <td>Quem Traiu Levou</td>
            <td>Gusttavo Lima</td>
            <td>O Embaixador in Cariri</td>
            <td>4:24</td>
          </tr>
          <tr>
            <td>
              <img src={plusIcon} alt="Adicionar" />
            </td>
            <td>Quem Traiu Levou</td>
            <td>Gusttavo Lima</td>
            <td>O Embaixador in Cariri</td>
            <td>4:24</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
}
