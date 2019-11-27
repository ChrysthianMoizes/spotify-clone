import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

import closeIcon from '../../assets/images/close.svg';

import { Container } from './styles';

export default function Error() {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  function closeError() {
    dispatch(ErrorActions.hideError());
  }

  return (
    error.visible && (
      <Container>
        <p>{error.message}</p>
        <button onClick={closeError}>
          <img src={closeIcon} alt="Fechar" />
        </button>
      </Container>
    )
  );
}
