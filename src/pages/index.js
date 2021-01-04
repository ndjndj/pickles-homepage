import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import AboutPickles from '../components/about-pickles';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <AboutPickles />
    </React.Fragment>
  );
}
