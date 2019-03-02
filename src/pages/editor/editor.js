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
import * as API from '../../api/APIUtils';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      image: '',
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit() {
    const post = this.state;
    API.createPost(post);
  }

  render() {
    return (
      <div id="postEditor">
        <h1 className="page-title">Éditeur</h1>
        <Container>
          <Row>
            <Col className="mx-auto" lg='8'>

              <Form onSubmit={this.handleSubmit}>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="image"><i className="material-icons">photo</i> Image d'en-tête</Label>
                      <Input required type="text" name="image" onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="title"><i className="material-icons">short_text</i> Titre</Label>
                      <Input required type="text" name="title" onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="category"><i className="material-icons">bookmark</i> Catégorie</Label>
                      <Input required type="text" name="category" onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="body"><i className="material-icons">chat</i> Corps</Label>
                      <Input required type="textarea" name="body" onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Button type="submit">Publier</Button>

              </Form>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Editor;
