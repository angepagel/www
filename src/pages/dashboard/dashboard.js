import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  UncontrolledCollapse,
  Button
} from 'reactstrap';
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
                  <h2>Gestion des ressources <Button className="toggler" id="toggler_uploads"><i className="material-icons">expand_more</i></Button></h2>
                  <hr/>
                  <UncontrolledCollapse toggler="#toggler_uploads">
                    <NavLink className="main" to="/dashboard/upload"><i className="material-icons">add</i> Mettre en ligne</NavLink>                  
                    <UploadsTable />
                  </UncontrolledCollapse>
                </Col>
              </Row>
            </section>

            <section>
              <Row>
                <Col>
                  <h2>Gestion du Blog <Button className="toggler" id="toggler_blog"><i className="material-icons">expand_more</i></Button></h2>
                  <hr/>
                  <UncontrolledCollapse toggler="#toggler_blog">
                    <NavLink className="main" to="/dashboard/editor"><i className="material-icons">add</i> Publier</NavLink>
                    <BlogTable />
                  </UncontrolledCollapse>
                </Col>
              </Row>
            </section>

          </Container>
        </div>
    );
  }
}

export default Dashboard;
