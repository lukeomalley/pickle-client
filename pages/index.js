import React from 'react';
import Head from 'next/head';
import withData from '../lib/apollo';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import NewsFeedContainer from '../components/NewsFeed/NewsFeedContainer';
import ALL_PICKLE_QUERY from '../queries/ALL_PICKLE_QUERY';

const HomeWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
`;

const Home = () => {
  const { loading, data, error } = useQuery(ALL_PICKLE_QUERY);
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <div>
      <Head>
        <title>Pickle | Home</title>
      </Head>
      <HomeWrapper>
        <NewsFeedContainer pickles={data.pickles} />
      </HomeWrapper>
    </div>
  );
};

export default withData(Home);
