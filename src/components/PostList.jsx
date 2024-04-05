import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <Post key={post.data.id} data={post.data} />
    ))}
  </ul>
);

export default PostList;
