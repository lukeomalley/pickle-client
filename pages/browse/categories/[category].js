import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import withData from '../../../lib/apollo';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import CATEGORY_QUERY from '../../../queries/CATEGORY_QUERY';
import CategoryPageHeader from '../../../components/Browse/CategoryPageHeader';
import { sizes } from '../../../lib/styles';

const CategoryPageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;

  @media (max-width: ${sizes.phone}px) {
    width: 100vw;
  }
`;

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const { loading, data, error } = useQuery(CATEGORY_QUERY, { variables: { name: category } });
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <div>
      <Head>
        <title>Pickle | {category}</title>
      </Head>
      <CategoryPageWrapper>
        <CategoryPageHeader category={data.category} />
      </CategoryPageWrapper>
    </div>
  );
};

export default withData(CategoryPage);
