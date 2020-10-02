import React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "styled-components";

import { ApolloProvider } from "@apollo/client";
import { useApollo, initializeApollo } from "../lib/apolloClient";
import { ALL_URL_QUERY } from "../queries/urlQueries";

import Meta from '../components/Meta'

// import "./demo-app.css";
// import App from 'next/app'

function MyApp({ Component, pageProps }) {

  const theme = {
    red: "#FFF000"
  }
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}> 
            <Meta tag="Stream"/>
            <Component {...pageProps} />
        </ThemeProvider>
    </ApolloProvider>
  );
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: ALL_URL_QUERY,
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;