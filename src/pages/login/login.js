import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Button
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import {
  User as UserIcon,
  Shield as ShieldIcon
} from 'react-feather';
import * as API from '../../api/APIUtils';
import APICodes from '../../api/APICodes';
import './login.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state= {
      username: '',
      password: '',
      apicode: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      const apicode = await API.login(
        this.state.username,
        this.state.password
      );
      this.setState({
        apicode: apicode
      })
    }

    catch(error) {
      this.setState({
        apicode: error
      })
    }
  }

  render() {
    return (
        <div id="login">

          <Helmet>
            <title>Ange Pagel – Connexion</title>
          </Helmet>

          <h1 className="page-title">
            <FormattedMessage id="Login.title"/>
          </h1>

          <Container>
            <Row>

              <Col md="6">

                <h2><FormattedMessage id="Login.warning.title"/></h2>

                <p>
                  <FormattedMessage id="Login.warning.message"/> <strong><FormattedMessage id="Login.warning.unauthorized_access"/></strong>
                </p>

                <Alert className="mb-4"
                  color={this.state.apicode === 'successful_login' ? 'success' : 'danger'}
                  isOpen={this.state.apicode !== ''}>
                  {APICodes[this.state.apicode]}
                </Alert>

              </Col>

              <Col>

                <Row>
                  <Col className="mx-auto" lg='8'>

                    <Form onSubmit={this.handleSubmit}>

                      <FormGroup>
                        <Label for="username">
                          <UserIcon/>
                          <FormattedMessage id="Login.form.username"/>
                        </Label>
                        <Input required type="text" name="username" onChange={this.handleChange} />
                      </FormGroup>

                      <FormGroup>
                        <Label for="password">
                          <ShieldIcon/>
                          <FormattedMessage id="Login.form.password"/>
                        </Label>
                        <Input required type="password" name="password" onChange={this.handleChange} />
                      </FormGroup>
                      
                      <Button className="mt-3" type='submit'>
                      <FormattedMessage id="Login.form.submit"/>
                      </Button>

                    </Form>

                  </Col>
                </Row>

              </Col>

            </Row>
          </Container>

          {API.isAuth() ? <Redirect to="/dashboard" /> : ''}
            
        </div>
    );
  }
}

export default Login;
