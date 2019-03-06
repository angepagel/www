import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class About extends Component {
  render() {
    return (
        <div id="about">

          <Helmet>
            <title>Ange Pagel – À propos</title>
          </Helmet>

          <h1 className="page-title">À propos</h1>
        </div>
    );
  }
}

export default About;
