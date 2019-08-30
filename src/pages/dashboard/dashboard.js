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
  MessageCircle as MessageCircleIcon,
  File as FileIcon,
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
          <Row>

            <Col md="3" id="dashboard_tools">
              
              <h2>
                <FormattedMessage id="Dashboard.tools.title"/>
              </h2>
              <hr/>
              
              <Row>
                <Col>
                  <Button id="toggler_blog">
                    <MessageCircleIcon/>
                    <FormattedMessage id="Dashboard.tools.blog"/>
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button id="toggler_uploads">
                    <FileIcon/>
                    <FormattedMessage id="Dashboard.tools.files"/>
                  </Button>
                </Col>
              </Row>
              
            </Col>

            <Col>

              <UncontrolledCollapse toggler="#toggler_blog">
                <h2>
                  <FormattedMessage id="Dashboard.blog.title"/>
                </h2>
                <hr/>
                <NavLink className="main" to="/dashboard/editor">
                  <PlusIcon/>
                  <FormattedMessage id="Dashboard.blog.add" />
                </NavLink>
                <BlogTable />
              </UncontrolledCollapse>

              <UncontrolledCollapse toggler="#toggler_uploads">
                <h2>
                  <FormattedMessage id="Dashboard.files.title"/>
                </h2>
                <hr/>
                <NavLink className="main" to="/dashboard/upload">
                  <PlusIcon/>
                  <FormattedMessage id="Dashboard.files.add" />
                </NavLink>                  
                <UploadsTable />
              </UncontrolledCollapse>

            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
