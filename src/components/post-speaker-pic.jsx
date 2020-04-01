import React from 'react';

const SpeakerPic = ({ src, alt }) => (
  <div className="post-speaker-pic">
    <img src={src} alt={alt} width="100" />
  </div>
);

export default SpeakerPic;
