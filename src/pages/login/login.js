import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

class Login extends Component {
  render() {
    return (
        <div id="login">
          <h1 className="page-title">Connexion</h1>
            <Container>
              <Row>
                <Col className="mx-auto" lg='6'>
                  <Form>
                    <FormGroup>
                      <Label for="username"><i class="material-icons">person</i> Nom d'utilisateur</Label>
                      <Input type="text" name="username" id="login_username"></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="password"><i class="material-icons">security</i> Mot de passe</Label>
                      <Input type="password" name="password" id="login_password" />
                    </FormGroup>
                    <Button>Connexion</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
        </div>
    );
  }
}

export default Login;
