import React from 'react';
import Head from 'next/head';
import withData from '../lib/apollo';
import styled from 'styled-components';

const BrowsePageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
`;

const BrowsePage = () => {
  return (
    <div>
      <Head>
        <title>Pickle | Browse</title>
      </Head>
      <BrowsePageWrapper>
        <h1>Browse Page</h1>
      </BrowsePageWrapper>
    </div>
  );
};

export default withData(BrowsePage);
