import React, { Component } from 'react';
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
import * as API from '../../api/APIUtils';
import APICodes from '../../api/APICodes';

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
          <h1 className="page-title">Connexion</h1>
            <Container>
              <Row>
                <Col className="mx-auto" lg='6'>

                  <Alert className="mb-4"
                    color={this.state.apicode === 'successful_login' ? 'success' : 'danger'}
                    isOpen={this.state.apicode !== ''}>
                    {APICodes[this.state.apicode]}
                  </Alert>
                  
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="username"><i className="material-icons">person</i> Nom d'utilisateur</Label>
                      <Input required type="text" name="username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password"><i className="material-icons">security</i> Mot de passe</Label>
                      <Input required type="password" name="password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button className="mt-3" type='submit'>Connexion</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
            {API.isAuth() ? <Redirect to="/dashboard" /> : ''}
        </div>
    );
  }
}

export default Login;
