import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

export default function MyApp(props: AppProps) {

  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Dershane Sistem</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta name="author" content="Fatih ATEŞ" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
  
}