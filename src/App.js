import React from 'react';
import './config/reactotron';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';

import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import Error from './components/Error';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <GlobalStyle />
          <Container>
            <Sidebar />
            <Content>
              <Error />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
