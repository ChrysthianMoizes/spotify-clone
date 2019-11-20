import React from 'react';

import { Container, Search, User } from './styles';

export default function Header() {
  return (
    <Container>
      <Search>
        <input placeholder="Buscar" />
      </Search>

      <User>
        <img
          src="https://avatars3.githubusercontent.com/u/26602166?v=4"
          alt="Usuário"
        />
      </User>
    </Container>
  );
}
