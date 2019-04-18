import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
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

          <h1 className="page-title">À propos</h1>

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
                            <br/>Prénom : Ange
                            <br/>Nom : Pagel
                            <br/>Âge : 19
                            <br/>Localisation : <a rel="noopener noreferrer" href="https://goo.gl/maps/LnhGruyp2xA2" target="_blank">Dijon</a>
                            <br/>Email : <a href="mailto:angepagel@gmail.com">angepagel@gmail.com</a>
                            <br/>Téléphone : <a href="tel:+33651705341">06 51 70 53 41</a>
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
                    <h2>Le numérique est notre avenir</h2>
                    <p>
                      J'évolue depuis mon plus jeune âge dans un monde transcendé par le numérique. Smartphones, réalité virtuelle et augmentée, intelligence artificielle, véhicules autonomes, etc. Ces progrès me fascinent et sont le moteur de mon ambitition. Aujourd'hui, mon voeu est de participer au développement des technologies de demain.
                    </p>
                  </section>
                </Col>
                <Col sm="12" md="6">
                <section>
                  <h2>Science, éthique et société</h2>
                  <p>
                    Je suis conscient des questions éthiques et sociétales induites par les progrès dans le domaine du numérique ; les débats autour de l'intelligence aritifcielle et de la robotique m'intéressent particulièrement. J'aspire à concevoir des solutions innovantes et pensées pour répondre à ces problématiques.
                  </p>
                </section>
                </Col>
              </Row>
            </section>

            <section id="interests">
              <h2>Centres d'intérêt</h2>
              <Row>
                <Col xs="6" md="3">
                  <img src={require('../../media/interests/intelligence-artificielle.png')} alt="Intelligence artificielle" />
                  <h3>Intelligence Artificielle</h3>
                </Col>
                <Col xs="6" md="3">
                  <img src={require('../../media/interests/philosophie.png')} alt="Philosophie" />
                  <h3>Philosophie</h3>
                </Col>
                <Col xs="6" md="3">
                  <img src={require('../../media/interests/architecture.png')} alt="Architecture & Design" />
                  <h3>Architecture & Design</h3>
                </Col>
                <Col xs="6" md="3">
                  <img src={require('../../media/interests/astronomie.png')} alt="Astronomie" />
                  <h3>Astronomie</h3>
                </Col>
              </Row>
            </section>

          </Container>
        </div>
    );
  }
}

export default About;
