import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './projects.scss';

class Projects extends Component {
  render() {
    return (
        <div id="projects">
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
                  <article>
                    <Row className="project">
                      <Col xl='12' className="project-image" />
                      <Col xl='12' className="project-description">
                        <h2>Projet 2</h2>
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
