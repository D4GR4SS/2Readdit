import { useGetPostDataQuery } from '../api/apiSlice';
import { useParams } from 'react-router-dom';
import Post from './Post';

const PostDetail = () => {
  const { sub, path, endpoint } = useParams();

  const URI = `${sub}/comments/${path}/${endpoint}`;
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostDataQuery(URI);

  let content;
  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (isError) {
    content = <h2>{error.status}</h2>;
    console.log(error);
  } else if (!posts) {
    content = <h2>DATA_ERROR: undefined</h2>;
  } else if (isSuccess) {
    content = (
      <ul id='post-list'>
        {posts.map((post) => (
          <Post
            key={post.data.id}
            data={post.data}
            kind={post.kind}
            replies={post.kind === 't1' ? post.data.replies : null}
          />
        ))}
      </ul>
    );
  }

  return content;
};

export default PostDetail;
