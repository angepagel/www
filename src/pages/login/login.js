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

  constructor(props) {
    super(props);
    this.state= {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_PROXY}/api/authenticate`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .catch((error) => {
        console.error(error);
      })
    
  }

  render() {
    return (
        <div id="login">
          <h1 className="page-title">Connexion</h1>
            <Container>
              <Row>
                <Col className="mx-auto" lg='6'>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="username"><i className="material-icons">person</i> Nom d'utilisateur</Label>
                      <Input type="text" name="username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password"><i className="material-icons">security</i> Mot de passe</Label>
                      <Input type="password" name="password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type='submit'>Connexion</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
        </div>
    );
  }
}

export default Login;
