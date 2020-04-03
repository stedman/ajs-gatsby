import React from 'react';

const PostSponsor = ({ sponsor }) => (
  <div className="tile">
    <div className="tile is-child">
      <h3 className="post-sponsor-title">Sponsor</h3>
      <div className="post-sponsor-name">Drinks and pizza for this event will be provided by the wonderful folks at <a href={sponsor.url} target="_blank" rel="no-follow">{sponsor.name}</a>.</div>
      {sponsor.careerUrl
        && (
          <div className="post-sponsor-career-url">
            {sponsor.name} is hiring. Check out their <a href={sponsor.careerUrl} target="_blank" rel="no-follow">Career page</a> for more information.
          </div>
        )}
    </div>
  </div>
);

export default PostSponsor;
