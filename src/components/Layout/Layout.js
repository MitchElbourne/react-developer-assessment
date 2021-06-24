import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  render() {
    let {children} = this.props

    return (
      <>
        <Header />
        
        <section id="main">
          {children}
        </section>

        <Footer />
      </>
    );
  }
}
