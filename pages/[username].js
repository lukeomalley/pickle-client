import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import withData from '../lib/apollo';
import styled from 'styled-components';

import ProfilePageContainer from '../components/UserProfile/ProfilePageContainer';
import { sizes } from '../lib/styles';

const ProfilePageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;

  @media (max-width: ${sizes.phone}px) {
    width: 100vw;
  }
`;

const BrowsePage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Pickle | {router.query.username}</title>
      </Head>
      <ProfilePageWrapper>
        <ProfilePageContainer username={router.query.username} />
      </ProfilePageWrapper>
    </div>
  );
};

export default withData(BrowsePage);
