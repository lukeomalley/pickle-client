import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import withData from '../lib/apollo';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import USER_QUERY from '../queries/USER_QUERY';
import ProfilePageContainer from '../components/UserProfile/ProfilePageContainer';
import { sizes } from '../lib/styles';

const ProfilePageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;

  @media (max-width: ${sizes.phone}px) {
    width: 100vw;
  }
`;

const ProfilePage = () => {
  const router = useRouter();
  const { username } = router.query;
  const { loading, data, error } = useQuery(USER_QUERY, { variables: { username } });
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <div>
      <Head>
        <title>Pickle | {username}</title>
      </Head>
      <ProfilePageWrapper>
        <ProfilePageContainer user={data.user} />
      </ProfilePageWrapper>
    </div>
  );
};

export default withData(ProfilePage);
