import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Typed from 'react-typed';
import './about.scss';

class About extends Component {
  render() {

    const prompt = (
      <div className="prompt">
        <span style={{color:'#16c60c'}}>user@local</span><span>:</span><span style={{color:'#2668ff'}}>~</span><span>$</span><span>&emsp;</span>
      </div>
    );

    return (
        <div id="about">

          <Helmet>
            <title>Ange Pagel – À propos</title>
          </Helmet>

          <h1 className="page-title"><FormattedMessage id="About.title" /></h1>

          <Container>
            
            <section>
              <Row>
                <Col className="mx-auto" lg="8">
                  <div className="terminal">
                    <div className="terminal-head">
                      presentation — bash
                    </div>
                    <div className="terminal-body">

                      <span style={{display: 'inline-flex'}}>
                        {prompt}
                        <Typed
                          strings={['cat presentation.txt']}
                          showCursor={false}
                          typeSpeed={40}
                          onComplete={() => {
                            const hiddenContent = document.getElementById('terminal-hidden-content');
                            if (hiddenContent != null) hiddenContent.style.visibility = 'visible';
                          }} />
                        </span>
                      <Row>
                        <Col>
                          <div id="terminal-hidden-content" style={{visibility: 'hidden'}}>
                            <br/><FormattedMessage id="About.terminal.firstName" /> : Ange
                            <br/><FormattedMessage id="About.terminal.lastName" /> : Pagel
                            <br/><FormattedMessage id="About.terminal.age" /> : 19
                            <br/><FormattedMessage id="About.terminal.location" /> : <a rel="noopener noreferrer" href="https://goo.gl/maps/LnhGruyp2xA2" target="_blank">Dijon</a>
                            <br/><FormattedMessage id="About.terminal.email" /> : <a href="mailto:angepagel@gmail.com">angepagel@gmail.com</a>
                            <br/><FormattedMessage id="About.terminal.phone" /> : <a href="tel:+33651705341">06 51 70 53 41</a>
                            <br/>
                            <br/>
                            <span style={{display: 'inline-flex'}}>
                              {prompt}
                              <Typed
                                strings={['']}
                                cursorChar={'▋'}
                                />
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </section>

            <section>
              <Row>
                <Col sm="12" md="6">
                  <section>
                    <h2><FormattedMessage id="About.digital.title" /></h2>
                    <p>
                      <FormattedMessage id="About.digital.body" />
                    </p>
                  </section>
                </Col>
                <Col sm="12" md="6">
                <section>
                  <h2><FormattedMessage id="About.science.title" /></h2>
                  <p>
                    <FormattedMessage id="About.science.body" />
                  </p>
                </section>
                </Col>
              </Row>
            </section>

            <section id="interests">
              <h2><FormattedMessage id="About.interests.title" /></h2>
              <Row>
                <Col xs="6" md="3">
                  <img src={require('../../media/interests/intelligence-artificielle.png')} alt="Intelligence artificielle" />
                  <h3><FormattedMessage id="About.interests.ai" /></h3>
                </Col>
                <Col xs="6" md="3">
                  <img src={require('../../media/interests/philosophie.png')} alt="Philosophie" />
                  <h3><FormattedMessage id="About.interests.philosophy" /></h3>
                </Col>
                <Col xs="6" md="3">
                  <img src={require('../../media/interests/architecture.png')} alt="Architecture & Design" />
                  <h3><FormattedMessage id="About.interests.design" /></h3>
                </Col>
                <Col xs="6" md="3">
                  <img src={require('../../media/interests/astronomie.png')} alt="Astronomie" />
                  <h3><FormattedMessage id="About.interests.astronomy" /></h3>
                </Col>
              </Row>
            </section>

          </Container>
        </div>
    );
  }
}

export default About;
