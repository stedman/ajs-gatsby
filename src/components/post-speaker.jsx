import React from 'react';
import SocialLinks from './post-social-links';

const PostSpeaker = ({ speaker }) => (
  <div className="card">
    <h2 className="is-sr-only">Speaker</h2>
    {speaker.picUrl
      && (
        <div className="card-image is-padded">
          <figure className="image is-128x128">
            <img src={speaker.picUrl} alt={speaker.name} />
          </figure>
        </div>
      )}
    <div className="card-content">
      <div className="media-content">
        <div className="level is-marginless">
          <div className="level-left">
            <p className="title is-size-5">{speaker.name}</p>
          </div>
          <div className="level-right">
            <SocialLinks social={speaker} />
          </div>
        </div>
        <p className="subtitle is-6 has-text-weight-semibold">{speaker.title}</p>
        {speaker.bio
          && (
            <div
              className="content has-offset-top has-border-top"
              dangerouslySetInnerHTML={{ __html: speaker.bio }}
            />
          )}
      </div>
    </div>
  </div>
);

export default PostSpeaker;
