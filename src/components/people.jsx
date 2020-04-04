import React from 'react';
import BizCard from './biz-card';
import PeopleData from '../content/people.yaml';

const GroupTitle = ({ groupName, idx }) => {
  if (idx === 0) {
    return (<h3 className="title is-size-5 is-capitalized has-offset-top">{groupName}</h3>);
  }
  return null;
};

const People = ({ include }) => (
  Object.entries(PeopleData)
    .filter(([org, group]) => {
      if (include) {
        return org === include;
      }
      return true;
    })
    .map(([org, group]) => group.map((person, idx) => (
      <>
        <GroupTitle groupName={org} idx={idx} />
        <BizCard
          person={person}
        />
      </>
    )))
);

export default People;
