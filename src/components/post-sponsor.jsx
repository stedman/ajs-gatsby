import React from 'react';
import ExternalLink from './external-link';

const PostSponsor = ({ sponsor }) => (
  <div className="tile">
    <div className="tile is-child content">
      <h3>Sponsor</h3>
      <p>Drinks and pizza for this event will be provided by the wonderful folks at <ExternalLink href={sponsor.url}>{sponsor.name}</ExternalLink>.</p>
      {sponsor.careerUrl
        && (
          <p>
            {sponsor.name} is hiring. Check out their <ExternalLink href={sponsor.careerUrl}>Career page</ExternalLink> for more information.
          </p>
        )}
    </div>
  </div>
);

export default PostSponsor;
