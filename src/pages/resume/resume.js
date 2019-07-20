import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Progress } from 'reactstrap';
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
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/TPh1YDf2msVgVPYR6">École d'ingénieurs ESIREM</a></span>
                        </div>
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
                          Spécialité <strong>Sciences de la Vie et de la Terre</strong> (SVT).<br/>
                          Option <strong>Informatique et Sciences du Numérique</strong> (ISN).<br/>
                          Diplôme obtenu avec <strong>mention Très Bien</strong>, section européenne espagnol.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </section>

                <hr/>

                <section id="skills">
                  <h2 className="mb-3">Compétences</h2>

                  <Row>
                    <Col xs='12' md='6'>
                      <div className="skill">
                        <span>Développement logiciel</span>
                        <Progress value="80"/>
                      </div>
                      <div className="skill">
                        <span>Développement web</span>
                        <Progress value="75"/>
                      </div>
                      <div className="skill">
                        <span>Gestion de projet</span>
                        <Progress value="65"/>
                      </div>
                    </Col>
                    <Col xs='12' md='6'>
                      <div className="skill">
                        <span>Base de données</span>
                        <Progress value="60"/>
                      </div>
                      <div className="skill">
                        <span>Réseau</span>
                        <Progress value="50"/>
                      </div>
                      <div className="skill">
                        <span>IoT & Systèmes embarqués</span>
                        <Progress value="40"/>
                      </div>
                    </Col>
                  </Row>
      
                  <Row>
                    <Col xs='12' md='4'>
                      <div className="skill">
                        <span>Java</span>
                        <Progress id="java" value="80"/>
                      </div>
                      <div className="skill">
                        <span>Python</span>
                        <Progress id="python" value="70"/>
                      </div>
                      <div className="skill">
                        <span>JavaScript</span>
                        <Progress id="js" value="60"/>
                      </div>
                      <div className="skill">
                        <span>TypeScript</span>
                        <Progress id="ts" value="55"/>
                      </div>
                    </Col>
                    <Col xs='12' md='4'>
                      <div className="skill">
                        <span>HTML</span>
                        <Progress id="html" value="75"/>
                      </div>
                      <div className="skill">
                        <span>CSS</span>
                        <Progress id="css" value="70"/>
                      </div>
                      <div className="skill">
                        <span>PHP</span>
                        <Progress id="php" value="60"/>
                      </div>
                      <div className="skill">
                        <span>PL/SQL</span>
                        <Progress id="sql" value="50"/>
                      </div>
                    </Col>
                    <Col xs='12' md='4'>
                      <div className="skill">
                        <span>C#</span>
                        <Progress id="csharp" value="55"/>
                      </div>
                      <div className="skill">
                        <span>C++</span>
                        <Progress id="cpp" value="45"/>
                      </div>
                      <div className="skill">
                        <span>C</span>
                        <Progress id="c" value="20"/>
                      </div>
                      <div className="skill">
                        <span>Brainfuck</span>
                        <Progress id="brainfuck" value="3"/>
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
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/yCfz9tZkP1nJ8BMn6">Bangkok University CROCCS</a></span>
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
                        <h3>Préparateur de commandes</h3>
                        <div className="infos">
                          <span><i className="material-icons">event_note</i> Août 2018</span>
                          <br/>
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/QJnY8fGApHesoSqz5">Carrefour Grand Quétigny</a></span>
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
                          <span><i className="material-icons">location_on</i> <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/FtXPq9JNXVm5K1TC7">IUT de Dijon</a></span>
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
