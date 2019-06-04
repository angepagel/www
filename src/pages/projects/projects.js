import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Container,
  Row,
  Col,
  UncontrolledCollapse,
  Button
 } from 'reactstrap';
import './projects.scss';

class Projects extends Component {
  render() {
    return (
        <div id="projects">
        
          <Helmet>
            <title>Ange Pagel – Projets</title>
          </Helmet>

          <h1 className="page-title">Projets</h1>
          <section>
            <Container>
              <article>
                <Row className="project" id="www">
                    <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/www.png')})`}} />
                    <Col xl='12' className="project-description">
                      <h2>www.angepagel.fr</h2>
                      <div className="infos">
                        <span className="category">Site internet</span>
                        <span className="date">Février - Mars 2019</span>
                      </div>
                      <p>
                        Mon site internet personnel, conçu à l'aide de <a rel="noopener noreferrer" href="https://nodejs.org" target="_blank">Node.js</a> et des frameworks <a rel="noopener noreferrer" href="https://reactjs.org/" target="_blank">React</a> (front-end) et <a rel="noopener noreferrer" href="https://expressjs.com/" target="_blank">Express</a> (back-end, REST API). Son développement s'appuie sur une multitude de technologies web (<a rel="noopener noreferrer" href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, <a rel="noopener noreferrer" href="https://jwt.io/" target="_blank">JWT</a>, <a rel="noopener noreferrer" href="https://sass-lang.com/" target="_blank">Sass</a>, <a rel="noopener noreferrer" href="https://reacttraining.com/react-router/" target="_blank">React Router</a>, etc.) qui me permettent de présenter mon profil professionnel de manière soignée et originale tout en mettant à ma disposition un support d'expression personnel.
                      </p>
                      <UncontrolledCollapse className="project-details" toggler="#toggler_www">
                        <Row>
                          <Col sm='12' md='4'>
                            <h3>Front-end</h3>
                            <hr/>
                            <section>
                              <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                              <ul>
                                <li><a rel="noopener noreferrer" href="https://reactjs.org/" target="_blank">React.js</a></li>
                                <li><a rel="noopener noreferrer" href="https://reacttraining.com/react-router/" target="_blank">React Router</a></li>
                                <li><a rel="noopener noreferrer" href="https://getbootstrap.com/" target="_blank">Bootstrap</a> et composants <a rel="noopener noreferrer" href="https://reactstrap.github.io/" target="_blank">Reactstrap</a></li>
                                <li><a rel="noopener noreferrer" href="https://sass-lang.com/" target="_blank">Sass</a></li>
                              </ul>
                            </section>
                          </Col>
                          <Col sm='12' md='4'>
                            <h3>Back-end</h3>
                            <hr/>
                            <section>
                              <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                              <ul>
                                <li><a rel="noopener noreferrer" href="https://expressjs.com/" target="_blank">Express</a> + middlewares</li>
                                <li><a rel="noopener noreferrer" href="https://jwt.io/" target="_blank">JSON Web Tokens</a></li>
                                <li><a rel="noopener noreferrer" href="https://github.com/motdotla/dotenv" target="_blank">Dotenv</a></li>
                              </ul>
                            </section>
                          </Col>
                          <Col sm='12' md='4'>
                            <h3>Hébergement et BD</h3>
                            <hr/>
                            <section>
                              <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                              <ul>
                                <li>VPS sous Linux (<a rel="noopener noreferrer" href="https://www.debian.org/" target="_blank">Debian 9</a>)</li>
                                <li>Serveur web <a rel="noopener noreferrer" href="https://www.nginx.com/" target="_blank">NGINX</a></li>
                                <li>Certificat SSL (HTTPS) avec <a rel="noopener noreferrer" href="https://certbot.eff.org/" target="_blank">Certbot</a></li>
                                <li>SGBDR <a rel="noopener noreferrer" href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></li>
                              </ul>
                            </section>
                          </Col>
                        </Row>
                      </UncontrolledCollapse>
                      <Button className="main mt-2 mr-3" id="toggler_www">Informations</Button>
                      <a className="main mt-2 mr-3" rel="noopener noreferrer" href="https://github.com/angepagel/www-front" target="_blank">Front-end (GitHub)</a>
                      <a className="main mt-2" rel="noopener noreferrer" href="https://github.com/angepagel/www-back" target="_blank">Back-end (GitHub)</a>
                    </Col>
                </Row>
              </article>
              <Row>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project" id="a2t">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/a2t.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>A2T</h2>
                        <div className="infos">
                          <span className="category">Simulation</span>
                          <span className="date">Avril - Juin 2019</span>
                        </div>
                        <p>
                          A2T (Ambulance-To-Traffic light) est une simulation <a rel="noopener noreferrer" href="https://veins.car2x.org/" target="_blank">Veins</a> visant à améliorer le déroulement des missions de sauvetage grâce à des communications ambulance à feux de circulation utilisant un réseau Ad-Hoc de véhicules (VANet).
                        </p>
                        <UncontrolledCollapse className="project-details" toggler="#toggler_a2t">
                          <section>
                            <h3><i className="material-icons">person_add</i> Tuteur</h3>
                            <span>Dr. Chakkaphong Suthaputchakun</span>
                          </section>
                          <section>
                            <h3><i className="material-icons">forum</i> Contexte</h3>
                            <p>
                              Projet confié par le Dr. Suthaputchakun pendant mon stage au centre de recherche CROCCS de la Bangkok University.
                            </p>
                          </section>
                          <section>
                          <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                            <ul>
                              <li><a rel="noopener noreferrer" href="https://omnetpp.org/" target="_blank">Objective Modular Network Testbed in C++</a> (OMNeT++)</li>
                              <li><a rel="noopener noreferrer" href="https://sumo.dlr.de/index.html" target="_blank">Simulation of Urban Mobility</a> (SUMO)</li>
                              <li><a rel="noopener noreferrer" href="https://veins.car2x.org/" target="_blank">Vehicles in Network Simulation</a> (Veins)</li>
                            </ul>
                          </section>
                        </UncontrolledCollapse>
                        <Button className="main mt-2 mr-3" id="toggler_a2t">Informations</Button>
                        <a className="main mt-2" rel="noopener noreferrer" href="https://github.com/angepagel/A2T" target="_blank">Voir sur GitHub</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project" id="durandal">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/durandal.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Durandal</h2>
                        <div className="infos">
                          <span className="category">Bot Discord</span>
                          <span className="date">Mai 2019</span>
                        </div>
                        <p>
                          Durandal est un bot <a rel="noopener noreferrer" href="https://discordapp.com/" target="_blank">Discord</a> inspiré d'une intelligence artificielle du jeu vidéo <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Marathon_(video_game)" target="_blank">Marathon</a> et propose aux membres d'un serveur Discord de jouer à un jeu de rôle global se déroulant dans l'univers de science-fiction de Marathon.
                        </p>
                        <UncontrolledCollapse className="project-details" toggler="#toggler_durandal">
                          <section>
                            <h3><i className="material-icons">forum</i> Contexte</h3>
                            <p>
                              Projet personnel né d'une utilisation régulière du logiciel gratuit de VoIP <a rel="noopener noreferrer" href="https://discordapp.com/" target="_blank">Discord</a> et de mon intérêt pour la science fiction et les jeux de rôle.
                            </p>
                          </section>
                          <section>
                          <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                            <ul>
                              <li>JavaScript</li>
                              <li><a rel="noopener noreferrer" href="https://nodejs.org/" target="_blank">Node.js</a></li>
                              <li><a rel="noopener noreferrer" href="https://discord.js.org/#/" target="_blank">Discord.js</a></li>
                            </ul>
                          </section>
                        </UncontrolledCollapse>
                        <Button className="main mt-2 mr-3" id="toggler_durandal">Informations</Button>
                        <a className="main mt-2" rel="noopener noreferrer" href="https://github.com/angepagel/Durandal" target="_blank">Voir sur GitHub</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project" id="threejslab">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/lab.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>ThreeJS Lab</h2>
                        <div className="infos">
                          <span className="category">Infographie 3D</span>
                          <span className="date">Avril 2019</span>
                        </div>
                        <p>
                          Le ThreeJS Lab est un projet expérimental basé sur la bibliothèque JavaScript <a rel="noopener noreferrer" href="https://threejs.org/" target="_blank">three.js</a> qui me permet de développer mes compétences en infographie tridimensionnelle.
                        </p>
                        <UncontrolledCollapse className="project-details" toggler="#toggler_threejslab">
                          <section>
                            <h3><i className="material-icons">forum</i> Contexte</h3>
                            <p>
                              Projet personnel visant à approfondir les notions d'infographie tridimensionnelle vues au cours du module de programmation web de mon DUT Informatique.
                            </p>
                          </section>
                          <section>
                            <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                            <ul>
                              <li>JavaScript</li>
                              <li><a rel="noopener noreferrer" href="https://threejs.org/" target="_blank">Three.js</a></li>
                            </ul>
                          </section>
                        </UncontrolledCollapse>
                        <Button className="main mt-2 mr-3" id="toggler_threejslab">Informations</Button>
                        <a className="main mt-2 mr-3" rel="noopener noreferrer" href="https://github.com/angepagel/ThreeJS-Lab" target="_blank">Voir sur GitHub</a>
                        <a className="main mt-2" rel="noopener noreferrer" href="https://angepagel.github.io/ThreeJS-Lab/" target="_blank">Explorer le Lab</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project" id="wwwv1">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/wwwv1.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>www (v1)</h2>
                        <div className="infos">
                          <span className="category">Site internet</span>
                          <span className="date">Juin - Août 2018</span>
                        </div>
                        <p>
                          Une première version en PHP de mon site internet personnel visant à présenter mon parcours, mes projets et mes aspirations tout en développant mes compétences en développement web.
                        </p>
                        <UncontrolledCollapse className="project-details" toggler="#toggler_wwwv1">
                          <section>
                            <h3><i className="material-icons">forum</i> Contexte</h3>
                            <p>
                              Projet personnel réalisé afin d'acquérir de nouvelles connaissances en développement full stack tout produisant un support de communication efficace qui me permet d'anticiper ma recherche de stage pour la fin de mon DUT Informatique.
                            </p>
                          </section>
                          <h3>Front-end</h3>
                          <hr/>
                          <section>
                            <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisé(s)</h3>
                            <ul>
                              <li>PHP</li>
                              <li>JavaScript</li>
                              <li>HTML</li>
                              <li>CSS</li>
                            </ul>
                          </section>
                          <h3>Hébergement et BD</h3>
                          <hr/>
                          <section>
                            <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisé(s)</h3>
                            <ul>
                              <li>VPS sous Linux (<a rel="noopener noreferrer" href="https://www.debian.org/" target="_blank">Debian 9</a>)</li>
                              <li>Serveur web <a rel="noopener noreferrer" href="https://www.nginx.com/" target="_blank">NGINX</a></li>
                              <li>SGBDR <a rel="noopener noreferrer" href="https://www.mysql.com/" target="_blank">MySQL</a></li>
                            </ul>
                          </section>
                        </UncontrolledCollapse>
                        <Button className="main mt-2" id="toggler_wwwv1">Informations</Button>
                      </Col>
                    </Row>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project" id="bienvinfo">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/bienvenue-en-info.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Bienvenue en Info</h2>
                        <div className="infos">
                          <span className="category">Jeu vidéo</span>
                          <span className="date">Nov. 2017 - Janvier 2018</span>
                        </div>
                        <p>
                          Bienvenue en Info est un petit jeu de plateforme développé en Python présentant les modules d'enseignement du DUT Informatique à travers plusieurs niveaux. Le joueur découvre les différentes matières et peut répondre à un QCM faisant office d'évaluation de fin de semestre.
                        </p>
                        <UncontrolledCollapse className="project-details" toggler="#toggler_bienvenue_en_info">
                          <section>
                            <h3><i className="material-icons">forum</i> Contexte</h3>
                            <p>
                              Projet tutoré du 1<sup>er</sup> semestre de mon DUT Informatique. Il s'agit d'un projet centré autour de la communication et destiné aux personnes souhaitant se renseigner sur la formation.
                            </p>
                          </section>
                          <section>
                            <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                            <ul>
                              <li><a rel="noopener noreferrer" href="https://www.python.org/" target="_blank">Python</a></li>
                              <li><a rel="noopener noreferrer" href="https://www.pygame.org/wiki/about" target="_blank">Pygame</a></li>
                            </ul>
                          </section>
                        </UncontrolledCollapse>
                        <Button className="main mt-2" id="toggler_bienvenue_en_info">Informations</Button>
                      </Col>
                    </Row>
                  </article>
                </Col>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project" id="civilization">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/civilization-zero.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Civilization Zero</h2>
                        <div className="infos">
                          <span className="category">Jeu vidéo</span>
                          <span className="date">Nov. - Déc. 2017</span>
                        </div>
                        <p>
                          Civilization Zero est un jeu en ligne de commande développé en Pascal et inspiré de la célèbre série de jeux vidéo <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Civilization_(video_game)" target="_blank">Civilization</a>. Le joueur construit et améliore des bâtiments pour produire diverses ressources et se développer. Il doit également se protéger et diriger son armée contre les ennemis qui l'assaillissent.
                        </p>
                        <UncontrolledCollapse className="project-details" toggler="#toggler_civilization">
                          <section>
                            <h3><i className="material-icons">forum</i> Contexte</h3>
                            <p>
                              Projet final du module d'algorithmique du 1<sup>er</sup> semestre de mon DUT Informatique.
                            </p>
                          </section>
                          <section>
                          <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                            <ul>
                              <li>Pascal</li>
                            </ul>
                          </section>
                        </UncontrolledCollapse>
                        <Button className="main mt-2 mr-3" id="toggler_civilization">Informations</Button>
                        <a className="main mt-2" rel="noopener noreferrer" href="https://github.com/angepagel/Civilization-Zero-Lamaths-UE" target="_blank">Voir sur GitHub</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project" id="spaceships">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/spaceships.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Spaceships</h2>
                        <div className="infos">
                          <span className="category">Jeu vidéo</span>
                          <span className="date">Avril - Juin 2017</span>
                        </div>
                        <p>
                          Spaceships est un jeu vidéo type « Asteroids » développé en Python à l'aide de la bibliothèque Pygame. Il propose différents modes de jeux, un éditeur de niveaux et une personnalisation avancée du vaisseau dont il est possible de changer la forme, la couleur et l'arme équipée.
                        </p>
                        <UncontrolledCollapse className="project-details" toggler="#toggler_spaceships">
                          <section>
                            <h3><i className="material-icons">person_add</i> Coautheur</h3>
                            <span>Kévin KIBONGUI</span>
                          </section>
                          <section>
                            <h3><i className="material-icons">forum</i> Contexte</h3>
                            <p>
                              Projet de fin d'année de la spécialité Informatique et Sciences du Numérique (ISN) de mon Baccalauréat Scientifique. L'idée de Spaceships est née d'une passion commune pour la science fiction et les jeux vidéo rétro.
                            </p>
                          </section>
                          <section>
                            <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                            <ul>
                              <li><a rel="noopener noreferrer" href="https://www.python.org/" target="_blank">Python</a></li>
                              <li><a rel="noopener noreferrer" href="https://www.pygame.org/wiki/about" target="_blank">Pygame</a></li>
                            </ul>
                          </section>
                        </UncontrolledCollapse>
                        <UncontrolledCollapse className="project-details" toggler="#toggler_spaceships_gameplay">
                          <section>
                            <h3><i className="material-icons">movie</i> Vidéo de gameplay</h3>
                            <div className="video-container mt-2">
                              <iframe title="Spaceships Gameplay" width="560" height="315" src="https://www.youtube.com/embed/j3SzNZpQTNQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                          </section>
                        </UncontrolledCollapse>
                        <Button className="main mt-2 mr-3" id="toggler_spaceships">Informations</Button>
                        <Button className="main mt-2" id="toggler_spaceships_gameplay">Vidéo de gameplay</Button>
                      </Col>
                    </Row>
                  </article>
                </Col>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project" id="marathon">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/marathon.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Marathon Website</h2>
                        <div className="infos">
                          <span className="category">Site internet</span>
                          <span className="date">Janvier 2017</span>
                        </div>
                        <p>
                          Ce site est inspiré de <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Marathon_(video_game)" target="_blank">Marathon</a>, un jeu de tir à la première personne développé par Bungie dont le premier épisode est sorti en 1994. Il s'agit de l'un de mes premiers projets web.
                        </p>
                        <UncontrolledCollapse className="project-details" toggler="#toggler_marathon">
                          <section>
                            <h3><i className="material-icons">person_add</i> Coautheur</h3>
                            <span>Kévin KIBONGUI</span>
                          </section>
                          <section>
                            <h3><i className="material-icons">forum</i> Contexte</h3>
                            <p>
                              Projet web de la spécialité Informatique et Sciences du Numérique (ISN) de mon Baccalauréat Scientifique.
                            </p>
                          </section>
                          <section>
                            <h3><i className="material-icons">devices</i> Langage(s) et technologie(s) utilisés</h3>
                            <ul>
                              <li>HTML</li>
                              <li>CSS</li>
                            </ul>
                          </section>
                        </UncontrolledCollapse>
                        <Button className="main mt-2 mr-3" id="toggler_marathon">Informations</Button>
                        <a className="main mt-2 mr-3" rel="noopener noreferrer" href="https://github.com/angepagel/Marathon-Website" target="_blank">Voir sur GitHub</a>
                        <a className="main mt-2" rel="noopener noreferrer" href="https://angepagel.github.io/Marathon-Website/" target="_blank">Découvrir Marathon</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
    );
  }
}

export default Projects;
