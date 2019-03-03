import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
        <div id="dashboard">
          <h1 className="page-title">Tableau de bord</h1>
          <Container>
            <section>
              <Row>
                <Col>
                  <h2>Gestion du Blog</h2>
                  <hr/>
                  <NavLink className="main" to="/dashboard/editor"><i className="material-icons">add</i> Publier</NavLink>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
    );
  }
}

export default Dashboard;
