import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import USER_QUERY from '../../queries/USER_QUERY';
import UserProfileHeader from './UserProfileHeader';
import Hr from '../globals/HorizontalRule';

const ProfilePageContainer = ({ username }) => {
  const { loading, data, error } = useQuery(USER_QUERY, { variables: { username } });
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <>
      <UserProfileHeader user={data.user} />
      <Hr />
    </>
  );
};

export default ProfilePageContainer;
