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
                    <Col xs='12' xl='6' className="project-image">
                      { /* Image */ }
                    </Col>
                    <Col xs='12' xl='6' className="project-description">
                      <h2>Projet 1</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices venenatis eros quis porta. Maecenas eget elit nec velit egestas rhoncus. Suspendisse sem lacus, convallis eget malesuada at, viverra eget nisi. Donec finibus ac erat eu molestie.
                      </p>
                    </Col>
                  </Row>
              </article>
              
              <article>
                  <Row className="project">
                    <Col xs='12' xl='6' className="project-image">
                      { /* Image */ }
                    </Col>
                    <Col xs='12' xl='6' className="project-description">
                      <h2>Projet 2</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices venenatis eros quis porta. Maecenas eget elit nec velit egestas rhoncus. Suspendisse sem lacus, convallis eget malesuada at, viverra eget nisi. Donec finibus ac erat eu molestie.
                      </p>
                    </Col>
                  </Row>
              </article>
            
            </Container>
          </section>
        </div>
    );
  }
}

export default Projects;
