import React from 'react';
import Head from 'next/head';
import withData from '../lib/apollo';
import styled from 'styled-components';

const ProfilePageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
`;

const BrowsePage = () => {
  return (
    <div>
      <Head>
        <title>Pickle | Profile</title>
      </Head>
      <ProfilePageWrapper>
        <h1>Profile Page</h1>
      </ProfilePageWrapper>
    </div>
  );
};

export default withData(BrowsePage);
