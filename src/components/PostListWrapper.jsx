import PostList from './PostList';
import { useGetDataQuery } from '../api/apiSlice';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const PostListWrapper = ({ userInput }) => {
  const { endpoint } = useParams();

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDataQuery(endpoint);

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
    content = <h2>{error.status}</h2>;
    console.log(error);
  } else if (!posts) {
    content = <h2>DATA_ERROR: undefined</h2>;
  } else if (isSuccess) {
    content = <PostList posts={posts} />;
  }

  return content;
};

export default PostListWrapper;
