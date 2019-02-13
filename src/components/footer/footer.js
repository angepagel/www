import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col xs="12" sm="6" lg="3">
              <h5>Ange Pagel</h5>
              <hr/>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <h5>Explorer</h5>
              <hr/>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <h5>Projets</h5>
              <hr/>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <h5>Réseaux</h5>
              <hr/>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div id="mentions">Imaginé et développé par Ange Pagel</div>
      </footer>
    );
  }
}

export default Footer;
