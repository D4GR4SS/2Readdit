import React from 'react';

const Error = () => {
  return (
    <div
      className='error-page'
      style={{
        textAlign: 'center',
        padding: '50px',
        backgroundColor: 'lightblue',
      }}
    >
      {/* <img src="/sadface.jpeg" width="500px" alt="sad-face" /> */}
      <h1 style={{ marginTop: '40px' }}>Oops! An Error Has Occurred.</h1>
    </div>
  );
};

export default Error;
