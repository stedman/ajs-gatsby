import React from 'react';
import PostSpeaker from './post-speaker';

const peeps = {
  organizers: [
    {
      name: 'Lon Ingram',
      picUrl: 'https://pbs.twimg.com/profile_images/970161690233864192/rztEhZFR_400x400.jpg',
      twitter: 'lawnsea',
    },
    {
      name: 'Aaron Stacy',
      picUrl: 'https://pbs.twimg.com/profile_images/3281266042/5069b845017701c465760d25ba54b83c_400x400.jpeg',
      twitter: 'aaronj1335',
    },
    {
      name: 'Andrew Levine',
      picUrl: 'https://pbs.twimg.com/profile_images/950842904771284992/pZwj7Nim_400x400.jpg',
      twitter: 'drewml',
    },
  ],
  emeriti: [
    {
      name: 'Joe McCann',
      picUrl: 'https://pbs.twimg.com/profile_images/846386052910637056/tWGT0XAz_400x400.jpg',
      twitter: 'joemccann',
    },
    {
      name: 'Alex Sexton',
      picUrl: 'https://pbs.twimg.com/profile_images/1034325028026769408/hz_G2I3L_400x400.jpg',
      twitter: 'slexaxton',
    },
    {
      name: 'Rebecca Murphey',
      picUrl: 'https://pbs.twimg.com/profile_images/504070124509229056/6t-MUDgL_400x400.jpeg',
      twitter: 'rmurphey',
    },
  ],
};

const GroupTitle = ({ groupName, idx }) => {
  if (idx === 0) {
    return (<h3 className="title is-size-4 is-capitalized has-offset-top">{groupName}</h3>);
  }
  return null;
};

const People = () => (
  <>
    <h2 className="title">People</h2>
    <p>Austin JavaScript is made possible by the hard work and goodwill of many people, but there are a few in particular that you should feel free to reach out to if you’ve got any questions:</p>

    {Object.entries(peeps).map(([org, group]) => group.map((person, idx) => (
      <>
        <GroupTitle groupName={org} idx={idx} />
        <div key={person.twitter} className="has-offset-top">
          <PostSpeaker
            speaker={person}
          />
        </div>
      </>
    )))}
  </>
);

export default People;
