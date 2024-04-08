import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <ul id='post-list'>
      {posts.map((post) => (
        <Post key={post.data.id} data={post.data} kind={post.kind} />
      ))}
    </ul>
  );
};

export default PostList;
