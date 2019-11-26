import React from 'react';

import { Spinner } from './styles';

import loadingIcon from '../../assets/images/loading.svg';

export default function Loading() {
  return <Spinner src={loadingIcon} alt="Carregando..." />;
}
