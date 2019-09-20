import React from 'react';

import Meta from './Meta';
import Nav from './Nav';
import GlobalStyles from './GlobalStyles';

const Page = ({ children }) => {
  return (
    <div>
      <Meta />
      <Nav />
      <GlobalStyles />
      {children}
    </div>
  );
};

export default Page;
