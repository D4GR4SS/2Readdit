import React, { useState } from 'react';
import logo from '../assets/reddit.svg';
import SelectForm from './SelectForm';
import { useGetTopSubredditsQuery } from '../api/apiSlice';
import { Skeleton, Typography } from '@mui/material';

const Header = () => {
  const [formData, setFormData] = useState([]);
  const {
    data: topSubreddits = [],
    isLoading,
    error,
  } = useGetTopSubredditsQuery();

  React.useEffect(() => {
    if (topSubreddits.length > 0) {
      const formattedTopSubreddits = topSubreddits.map(
        (subreddit) => `r/${subreddit}`
      );
      setFormData(formattedTopSubreddits);
    }
  }, [topSubreddits]);

  if (isLoading) {
    return (
      <header id='header'>
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='text' width={200} />
        <Skeleton variant='rectangular' width={150} height={40} />
      </header>
    );
  }

  if (error) {
    return (
      <header id='header'>
        <Typography variant='h6' color='error'>
          Error: {error.message}
        </Typography>
      </header>
    );
  }

  return (
    <header id='header'>
      <img height='40px' width='40px' src={logo} alt='reddit logo' />
      {formData.length > 0 && <SelectForm formData={formData} />}
    </header>
  );
};

export default Header;
