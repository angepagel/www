import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import * as API from '../../api/APIUtils';
import APICodes from '../../api/APICodes';
import './editor.scss';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      category: '',
      title: '',
      image: '',
      body: '',
      apicode: ''
    }
    this.hydrate = this.hydrate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  hydrate(post) {
    this.setState({
      category: post.category,
      title: post.title,
      image: post.image,
      body: post.body,
      img_credit: post.img_credit
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    const post = this.state;
    let apicode;
    
    try {
      if (this.state.edit)
        apicode = await API.updatePost(this.props.match.params.id, post);
      else
        apicode = await API.createPost(post);
    }
    catch(error) {
      apicode = error;
    }

    this.setState({
      apicode: apicode
    })
  }

  async componentDidMount() {
    if (this.props.match) {
      try {
        const id = this.props.match.params.id
        const post = await API.getPost(id);
        this.setState({
          edit: true
        })
        this.hydrate(post);
      }
      catch(error) {
        this.setState({
          apicode: error
        })
      }
    }
  }

  render() {
    return (
      <div id="postEditor">
        <h1 className="page-title">Éditeur</h1>
        <Container>
          <Row>
            <Col className="mx-auto" lg='8'>

              <Alert className="mb-4"
                color={this.state.apicode === 'post_created' || 'post_updated' ? 'success' : 'danger'}
                isOpen={this.state.apicode !== ''}>
                {APICodes[this.state.apicode]}
              </Alert>

              <Form onSubmit={this.handleSubmit}>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="image"><i className="material-icons">photo</i> Image d'en-tête<span className="required">*</span></Label>
                      <Input required type="text" name="image" onChange={this.handleChange} value={this.state.image} />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="img_credit"><i className="material-icons">portrait</i> Crédit photo</Label>
                      <Input type="text" name="img_credit" onChange={this.handleChange} value={this.state.img_credit} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="title"><i className="material-icons">short_text</i> Titre<span className="required">*</span></Label>
                      <Input required type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="category"><i className="material-icons">bookmark</i> Catégorie<span className="required">*</span></Label>
                      <Input required type="text" name="category" onChange={this.handleChange} value={this.state.category} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="body"><i className="material-icons">chat</i> Corps<span className="required">*</span></Label>
                      <Input required type="textarea" name="body" onChange={this.handleChange} value={this.state.body} />
                    </FormGroup>
                  </Col>
                </Row>

                <Button type="submit">{this.state.edit ? 'Modifier' : 'Publier'}</Button>

              </Form>

              <div className="required">
                <span className="required">*</span> Champs requis
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Editor;
