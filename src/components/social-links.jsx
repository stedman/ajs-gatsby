import React from 'react';
import ExternalLink from './external-link';

const SocialLinks = ({ social }) => (
  <>
    {social.email
      && (
        <ExternalLink href={`mailto:${social.email}`} title={`Email: ${social.email}`}>
          <span className="icon is-medium">
            <i className="fas fa-at fa-lg" />
          </span>
        </ExternalLink>
      )}
    {social.url
      && (
        <ExternalLink href={social.url} title={`Home: ${social.url}`}>
          <span className="icon is-medium">
            <i className="fas fa-home fa-lg" />
          </span>
        </ExternalLink>
      )}
    {social.twitter
      && (
        <ExternalLink href={`https://twitter.com/${social.twitter}`} title={`Twitter: ${social.twitter}`}>
          <span className="icon is-medium">
            <i className="fab fa-twitter fa-lg" />
          </span>
        </ExternalLink>
      )}
    {social.github
      && (
        <ExternalLink href={`https://github.com/${social.github}`} title={`GitHub: ${social.github}`}>
          <span className="icon is-medium">
            <i className="fab fa-github fa-lg" />
          </span>
        </ExternalLink>
      )}
    {social.linkedin
      && (
        <ExternalLink href={`https://www.linkedin.com/in/${social.linkedin}`} title={`LinkedIn: ${social.linkedin}`}>
          <span className="icon is-medium">
            <i className="fab fa-linkedin fa-lg" />
          </span>
        </ExternalLink>
      )}
  </>
);

export default SocialLinks;
