import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import './resume.scss';

class Resume extends Component {
  render() {
    return (
        <div id="resume">

          <Helmet>
            <title>Ange Pagel – Curriculum Vitæ</title>
          </Helmet>
          
          <h1 className="page-title">Curriculum Vitæ</h1>
          
          <Container>
            <Row>
              <Col className="mx-auto" md="12" lg="8">

                <section id="download">
                  <Row className="text-center">
                    <Col xs="12" sm="6">
                      <a rel="noopener noreferrer" className="main" href="https://www.angepagel.fr/uploads/CV_Ange_PAGEL_FR.pdf" target="_blank"><i className="material-icons">cloud_download</i> <FormattedMessage id="Resume.download.fr" /></a>
                    </Col>
                    <Col xs="12" sm="6">
                      <a rel="noopener noreferrer" className="main" href="https://www.angepagel.fr/uploads/CV_Ange_PAGEL_EN.pdf" target="_blank"><i className="material-icons">cloud_download</i> <FormattedMessage id="Resume.download.en" /></a>
                    </Col>
                  </Row>
                </section>

                <section id="education">
                  <Row>
                    <Col xs="12" sm="5">
                      <h2>Études & Diplômes</h2>
                    </Col>
                    <Col xs="12" sm="7">
                      <div className="line">
                        <h3>Diplôme d'Ingénieur de l'Institut Polytechnique de Grenoble</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> Septembre 2019 - Juin 2022</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/SyBFEGsFhrW4uZM37">Grenoble INP - Ensimag</a></span>
                        </div>
                        <p className="description">
                          Grenoble INP - Ensimag (École Nationale Supérieur d'Informatique et de Mathématiques Appliquées de Grenoble), <strong>filière par apprentissage</strong>.
                        </p>
                      </div>

                      <div className="line">
                        <h3>DUT Informatique</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> Septembre 2017 - Juin 2019</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/hGnMS2aFda8B7P7P7">Université de Bourgogne</a></span>
                        </div>
                      </div>

                      <div className="line">
                        <h3>Baccalauréat Scientifique</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> Septembre 2015 - Juin 2017</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/RK9ojjjpT6Md3dk56">Lycée Général Jean-Marc Boivin</a></span>
                        </div>
                        <p className="description">
                          Diplôme obtenu avec <strong>mention Très Bien</strong>, section européenne espagnol.<br/>
                          Spécialité <strong>Sciences de la Vie et de la Terre</strong> (SVT), Option <strong>Informatique et Sciences du Numérique</strong> (ISN).<br/>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </section>

                <hr/>

                <section id="experience">
                  <Row>
                    <Col xs="12" sm="5">
                      <h2>Expériences Professionnelles</h2>
                    </Col>
                    <Col xs="12" sm="7">
                      <div className="line">
                        <h3>Développeur en alternance</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> Septembre 2019 - Août 2022</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/svYtwecqZ1TkGBW5A">Bertin Technologies Aix-en-Provence</a></span>
                        </div>
                        <p className="description">
                          Contrat d'apprentissage dans le cadre de ma formation d'ingénieur à l'Institut Polytechnique de Grenoble (Grenoble INP - ENSIMAG).  
                        </p>
                      </div>

                      <div className="line">
                        <h3>Stage en centre de recherche</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> 8 Avril - 4 Juillet 2019</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/yCfz9tZkP1nJ8BMn6">Bangkok University CROCCS</a></span>
                        </div>
                        <p className="description mb-3">
                          Stage de fin d'études de mon DUT Informatique. Réalisation du projet <strong>A2T</strong> confié par le <a rel="noopener noreferrer" href="http://bucroccs.bu.ac.th/showPeople.php?ID=8" target="_blank">Dr. Chakkaphong Suthaputchakun</a>.
                        </p>
                        <div className="infos">
                          <i className="material-icons">description</i> <a rel="noopener noreferrer" href={require("../../media/recommendations/Recommendation_Suthaputchakun.pdf")} target="_blank">Lettre de recommandation</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </section>

                <hr/>

                <section id="events">
                  <Row>
                    <Col xs="12" sm="5">
                      <h2>Événements</h2>
                    </Col>
                    <Col xs="12" sm="7">
                      <div className="line">
                        <h3>Hackathon WebStudentCup</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> 1 & 2 Février 2019</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/THhr4Rq8SMyNFT3a9">École d'ingénieurs ESIREM</a></span>
                        </div>
                        <p className="description">
                          Création en 24 heures d'un site internet (fictif) de réservation de voyages spatiaux et temporels.<br/>Équipe classée <strong>3e sur 11</strong>.
                        </p>
                      </div>

                      <div className="line">
                        <h3>Hackathon WebForce3</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> 13 & 14 Octobre 2018</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/ofRog3EdvES5W3gU8">IUT d'Auxerre</a></span>
                        </div>
                        <p className="description">
                          Création en 48 heures d'un site internet (fictif) de réservation d'espaces de co-working.<br/>Équipe classée <strong>8e sur 9</strong>.
                        </p>
                      </div>

                      <div className="line">
                        <h3>Staff Dijon Saiten</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> 14 & 15 Octobre 2017</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/FtXPq9JNXVm5K1TC7">IUT de Dijon</a></span>
                        </div>
                        <p className="description">
                          Convention d'anime, contribution bénévole à l'événement (animations et encadrement des visiteurs).
                        </p>
                      </div>
                    </Col>
                  </Row>
                </section>
                
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Resume;
