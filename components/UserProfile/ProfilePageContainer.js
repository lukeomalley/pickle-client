import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import USER_QUERY from '../../queries/USER_QUERY';
import UserProfileHeader from './UserProfileHeader';
import NewsFeedContainer from '../NewsFeed/NewsFeedContainer';
import Hr from '../globals/HorizontalRule';

const ProfilePageContainer = ({ username }) => {
  const { loading, data, error } = useQuery(USER_QUERY, { variables: { username } });
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <>
      <UserProfileHeader user={data.user} />
      <Hr marginBottom={20} />
      <NewsFeedContainer pickles={data.user.pickles} />
    </>
  );
};

export default ProfilePageContainer;
