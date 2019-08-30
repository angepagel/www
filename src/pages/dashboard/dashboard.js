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
import {
  Plus as PlusIcon
} from 'react-feather';
import { FormattedMessage } from 'react-intl';
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

          <h1 className="page-title">
            <FormattedMessage id="Dashboard.title"/>
          </h1>

          <Container>

            <section>
              <Row>
                <Col>
                  <h2><FormattedMessage id="Dashboard.files.title" /> <Button className="toggler" id="toggler_uploads"><i className="material-icons">expand_more</i></Button></h2>
                  <hr/>
                  <UncontrolledCollapse toggler="#toggler_uploads">
                    <NavLink className="main" to="/dashboard/upload">
                      <PlusIcon/>
                      <FormattedMessage id="Dashboard.files.upload" />
                    </NavLink>                  
                    <UploadsTable />
                  </UncontrolledCollapse>
                </Col>
              </Row>
            </section>

            <section>
              <Row>
                <Col>
                  <h2><FormattedMessage id="Dashboard.blog.title" /> <Button className="toggler" id="toggler_blog"><i className="material-icons">expand_more</i></Button></h2>
                  <hr/>
                  <UncontrolledCollapse toggler="#toggler_blog">
                    <NavLink className="main" to="/dashboard/editor">
                      <PlusIcon/>
                      <FormattedMessage id="Dashboard.blog.new" />
                    </NavLink>
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
