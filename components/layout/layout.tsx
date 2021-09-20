import Head from 'next/head';
import { ReactChild } from 'react';
import Header from '../header/header';
type Props = {
  children: ReactChild;
};
export default function Layout(props: Props) {
  return (
    <div className="body-content">
      <Head>
        <title>Pokemon app</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {props.children}
    </div>
  );
}