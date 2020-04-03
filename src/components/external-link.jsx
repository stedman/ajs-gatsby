import React from 'react';

const ExternalLink = ({ href, title, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
    {children}
  </a>
);

export default ExternalLink;
