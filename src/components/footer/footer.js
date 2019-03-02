import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './footer.scss';
import * as API from '../../api/APIUtils';

class Footer extends Component {
  render() {

    let signedin = (
      <div id="signedin">
        Vous êtes connecté. <NavLink className="main ml-1" onClick={API.logout} to="/login">Déconnexion</NavLink>
      </div>
    );

    return (
      <footer>
        <Container>
          <Row id='links'>
            <Col xs='12' sm='6' lg='3'>
              <h5>Ange Pagel</h5>
              <hr/>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </Col>
            <Col xs='12' sm='6' lg='3'>
              <h5>Explorer</h5>
              <hr/>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </Col>
            <Col xs='12' sm='6' lg='3'>
              <h5>Projets</h5>
              <hr/>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </Col>
            <Col xs='12' sm='6' lg='3'>
              <h5>Réseaux</h5>
              <hr/>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </Col>
          </Row>
        </Container>
        {API.isAuth() ? signedin : ''}
        <div id='mentions'>Imaginé et développé par Ange Pagel</div>
      </footer>
    );
  }
}

export default Footer;
