import React from 'react';
import { Box } from '@mui/material';

import { Board } from '../modules/game';

const Play = () => {
  return (
    <Box
      sx={{
        padding: '5%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Board />
    </Box>
  )
}

export default Play
