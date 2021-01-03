import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Wrapper WrapperId={"about-pickles"} title={"About Pickles"} child={<div>div</div>}/>
    </React.Fragment>
  );
}
