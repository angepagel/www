import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
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
                      <a className="main" href="/"><i className="material-icons">cloud_download</i> Télécharger (<span className="language">Français</span>)</a>
                      <br/>
                      <span className="available-soon">Bientôt disponible</span>
                    </Col>
                    <Col xs="12" sm="6">
                      <a className="main" href="/"><i className="material-icons">cloud_download</i> Télécharger (<span className="language">Anglais</span>)</a>
                      <br/>
                      <span className="available-soon">Bientôt disponible</span>
                    </Col>
                  </Row>
                </section>

                <section>
                  <h2>Projet d'étude</h2>
                  <p>
                    À l’issue de mon DUT Informatique, je souhaite continuer mes études en école d’ingénieurs et contribuer au développement des technologies de demain.
                  </p>
                </section>
                
                <hr/>

                <section id="education">
                  <Row>
                    <Col xs="12" sm="5">
                      <h2>Études</h2>
                    </Col>
                    <Col xs="12" sm="7">
                      <div className="line">
                        <h3>Cisco CCNA Routing & Switching</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> Septembre 2018 - En cours</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/E.S.I.R.E.M./@47.3121099,5.0725104,16.75z/data=!4m5!3m4!1s0x47f29e6bd4c577f3:0xb2198f3923ab0998!8m2!3d47.3121732!4d5.0739723">École d'ingénieurs ESIREM</a></span>
                        </div>
                      </div>

                      <div className="line">
                        <h3>DUT Informatique</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> Septembre 2017 - Juin 2019</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/IUT+Dijon/@47.3110124,5.0663128,17z/data=!3m2!4b1!5s0x47f29e6eeec3b081:0xe3076a48a9fe61f1!4m5!3m4!1s0x47f29e6edc000023:0xc034427f4d6a0b09!8m2!3d47.3110124!4d5.0685015">Université de Bourgogne</a></span>
                        </div>
                      </div>

                      <div className="line">
                        <h3>Baccalauréat Scientifique</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> Septembre 2015 - Juin 2017</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/Lyc%C3%A9e+G%C3%A9n%C3%A9ral+Jean-Marc+Boivin/@47.3031215,5.1254075,17z/data=!3m1!4b1!4m5!3m4!1s0x47f29f845f30838f:0x62034e02e5c87c61!8m2!3d47.3031215!4d5.1275962">Lycée Général Jean-Marc Boivin</a></span>
                        </div>
                        <p className="description">
                          Spécialité <strong>Sciences de la Vie et de la Terre</strong> (SVT).<br/>
                          Option <strong>Informatique et Sciences du Numérique</strong> (ISN).<br/>
                          Diplôme obtenu avec <strong>mention Très Bien</strong>, section européenne espagnol.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </section>

                <hr/>

                <section id="experience">
                  <Row>
                    <Col xs="12" sm="5">
                      <h2>Expériences</h2>
                    </Col>
                    <Col xs="12" sm="7">
                      <div className="line">
                        <h3>Stage en Centre de Recherche</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> 8 Avril - 4 Juillet 2019</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://www.google.fr/maps/place/BU-CROCCS/@14.0401609,100.6081118,17z/data=!4m5!3m4!1s0x30e2801accd02c07:0xdb5174318f1046b0!8m2!3d14.0401174!4d100.6102877">Bangkok University CROCCS</a></span>
                        </div>
                        <p className="description">
                          Stage de fin d'études (DUT Informatique), réalisation du projet <strong>A2T</strong> confié par le <a rel="noopener noreferrer" href="http://bucroccs.bu.ac.th/showPeople.php?ID=8" target="_blank">Dr. Suthaputchakun</a>.
                        </p>
                      </div>

                      <div className="line">
                        <h3>Hackathon WebStudentCup</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> 1 & 2 Février 2019</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/E.S.I.R.E.M./@47.3121099,5.0725104,16.75z/data=!4m5!3m4!1s0x47f29e6bd4c577f3:0xb2198f3923ab0998!8m2!3d47.3121732!4d5.0739723">École d'ingénieurs ESIREM</a></span>
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
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://www.google.fr/maps/place/Campus+Universitaire+d'Auxerre+(IUT,+UFR,+Le2i)/@47.7892,3.5920305,18z/data=!4m8!1m2!2m1!1sIUT+Auxerre!3m4!1s0x0:0x54e46eb902a3559!8m2!3d47.7886641!4d3.592537">IUT d'Auxerre</a></span>
                        </div>
                        <p className="description">
                          Création en 48 heures d'un site internet (fictif) de réservation d'espaces de co-working.<br/>Équipe classée <strong>8e sur 9</strong>.
                        </p>
                      </div>

                      <div className="line">
                        <h3>Préparateur de commandes</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> Août 2018</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://www.google.fr/maps/place/Carrefour/@47.3100896,5.1035361,19z/data=!3m1!5s0x47f29fb3e4010877:0x39863082cf29a708!4m12!1m6!3m5!1s0x47f29fb13699cf83:0x8738089414c52113!2sCentre+commercial+Carrefour+Grand+Qu%C3%A9tigny!8m2!3d47.3109037!4d5.1041273!3m4!1s0x0:0x316aa9b6fae2bc9f!8m2!3d47.3097853!4d5.1038562">Carrefour Grand Quétigny</a></span>
                        </div>
                        <p className="description">
                          Préparation et livraison des commandes en ligne, mise à jour en magasin des articles enregistrés dans le système informatique. 
                        </p>
                      </div>

                      <div className="line">
                        <h3>Staff Dijon Saiten</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> 14 & 15 Octobre 2017</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://www.google.fr/maps/place/IUT+Dijon/@47.3110124,5.0663128,17z/data=!3m2!4b1!5s0x47f29e6eeec3b081:0xe3076a48a9fe61f1!4m5!3m4!1s0x47f29e6edc000023:0xc034427f4d6a0b09!8m2!3d47.3110124!4d5.0685015">IUT de Dijon</a></span>
                        </div>
                        <p className="description">
                          Convention d'anime, contribution bénévole à l'événement (animations et encadrement du public).
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
