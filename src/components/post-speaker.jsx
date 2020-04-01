import React from 'react';
import ExternalLink from './external-link';
import SpeakerPic from './post-speaker-pic';
import SocialLinks from './post-social-links';

const PostSpeaker = ({ speaker }) => (
  <div className="post-speaker">
    <h3 className="post-speaker-name">{speaker.name}</h3>
    {speaker.picUrl
      && (
        <SpeakerPic
          src={speaker.picUrl}
          alt={speaker.name}
        />
      )}
    {speaker.url
      && (
        <div className="post-speaker-url">
          <ExternalLink href={speaker.url}>
            {speaker.name}'s homepage
          </ExternalLink>
        </div>
      )}
    <SocialLinks social={speaker} />
    <div className="post-speaker-bio" dangerouslySetInnerHTML={{ __html: speaker.bio }} />
  </div>
);

export default PostSpeaker;
