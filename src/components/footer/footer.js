import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import './footer.scss';
import * as API from '../../api/APIUtils';

class Footer extends Component {
  render() {

    let signedin = (
      <div id="signedin">
        <FormattedMessage id="Footer.signedin.info" /> <NavLink className="main ml-1" onClick={API.logout} to="/login"><FormattedMessage id="Footer.signedin.logout" /></NavLink>
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
                <li><NavLink to="/about"><FormattedMessage id="Footer.about.link" /></NavLink></li>
                <li><a href="mailto:angepagel@gmail.com">angepagel@gmail.com</a></li>
                <li><a href="tel:+33651705341">06 51 70 53 41</a></li>
              </ul>
            </Col>
            <Col xs='12' sm='6' lg='3'>
              <h5><FormattedMessage id="Footer.explore.header" /></h5>
              <hr/>
              <ul>
                <li><NavLink to="/resume"><FormattedMessage id="Footer.explore.resume" /></NavLink></li>
                <li><NavLink to="/projects"><FormattedMessage id="Footer.explore.projects" /></NavLink></li>
                <li><NavLink to="/blog"><FormattedMessage id="Footer.explore.blog" /></NavLink></li>
              </ul>
            </Col>
            <Col xs='12' sm='6' lg='3'>
              <h5><FormattedMessage id="Footer.projects.header" /></h5>
              <hr/>
              <ul>
                <li><a rel="noopener noreferrer" href="https://github.com/angepagel/A2T" target="_blank">A2T</a></li>
                <li><a rel="noopener noreferrer" href="https://github.com/angepagel/ThreeJS-Lab" target="_blank">ThreeJS Lab</a></li>
                <li><a rel="noopener noreferrer" href="https://github.com/angepagel/Civilization-Zero-Lamaths-UE" target="_blank">Civilization Zero</a></li>
              </ul>
            </Col>
            <Col xs='12' sm='6' lg='3'>
              <h5><FormattedMessage id="Footer.networks.header" /></h5>
              <hr/>
              <ul>
                <li><a rel="noopener noreferrer" href="https://github.com/angepagel" target="_blank">GitHub</a></li>
                <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/angepagel/" target="_blank">LinkedIn</a></li>
                <li><a rel="noopener noreferrer" href="https://join.skype.com/invite/iWD9kbbdEubc" target="_blank">Skype</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
        {API.isAuth() ? signedin : ''}
        <div id='mentions'><FormattedMessage id="Footer.mentions" /></div>
      </footer>
    );
  }
}

export default Footer;
