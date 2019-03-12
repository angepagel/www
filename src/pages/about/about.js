import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import './about.scss';

class About extends Component {
  render() {
    return (
        <div id="about">

          <Helmet>
            <title>Ange Pagel – À propos</title>
          </Helmet>

          <h1 className="page-title">À propos</h1>

          <Container>
            <Row>
              <Col className="mx-auto" lg="10">

                <section id="interests">
                  <h2>Centres d'intérêt</h2>
                  <Row>
                    <Col xs="6" md="3">
                      <img src={require('../../media/intelligence-artificielle.png')} alt="" />
                      <h3>Intelligence Artificielle</h3>
                    </Col>
                    <Col xs="6" md="3">
                      <img src={require('../../media/philosophie.png')} alt="" />
                      <h3>Philosophie</h3>
                    </Col>
                    <Col xs="6" md="3">
                      <img src={require('../../media/architecture.png')} alt="" />
                      <h3>Architecture & Design</h3>
                    </Col>
                    <Col xs="6" md="3">
                      <img src={require('../../media/astronomie.png')} alt="" />
                      <h3>Astronomie</h3>
                    </Col>
                  </Row>
                </section>
                
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default About;
