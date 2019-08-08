import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import * as API from '../../api/APIUtils';
import PreviewSkeleton from '../../components/blog/previewSkeleton/previewSkeleton';
import Preview from '../../components/blog/preview/preview';
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

          const id        = post.id;
          const imageUrl  = `url(${post.image})`;
          const title     = post.title;
          const category  = post.category;
          const date      = post.datestr;
          const content   = post.body.length > 252 ? `${post.body.substring(0,252)}...` : post.body;
          const link      = `/blog/${post.id}`;

          return (
            <article key={id}>
              <Preview
                imageUrl={imageUrl}
                title={title}
                category={category}
                date={date}
                content={content}
                linkTo={link}
              />
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
