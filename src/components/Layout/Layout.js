import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />

        <h1>Hello</h1>

        <Footer />
      </>
    );
  }
}
