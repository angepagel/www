import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
import './blogTable.scss';

class BlogTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      deleteModal: false,
      deletingPost: '',
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

  showDeleteModal(post) {
    this.setState({
      deleteModal: true,
      deletingPost: post
    })
  }

  closeModals() {
    this.setState({
      deleteModal: false
    })
  }

  async deletePost(id) {
    try  {
      const apicode = await API.deletePost(id);

      this.setState({
        posts: await API.getPosts(),
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
        posts: await API.getPosts()
      })
    }
    catch(error) {
      console.error(error);
    }
  }

  render() {
    let { posts } = this.state;

    return (
      <div id="blogTable">

        <Alert className="mb-4"
          color={this.state.apicode === 'post_deleted' ? 'success' : 'danger'}
          isOpen={this.state.apicode !== ''}>
          {APICodes[this.state.apicode]}
        </Alert>

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Catégorie</th>
              <th>Publication</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.map(post => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.category}</td>
                  <td>{post.date}</td>
                  <td className="actions">
                    <NavLink className="main edit-icon" to={`/dashboard/editor/${post.id}`}><i className="material-icons">edit</i></NavLink>
                    <Button className="delete-icon" onClick={() => this.showDeleteModal(post)}><i className="material-icons">delete_forever</i></Button>
                    <NavLink className="main openinnew-icon" to={`blog/${post.id}`} target="_blank"><i className="material-icons">open_in_new</i></NavLink>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>

        <Modal isOpen={this.state.deleteModal}>
          <ModalHeader>Avertissement</ModalHeader>
          <ModalBody>
            Vous êtes sur le point de supprimer l'article #{this.state.deletingPost.id} « <mark>{this.state.deletingPost.title}</mark> ». Cette action est irréversible, souhaitez-vous continuer ?
          </ModalBody>
          <ModalFooter>
            <Button className="delete" onClick={() => this.deletePost(this.state.deletingPost.id)}>Supprimer</Button>
            <Button className="cancel" onClick={this.closeModals}>Annuler</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default BlogTable;