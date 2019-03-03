import React, { Component } from 'react';
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

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      apicode: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    try {
      const apicode = await API.upload(event.target);
      this.setState({
        apicode: apicode
      });
    }
    catch(error) {
      this.setState({
        apicode: error
      });
    }
  }

  render() {
    return (
      <div id="upload">
        <h1 className="page-title">Upload</h1>
        <Container>
          <Row>
            <Col className="mx-auto" lg='6'>

              <Alert className="mb-4"
                color={this.state.apicode === 'files_uploaded' ? 'success' : 'danger'}
                isOpen={this.state.apicode !== ''}>
                {APICodes[this.state.apicode]}
              </Alert>

              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="files"><i className="material-icons">insert_drive_file</i> Fichiers</Label>
                  <Input type="file" multiple name="files" onChange={this.handleChange} />
                </FormGroup>
                <Button type="submit">Envoyer</Button>
              </Form>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Upload;
