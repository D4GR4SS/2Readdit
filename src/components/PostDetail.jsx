import { useGetPostDataQuery } from '../api/apiSlice';
import { useParams } from 'react-router-dom';
import { Skeleton, Typography } from '@mui/material';
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
    content = (
      <div style={{ margin: '20px', padding: '20px' }}>
        <Skeleton variant='text' width={200} height={40} />
        <Skeleton variant='rectangular' width={'100%'} height={200} />
        <Skeleton variant='text' width={200} height={40} />
        <Skeleton variant='rectangular' width={'100%'} height={200} />
      </div>
    );
  } else if (isError) {
    content = <Typography variant='h6'>Error: {error.message}</Typography>;
    console.log(error);
  } else if (!posts) {
    content = <Typography variant='h6'>DATA_ERROR: undefined</Typography>;
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
