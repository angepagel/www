import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Typed from 'react-typed';
import * as API from '../../api/APIUtils';
import PreviewSkeleton from '../../components/blog/previewSkeleton/previewSkeleton';
import Preview from '../../components/blog/preview/preview';
import './home.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latestPost: '',
      loaded: false
    }
  }

  async componentDidMount() {
    try {
      this.setState({
        latestPost: await API.getLatestPost(),
        loaded: true
      })
    }
    catch(error) {
      console.error(error);
    }
  }

  render() {

    let { latestPost } = this.state;

    const imageUrl  = `url(${latestPost.image})`;
    const title     = latestPost.title;
    const category  = latestPost.category;
    const date      = latestPost.datestr;
    const link      = `/blog/${latestPost.id}`;
    let content;
    try {
      content = latestPost.body.length > 252 ? `${latestPost.body.substring(0,252)}...` : latestPost.body;
    }
    catch(error) {
      content = 'Une erreur est survenue.';
    }

    return (
        <div id="home">

          <Helmet>
            <title>Ange Pagel</title>
          </Helmet>
          
          <h1 className="page-title">
            <Typed loop
              strings={['Bienvenue', 'Welcome', 'ようこそ', 'Bienvenidos', 'Willkommen']}
              cursorChar={'_'}
              typeSpeed={60}
              backSpeed={30}
              backDelay={4000} />
          </h1>

          <Container>

            <section id="presentation">
              <Row>

                <Col sm='12' md='6' className="emojis">
                  <span role="img" aria-label="wizard">🧙</span>
                  <span role="img" aria-label="magic">✨</span>
                  <span role="img" aria-label="laptop">💻</span>
                </Col>

                <Col sm='12' md='6'>
                  <h2><FormattedMessage id="Home.about.title"/> <span className="name">Ange Pagel</span></h2>
                  <span className="magic"><FormattedMessage id="Home.about.description"/></span>
                  <br/>
                  <br/>
                  <span>
                    <span className="finger" role="img" aria-label="finger">👉🏻</span> <NavLink className="main" to={'/about'}><FormattedMessage id="Home.about.link"/></NavLink> <span className="finger" role="img" aria-label="finger">👈🏻</span>
                  </span>
                </Col>

              </Row>
            </section>

            <section id="latestPost">

              <h2><FormattedMessage id="Home.latestPost.title"/></h2>

              {
                !this.state.loaded ? <PreviewSkeleton/> : (
                  <article>
                    <Preview
                      imageUrl={imageUrl}
                      title={title}
                      category={category}
                      date={date}
                      content={content}
                      linkTo={link}
                    />
                  </article>
                )
              }

            </section>

          </Container>

        </div>
    );
  }
}

export default Home;
