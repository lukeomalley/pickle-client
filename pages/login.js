import React, { useState } from 'react';
import Head from 'next/head';
import withData from '../lib/apollo';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import styled from 'styled-components';

import SIGN_IN_USER from '../mutations/SIGN_IN_USER';

const LoginPageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
`;

const LoginPage = () => {
  const client = useApolloClient();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [signInUser, { loading, error }] = useMutation(SIGN_IN_USER, {
    onCompleted({ data }) {
      console.log(data);
    },
  });

  const handleLogin = e => {
    e.preventDefault();
    signInUser({ variables: { username, password } });

    setUsername('');
    setPassword('');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;
  return (
    <div>
      <Head>
        <title>Pickle | Login</title>
      </Head>
      <LoginPageWrapper>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </LoginPageWrapper>
    </div>
  );
};

export default withData(LoginPage);
