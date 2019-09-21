import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/apollo';

import { lightTheme } from '../lib/styles';
import Page from '../components/globals/Page';

class MyApp extends App {
  // This is a next.js lifecycle method that runs before the page renders
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <ThemeProvider theme={lightTheme}>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default withData(MyApp);
