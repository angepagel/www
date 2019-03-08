import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  InputGroup,
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
      urls: [],
      apicode: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    try {
      const result = await API.upload(event.target);
      this.setState({
        urls: result.urls,
        apicode: result.apicode
      });
    }
    catch(error) {
      this.setState({
        apicode: error
      });
    }
  }

  render() {
    let { urls } = this.state;

    return (
      <div id="upload">
        <h1 className="page-title">Upload</h1>
        <Container>
          <Row>
            <Col className="mx-auto" lg='6'>

              {
                this.state.urls.length > 0 ? (
                  <section>
                    <h2>Liens générés</h2>
                    <hr/>
                    {
                      urls.map((url, index) => {
                        return (
                          <InputGroup className="url" key={index}>
                            <Input readOnly value={url} />
                          </InputGroup>
                        )
                      })
                    }
                  </section>
                ) : ('')
              }

              <section>
                <h2>Mettre en ligne</h2>
                <hr/>
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
              </section>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Upload;
