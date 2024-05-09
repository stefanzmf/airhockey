import React from 'react';

import { Stack, TextField, Button } from '@mui/material';

const Join = () => {
  return (
    <Stack sx={{ flex: '0 0 60%' }} spacing={3}>
      <TextField variant="standard" size="small" required label="Username" name="username" />
      <TextField variant="standard" size="small" required label="E-Mail" name="email" />

      <Button variant="contained">Join</Button>
    </Stack>
  )
}

export default Join
