import React from 'react';
import BizCard from './biz-card';
import Data from '../content/data.yaml';

const GroupTitle = ({ groupName, idx }) => {
  if (idx === 0) {
    return (<h3 className="title is-size-5 is-capitalized has-offset-top">{groupName}</h3>);
  }
  return null;
};

const People = () => (
  <>
    <div className="content">
      <h2>People</h2>
      <p>Austin JavaScript is made possible by the hard work and goodwill of many people, but there are a few in particular that you should feel free to reach out to if you’ve got any questions:</p>
    </div>

    {Object.entries(Data.people).map(([org, group]) => group.map((person, idx) => (
      <>
        <GroupTitle groupName={org} idx={idx} />
        <BizCard
          person={person}
        />
      </>
    )))}
  </>
);

export default People;
