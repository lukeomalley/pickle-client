import React from 'react';
import Head from 'next/head';
import withData from '../lib/apollo';
import styled from 'styled-components';

import NewsFeedContainer from '../components/NewsFeed/NewsFeedContainer';

const HomeWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Pickle | Home</title>
      </Head>
      <HomeWrapper>
        <NewsFeedContainer></NewsFeedContainer>
      </HomeWrapper>
    </div>
  );
};

export default withData(Home);
