import React from 'react';
import ExternalLink from './external-link';

const SocialLinks = ({ social }) => (
  <>
    {social.url
      && (
        <ExternalLink href={social.url} title={`Home: ${social.url}`}>
          <span className="icon">
            <i className="fas fa-home" />
          </span>
        </ExternalLink>
      )}
    {social.linkedin
      && (
        <ExternalLink href={`https://www.linkedin.com/in/${social.linkedin}`} title={`LinkedIn: ${social.linkedin}`}>
          <span className="icon">
            <i className="fab fa-linkedin" />
          </span>
        </ExternalLink>
      )}
    {social.twitter
      && (
        <ExternalLink href={`https://twitter.com/${social.twitter}`} title={`Twitter: ${social.twitter}`}>
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
        </ExternalLink>
      )}
    {social.github
      && (
        <ExternalLink href={`https://github.com/${social.github}`} title={`GitHub: ${social.github}`}>
          <span className="icon">
            <i className="fab fa-github" />
          </span>
        </ExternalLink>
      )}
  </>
);

export default SocialLinks;
