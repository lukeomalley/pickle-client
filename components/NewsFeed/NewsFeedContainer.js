import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { setRem } from '../../lib/styles';
import ALL_PICKLE_QUERY from '../../queries/ALL_PICKLE_QUERY';
import TextPickleCard from '../globals/TextPickleCard';

const NewsFeedWrapper = styled.div`
  display: grid;
  grid-gap: ${setRem(20)};
`;

const NewsFeedContainer = () => {
  const { loading, data, error } = useQuery(ALL_PICKLE_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <NewsFeedWrapper>
      {data.pickles.map(pickle => (
        <TextPickleCard key={pickle.id} pickle={pickle} />
      ))}
    </NewsFeedWrapper>
  );
};

export default NewsFeedContainer;
