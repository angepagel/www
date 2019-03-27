import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import './projects.scss';

class Projects extends Component {
  render() {
    return (
        <div id="projects">
        
          <Helmet>
            <title>Ange Pagel – Projets</title>
          </Helmet>

          <h1 className="page-title">Projets</h1>
          <section>
            <Container>
              <article>
                <Row className="project">
                    <Col xl='12' className="project-image" />
                    <Col xl='12' className="project-description">
                      <h2>Projet 1</h2>
                      <div className="infos">
                        <span className="category">Catégorie</span>
                        <span className="date">Date</span>

                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices venenatis eros quis porta. Maecenas eget elit nec velit egestas rhoncus. Suspendisse sem lacus, convallis eget malesuada at, viverra eget nisi. Donec finibus ac erat eu molestie.
                      </p>
                      <a className="main" href="/">Voir sur GitHub</a>
                    </Col>
                </Row>
              </article>
              <Row>
                <Col xs='12' md='6'>
                  <article id="project-durandal">
                    <Row className="project">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/durandal.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Durandal</h2>
                        <div className="infos">
                          <span className="category">Bot Discord</span>
                          <span className="date">Date</span>
                        </div>
                        <p>
                          Durandal est un bot Discord développé en Python. Il est capable d'effectuer des actions basiques et de répondre à diverses commandes.
                        </p>
                        <a className="main" rel="noopener noreferrer" href="https://github.com/angepagel/Durandal" target="_blank">Voir sur GitHub</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project">
                      <Col xl='12' className="project-image" />
                      <Col xl='12' className="project-description">
                        <h2>Projet 3</h2>
                        <div className="infos">
                          <span className="category">Catégorie</span>
                          <span className="date">Date</span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices venenatis eros quis porta. Maecenas eget elit nec velit egestas rhoncus. Suspendisse sem lacus, convallis eget malesuada at, viverra eget nisi. Donec finibus ac erat eu molestie.
                        </p>
                        <a className="main" href="/">Voir sur GitHub</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
              </Row>  
            </Container>
          </section>
        </div>
    );
  }
}

export default Projects;
