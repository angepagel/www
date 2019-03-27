import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import BlogTable from '../../components/blogTable/blogTable';
import UploadsTable from '../../components/uploadsTable/uploadsTable';
import './dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
        <div id="dashboard">

          <Helmet>
            <title>Tableau de bord</title>
          </Helmet>

          <h1 className="page-title">Tableau de bord</h1>

          <Container>

            <section>
              <Row>
                <Col>
                  <h2>Gestion des ressources</h2>
                  <hr/>
                  <NavLink className="main" to="/dashboard/upload"><i className="material-icons">add</i> Mettre en ligne</NavLink>
                  <UploadsTable />
                </Col>
              </Row>
            </section>

            <section>
              <Row>
                <Col>
                  <h2>Gestion du Blog</h2>
                  <hr/>
                  <NavLink className="main" to="/dashboard/editor"><i className="material-icons">add</i> Publier</NavLink>
                  <BlogTable />
                </Col>
              </Row>
            </section>

          </Container>
        </div>
    );
  }
}

export default Dashboard;
