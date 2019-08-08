import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
        <div>

          <Helmet>
            <title>{post.title}</title>
          </Helmet>

          <Container>
            <article>
              <Row className="post">

                <Col xl='12' className="image" style={{backgroundImage: `url(${post.image})`}}>
                  <span className="credits">Photo par {post.img_credit}</span>
                </Col>

                <Col xl='10' className="body mx-auto">

                  <h1 className="title">{post.title}</h1>

                  <div className="infos">
                      <span className="category">{post.category}</span>
                      <span className="date">Publié le {post.datestr}</span>
                  </div>

                  <hr/>

                  <div dangerouslySetInnerHTML={{__html:post.body}} />
                  
                </Col>

              </Row>
            </article>
          </Container>
          
        </div>
      );
    }
  }
}

export default Post;
