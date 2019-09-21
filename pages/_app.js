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
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={lightTheme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}

export default withData(MyApp);
