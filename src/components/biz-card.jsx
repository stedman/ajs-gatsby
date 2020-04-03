import React from 'react';
import SocialLinks from './social-links';

const BizCard = ({ person }) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-96x96 has-background-grey-lighter">
            <img src={person.picUrl} alt={person.name} />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-size-5">{person.name}</p>
          <p className="subtitle is-6 has-text-weight-semibold is-marginless-bottom">{person.title}</p>
          <div>
            <SocialLinks social={person} />
          </div>
        </div>
      </div>
    </div>
    {person.bio
      && (
        <div className="card-footer">
          <div className="card-footer-item">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: person.bio }}
            />
          </div>
        </div>
      )}
  </div>
);

export default BizCard;
