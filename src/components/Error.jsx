import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/reddit.svg';

const Error = () => {
  return (
    <Box
      className='error-page'
      sx={{
        textAlign: 'center',
        minHeight: '100vh',
        padding: '50px',
        color: 'var(--seasalt)',
        backgroundColor: 'var(--blue)',
      }}
    >
      <Typography variant='h2' component='h1' sx={{ marginBottom: '40px' }}>
        404 - Not Found
      </Typography>
      <Link to='/'>
        <img height='340px' width='340px' src={logo} alt='reddit logo' />
      </Link>
      <Typography variant='h2' component='h1' sx={{ marginTop: '40px' }}>
        Oops! An Error Has Occurred.
      </Typography>
    </Box>
  );
};

export default Error;
