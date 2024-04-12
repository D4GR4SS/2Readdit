import React from 'react';
import { Box, Typography } from '@mui/material';

const Error = () => {
  return (
    <Box
      className='error-page'
      sx={{
        textAlign: 'center',
        padding: '50px',
        backgroundColor: 'lightblue',
      }}
    >
      <Typography variant='h4' component='h1'>
        404 - Not Found
      </Typography>
      <Typography variant='h4' component='h1' sx={{ marginTop: '40px' }}>
        Oops! An Error Has Occurred.
      </Typography>
    </Box>
  );
};

export default Error;
