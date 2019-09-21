import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import withData from '../lib/apollo';
import styled from 'styled-components';

const ProfilePageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
  text-align: center;
`;

const BrowsePage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Pickle | {router.query.username}</title>
      </Head>
      <ProfilePageWrapper>
        <h1>{router.query.username}</h1>
      </ProfilePageWrapper>
    </div>
  );
};

export default withData(BrowsePage);