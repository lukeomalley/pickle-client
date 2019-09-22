import React from 'react';
import Head from 'next/head';
import withData from '../lib/apollo';
import styled from 'styled-components';

const LoginPageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
`;

const LoginPage = () => {
  const clientID = '7786866812bb4554950210094f119843';
  const redirectUri = 'http://localhost:3000/api/v1/auth/instagram/callback';

  return (
    <div>
      <Head>
        <title>Pickle | Login</title>
      </Head>
      <LoginPageWrapper>
        <h1>Login</h1>
        <a
          href={`https://api.instagram.com/oauth/authorize/?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=code`}
        >
          Login with Instagram
        </a>
      </LoginPageWrapper>
    </div>
  );
};

export default withData(LoginPage);
