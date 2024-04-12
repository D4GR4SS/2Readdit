import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import PostTitle from './PostTitle';
import { useNavigate, useLocation } from 'react-router-dom';

const Post = ({ data, kind, replies }) => {
  const children = replies?.data?.children || [];

  const {
    title,
    author,
    selftext,
    body,
    score,
    num_comments,
    is_video,
    url_overridden_by_dest,
    permalink,
  } = data;

  const navigate = useNavigate();
  const location = useLocation();

  const onClick = (URI) => {
    const pathname = URI.slice(0, -1);
    if (pathname !== location.pathname) {
      navigate(pathname);
    }
  };

  return (
    <li className='post' onClick={() => onClick(permalink)}>
      <Card variant='elevation' elevation={4}>
        <CardHeader
          title={
            <PostTitle title={title} score={score} numComments={num_comments} />
          }
          subheader={`Posted by: ${author}`}
          sx={{ bgcolor: 'lightblue' }}
        ></CardHeader>
        <CardContent>
          {kind === 't3' ? (
            <Typography variant='body1'>{selftext.slice(0, 400)}</Typography>
          ) : (
            <Typography variant='body1'>{body}</Typography>
          )}
          {is_video ? (
            <video width='400' controls>
              <source src={data.media.reddit_video.scrubber_media_url} />
            </video>
          ) : (
            <a target='_blank' rel='noreferrer' href={url_overridden_by_dest}>
              {url_overridden_by_dest}
            </a>
          )}
        </CardContent>
      </Card>
      <ul id='reply-list'>
        {children.map((post) => (
          <Post
            key={post.data.id}
            data={post.data}
            kind={post.kind}
            replies={post.kind === 't1' ? post.data.replies : null}
          />
        ))}
      </ul>
    </li>
  );
};

export default Post;
