import React from 'react';
import Header from '../components/header';
import AboutPickles from '../components/about-pickles';
import ReleaseNote from '../components/release-note';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <AboutPickles />
      <ReleaseNote />
    </React.Fragment>
  );
}
