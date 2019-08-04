import React, { Component } from 'react';
import {
  Table,
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import * as API from '../../api/APIUtils';
import APICodes from '../../api/APICodes';
import './uploadsTable.scss';

class UploadsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      deleteModal: false,
      deletingUpload: '',
      apicode: ''
    }
    this.openInNewTab = this.openInNewTab.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.closeModals = this.closeModals.bind(this);
  }

  openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
  }

  showDeleteModal(upload) {
    this.setState({
      deleteModal: true,
      deletingUpload: upload
    })
  }

  closeModals() {
    this.setState({
      deleteModal: false
    })
  }

  async deleteUpload(fileName) {
    try  {
      const apicode = await API.deleteUpload(fileName);

      this.setState({
        files: await API.getUploads(),
        apicode: apicode
      })
    }
    catch(error) {
      this.setState({
        apicode: error
      })
    }

    this.closeModals();
  }

  async componentDidMount() {
    try {
      this.setState({
        files: await API.getUploads()
      })
    }
    catch(error) {
      console.error(error);
    }
  }

  render() {
    let { files } = this.state;

    return (
      <div id="uploadsTable">

        <Alert className="mb-4"
          color={this.state.apicode === 'file_deleted' ? 'success' : 'danger'}
          isOpen={this.state.apicode !== ''}>
          {APICodes[this.state.apicode]}
        </Alert>

        <Table>
          <thead>
            <tr>
              <th>Nom du fichier</th>
              <th>Taille</th>
              <th>Date de mise en ligne</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              files.map(file => (
                <tr key={file.fileName}>
                  <td>{file.fileName}</td>
                  <td className="size">{parseFloat(file.size / 1000000.0).toFixed(2)}</td>
                  <td>{new Date(file.date).toUTCString()}</td>
                  <td className="actions">
                    <Button className="delete-icon" onClick={() => this.showDeleteModal(file.fileName)}><i className="material-icons">delete_forever</i></Button>
                    <Button className="openinnew-icon" onClick={() => this.openInNewTab(`${process.env.REACT_APP_PROXY}/uploads/${file.fileName}`)}><i className="material-icons">open_in_new</i></Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>

        <Modal isOpen={this.state.deleteModal}>
          <ModalHeader>Avertissement</ModalHeader>
          <ModalBody>
            Vous êtes sur le point de supprimer le fichier <mark>{this.state.deletingUpload}</mark>. Cette action est irréversible, souhaitez-vous continuer ?
          </ModalBody>
          <ModalFooter>
            <Button className="delete" onClick={() => this.deleteUpload(this.state.deletingUpload)}>Supprimer</Button>
            <Button className="cancel" onClick={this.closeModals}>Annuler</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default UploadsTable;
