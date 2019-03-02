import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import * as API from '../../api/APIUtils';
import './post.scss';
import NotFound from '../notFound/notFound';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postID: this.props.match.params.id,
      post: ''
    }
  }

  async componentDidMount() {
    try {
      this.setState({
        post: await API.getPost(this.state.postID)
      })
    }
    catch(error) {
      console.error(error);
    }
  }


  render() {
    const { post } = this.state;

    if (post == null) {
      return( <NotFound /> );
    }

    else {
      return (
        <div id="post">
          <Container>
            <Row className="post">
              <Col xl='12' className="post-image" style={{backgroundImage: `url(${post.image})`}} />
              <Col xl='10' className="post-description mx-auto">
                <h1 className="post-title">{post.title}</h1>
                <div className="infos">
                    <span className="category">{post.category}</span>
                    <span className="date">Publié le {post.date}</span>
                </div>
                <hr/>
                <p>{post.body}</p>
              </Col>
            </Row>
          </Container>
        </div>
    );
    }

  }
}

export default Post;
