import React from 'react';
import ExternalLink from './external-link';
import Data from '../content/data.yaml';

const PostSponsor = ({ sponsor }) => {
  // TODO: what if there is no sponsor.id? Defaults?
  const biz = Data.org[`${sponsor.id}`];

  return (
    <div className="tile">
      <div className="tile is-child content">
        <h3>Sponsor</h3>
        <p>Drinks and pizza for this event will be provided by the wonderful folks at <ExternalLink href={biz.url}>{biz.name}</ExternalLink>.</p>
        {sponsor.hiring
          && (
            <p>
              {biz.name} is hiring. Check out their <ExternalLink href={biz.careerUrl}>Career page</ExternalLink> for more information.
            </p>
          )}
      </div>
    </div>
  );
};

export default PostSponsor;
