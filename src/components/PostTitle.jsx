import React from 'react';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const PostTitle = ({ title, score, numComments }) => (
  <div className='post-title'>
    <div className='icons'>
      <span className='icon'>
        <FavoriteIcon color={'secondary'} />
        {score}
      </span>
      <span className='icon'>
        <CommentIcon />
        {numComments}
      </span>
    </div>
    <Typography variant='h5'>{title}</Typography>
  </div>
);

export default PostTitle;
