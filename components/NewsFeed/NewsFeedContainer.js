import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import ALL_PICKLE_QUERY from '../../queries/ALL_PICKLE_QUERY';
import TextPickleCard from '../globals/TextPickleCard';

const NewsFeedContainer = () => {
  const { loading, data, error } = useQuery(ALL_PICKLE_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      {data.pickles.map(pickle => (
        <TextPickleCard key={pickle.id} pickle={pickle} />
      ))}
    </div>
  );
};

export default NewsFeedContainer;
