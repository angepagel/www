import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Typed from 'react-typed';
import * as API from '../../api/APIUtils';
import './home.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latestPost: '',
    }
  }

  async componentDidMount() {
    try {
      this.setState({
        latestPost: await API.getLatestPost()
      })
    }
    catch(error) {
      console.error(error);
    }
  }

  render() {

    let { latestPost } = this.state;

    let preview = '';
    const background = `url(${latestPost.image})`;
    const link = `/blog/${latestPost.id}`;

    try {
      preview = latestPost.body.length > 252 ? `${latestPost.body.substring(0,252)}...` : latestPost.body;
    }
    catch(error) {
      preview = 'Une erreur est survenue.';
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

            <section id="recommendations">
            <h2><FormattedMessage id="Home.recommendation.title"/></h2>
              <Row className="mt-5">
                <Col className="mx-auto" md="12" lg='8'>
                  <blockquote>
                    <p>
                      <FormattedMessage id="Home.recommendation.suthaputchakun"/>
                    </p>
                    <footer>
                      <a rel="noopener noreferrer" href="http://bucroccs.bu.ac.th/showPeople.php?ID=8" target="_blank">Dr. Chakkaphong Suthaputchakun</a>
                      </footer>
                  </blockquote>
                  <a className="main mt-2" rel="noopener noreferrer" href={require("../../media/recommendations/Recommendation_Suthaputchakun.pdf")} target="_blank"><FormattedMessage id="Home.recommendation.letter" /></a>
                </Col>
              </Row>
            </section>

            <section id="latestPost">
              <h2><FormattedMessage id="Home.latestPost.title"/></h2>

              <Row className="latest-post">
                <Col xs='12' md='6' className="post-image" style={{backgroundImage: background}} />
                <Col xs='12' md='6' className="post-description">
                  <h2>{latestPost.title}</h2>
                  <div className="infos">
                    <span className="category">{latestPost.category}</span>
                    <span className="date">Publié le {latestPost.datestr}</span>
                  </div>
                  <p>{preview}</p>
                  <NavLink className="main" to={link}>Lire la suite</NavLink>
                </Col>
              </Row>
            </section>
          </Container>

        </div>
    );
  }
}

export default Home;
