import React from 'react';
import { Container } from '@mui/material';

import Join from '../modules/join'

const JoinPage = () => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Join />
    </Container>
  )
}

export default JoinPage
