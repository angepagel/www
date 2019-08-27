import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { PageNotFound } from '../../components/svg/unDraw';
import './notFound.scss';

class NotFound extends Component {
  render() {
    return (
        <div id="notFound">

          <Helmet>
            <title>Ange Pagel – 404</title>
          </Helmet>

          <Container>
            <Row>
              <Col>
                <h1 className="page-title"><FormattedMessage id="NotFound.title"/></h1>
                <PageNotFound/>
                <p>
                  <FormattedMessage id="NotFound.message"/> <NavLink exact to="/"><FormattedMessage id="NotFound.redirection"/></NavLink>
                </p>
              </Col>
            </Row>
          </Container>

        </div>
    );
  }
}

export default NotFound;
