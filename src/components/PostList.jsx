import { useState, useRef } from 'react';
import Post from './Post';
import PostDetail from './PostDetail';

const PostList = ({ posts }) => {
  const [showSummary, setShowSummary] = useState(true);

  const endpoint = useRef(null);

  const toggleState = (userInput) => {
    if (showSummary) {
      endpoint.current = userInput.slice(23, -1);
      setShowSummary(false);
    } else {
      endpoint.current = null;
      setShowSummary(true);
    }
  };

  if (showSummary) {
    return (
      <ul id='post-list'>
        {posts.map((post) => (
          <Post key={post.data.id} data={post.data} onClick={toggleState} />
        ))}
      </ul>
    );
  } else {
    return (
      <div id='post-details' onClick={toggleState}>
        <PostDetail endpoint={endpoint.current} />
      </div>
    );
  }
};

export default PostList;
