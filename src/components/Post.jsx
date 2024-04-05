import React from 'react';

const Post = ({ data }) => {
  const { title, author, selftext, score, url_overridden_by_dest } = data;

  const onClick = (url) => {
    console.log('User clicked:', url);
  };

  return (
    <li className='post' onClick={() => onClick(data.url)}>
      <h4>Posted by: {author}</h4>
      <h2>{title}</h2>
      <p>{selftext.slice(0, 400)}</p>
      {data.is_video ? (
        <video width='400' controls>
          <source src={data.media.reddit_video.scrubber_media_url} />
        </video>
      ) : (
        <a>{url_overridden_by_dest}</a>
      )}
      <h4>Score: {score}</h4>
    </li>
  );
};

export default Post;

// TODO: Cercare un modo migliore per il link media data.media.reddit_video.scrubber_media_url
