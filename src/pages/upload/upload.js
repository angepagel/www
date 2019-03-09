import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  Alert,
  Button
} from 'reactstrap';
import * as API from '../../api/APIUtils';
import APICodes from '../../api/APICodes';
import './upload.scss';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      urls: [],
      apicode: ''
    }
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.openInNewTab = this.openInNewTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  copyToClipboard(id) {
    const copyUrl = document.getElementById(id);
    copyUrl.select();
    document.execCommand('copy');
  }

  openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
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
            <Col className="mx-auto" lg='8'>

              {
                this.state.urls.length > 0 ? (
                  <section>
                    <h2>Liens générés</h2>
                    <hr/>
                    {
                      urls.map((url, index) => {
                        const id = `url_${index}`;
                        return (
                          <InputGroup className="url" key={index}>
                            <Input readOnly value={url}  id={id} />
                            <InputGroupAddon addonType="append">
                              <Button onClick={() => this.copyToClipboard(id)}><i className="material-icons">file_copy</i></Button>
                              <Button onClick={() => this.openInNewTab(url)}><i className="material-icons">open_in_new</i></Button>
                            </InputGroupAddon>
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
