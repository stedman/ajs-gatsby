import React from 'react';

const PostSponsor = ({ sponsor }) => (
  <div className="post-sponsor">
    <h3 className="post-sponsor-title">Sponsor</h3>
    <div className="post-sponsor-name">Brought to you by the wonderful folks at <a href={sponsor.url} target="_blank" rel="no-follow">{sponsor.name}</a>.</div>
    {sponsor.careerUrl
      && (
        <div className="post-sponsor-career-url">
          {sponsor.name} is hiring. Check out their <a href={sponsor.careerUrl} target="_blank" rel="no-follow">Career page</a> for more information.
        </div>
      )}
  </div>
);

export default PostSponsor;
