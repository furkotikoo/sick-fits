/* eslint-disable react/prop-types */
import Page from '../components/Page';
import Router from 'next/router';
import nProgress from 'nprogress';

import '../components/styles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/CartState';
import NoSsr from '../components/NoSsr';
Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

const MyApp = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <NoSsr>
          <Page>
            <Component {...pageProps} />
          </Page>
        </NoSsr>
      </CartStateProvider>
    </ApolloProvider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
