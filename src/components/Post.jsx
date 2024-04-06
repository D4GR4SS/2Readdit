import { Card, CardContent, CardHeader } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const PostTitle = ({ title, score, num_comments }) => (
  <div className='post-title'>
    <div className='icons'>
      <span className='icon'>
        <FavoriteIcon color={'secondary'} />
        {score}
      </span>
      <span className='icon'>
        <CommentIcon />
        {num_comments}
      </span>
    </div>
    {title}
  </div>
);

const Post = ({ data, kind, onClick }) => {
  const {
    title,
    author,
    selftext,
    body,
    score,
    num_comments,
    url_overridden_by_dest,
  } = data;

  return (
    <li className='post' onClick={() => onClick(data.url)}>
      <Card variant='elevation' elevation={4} sx={{ margin: '1.15em 4.5em' }}>
        <CardHeader
          title={
            <PostTitle
              title={title}
              score={score}
              num_comments={num_comments}
            />
          }
          subheader={`Posted by: ${author}`}
          sx={{ bgcolor: 'lightblue' }}
        ></CardHeader>
        <CardContent>
          {kind === 't3' ? <p>{selftext.slice(0, 400)}</p> : <p>{body}</p>}
          {data.is_video ? (
            <video width='400' controls>
              <source src={data.media.reddit_video.scrubber_media_url} />
            </video>
          ) : (
            <a>{url_overridden_by_dest}</a>
          )}
        </CardContent>
      </Card>
    </li>
  );
};

export default Post;

// TODO: Cercare un modo migliore per il link media data.media.reddit_video.scrubber_media_url
// TODO: Creare un componente separato per il PostTitle
