import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import * as API from '../../api/APIUtils';
import PreviewSkeleton from '../../components/blog/previewSkeleton/previewSkeleton';
import './blog.scss';

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loaded: false
    }
  }

  async componentDidMount() {
    try {
      this.setState({
        posts: await API.getPosts(),
        loaded: true
      })
    }
    catch(error) {
      console.error(error);
    }
  }

  render() {

    let { posts } = this.state;
    let body= "";

    if (!this.state.loaded) {
      body = (<PreviewSkeleton skeletons="3"/>)
    }
    else {
      body = (
        posts.map(post => {
          const preview = post.body.length > 252 ? `${post.body.substring(0,252)}...` : post.body;
          const background = `url(${post.image})`;
          const link = `/blog/${post.id}`;

          return (
            <article key={post.id}>
              <Row className="post">
                <Col sm='12' md='6' className="post-image" style={{backgroundImage: background}} />
                <Col sm='12' md='6' className="post-description">
                  <h2>{ post.title }</h2>
                  <div className="infos">
                    <span className="category">{post.category}</span>
                    <span className="date">Publié le {post.datestr}</span>
                  </div>
                  <div dangerouslySetInnerHTML={{__html:preview}} />
                  <NavLink className="main" to={link}>Lire la suite</NavLink>
                </Col>
              </Row>
            </article>
          )}
        )
      )
    }

    return (
        <div id="blog">
        
          <Helmet>
            <title>Ange Pagel – Blog</title>
          </Helmet>

          <h1 className="page-title">Blog</h1>
          <section>
            <Container>
              {body}
            </Container>
          </section>
        </div>
    );
  }
}

export default Blog;
