import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './blog.scss';

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_PROXY}/api/posts`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          posts: json.data
        })
      })
      .catch(error => {
        console.error(error)
      });
  }

  render() {

    let { posts } = this.state;

    return (
        <div id="blog">
          <h1 className="page-title">Blog</h1>
          <section>
            <Container>
              {
                posts.map(post => (
                <article key={post.id}>
                  <Row className="post">
                    <Col xs='12' md='6' className="post-image" style={{backgroundImage: `url(${post.image})`}} />
                    <Col xs='12' md='6' className="post-description">
                      <h2>{post.title}</h2>
                      <div className="infos">
                        <span className="category">{post.category}</span>
                        <span className="date">Publié le {post.date}</span>
                      </div>
                      <p>{post.body}</p>
                      <NavLink className="main" to='/blog'>Lire la suite</NavLink>
                    </Col>
                  </Row>
                </article>
              ))}
            </Container>
          </section>
        </div>
    );
  }
}

export default Blog;
