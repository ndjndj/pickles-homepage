import React from 'react';
import Header from '../components/header';
import PageIndex from '../components/page-index';
import AboutPickles from '../components/about-pickles';
import ReleaseNote from '../components/release-note';
import HowToInstall from '../components/how-to-install';
import HowToUnInstall from '../components/how-to-uninstall';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <PageIndex />
      <AboutPickles />
      <ReleaseNote />
      <HowToInstall />
      <HowToUnInstall />
    </React.Fragment>
  );
}
