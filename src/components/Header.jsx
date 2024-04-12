import React from 'react';
import logo from '../assets/reddit.svg';
import SelectForm from './SelectForm';

const Header = ({ formData }) => {
  return (
    <header id='header'>
      <img src={logo} alt='reddit logo' />
      <SelectForm formData={formData} />
    </header>
  );
};

export default Header;
