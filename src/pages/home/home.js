import React, { Component } from 'react';
import Typed from 'react-typed';

class Home extends Component {
  render() {
    return (
        <div id="home">
          <h1 className="page-title">
            <Typed loop
              strings={['Bienvenue', 'Welcome', 'ようこそ', 'Bienvenidos', 'Willkommen']}
              cursorChar={'_'}
              typeSpeed={60}
              backSpeed={30}
              backDelay={4000} />
          </h1>
        </div>
    );
  }
}

export default Home;
