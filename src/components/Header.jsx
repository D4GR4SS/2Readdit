// Header.jsx

import React, { useState } from 'react';
import logo from '../assets/reddit.svg';
import SelectForm from './SelectForm';
import { useGetTopSubredditsQuery } from '../api/apiSlice';

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <header id='header'>
      <img height='40px' width='40px' src={logo} alt='reddit logo' />
      {formData.length > 0 && <SelectForm formData={formData} />}
    </header>
  );
};

export default Header;
