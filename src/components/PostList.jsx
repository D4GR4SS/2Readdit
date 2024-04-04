import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => (
  <ol>
    {posts.map((post) => (
      <Post key={post.data.id} data={post.data} />
    ))}
  </ol>
);

export default PostList;
