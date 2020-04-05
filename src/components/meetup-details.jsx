import React from 'react';
import OrgData from '../content/organizations.yaml';

const MeetupDetails = ({ frontmatter, fields }) => {
  // TODO: what if there is no venue.id?
  const venue = OrgData[`${frontmatter.venue.key}`];
  const after = OrgData[`${frontmatter.after.key}`];

  return (
    <div className="message">
      <div className="message-header">
        Meetup
      </div>
      <div className="message-body">
        <div dateTime={fields.date}>
          DATE <span className="icon has-text-grey-dark"><i className="fas fa-calendar" /></span> <time className="has-text-primary has-text-weight-bold" dateTime={fields.dateShort}>{fields.date}</time>
        </div>
        <div>
          TIME <span className="icon has-text-grey-dark"><i className="fas fa-clock" /></span> <time className="has-text-primary has-text-weight-bold" dateTime="15:30">7:30PM</time> - <time className="has-text-primary has-text-weight-bold" dateTime="21:00">9:00PM</time>
        </div>
        <div>
          LOCATION <span className="icon has-text-grey-dark"><i className="fas fa-map-marker-alt" /></span>
          <strong className="has-text-primary">{venue.name}</strong>
          {' '}
          {venue.location
            && (
              <em>({ venue.location})</em>
            )}
          <div className="has-offset-top">
            Afterwards, the discussion carries on at <strong>
              {after.url
                ? <a href={after.url} target="_blank" rel="nofollow noopener noreferrer">{after.name}</a>
                : after.name}
            </strong> ({after.location}).
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupDetails;
