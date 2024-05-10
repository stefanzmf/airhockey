import React from 'react';
import { Box, Container } from '@mui/material';

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
      <Box sx={{ flex: '0 0 40%' }}>
        <Join />
      </Box>
    </Container>
  )
}

export default JoinPage
