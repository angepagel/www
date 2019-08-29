import React, { Component } from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';
import { 
  Container,
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse, 
  Nav, 
  NavItem, 
  NavLink 
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { Menu as MenuIcon } from 'react-feather';
import * as API from '../../api/APIUtils';
import './navigation.scss';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    }

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar dark expand='md'>
        <Container>
          <NavbarBrand tag="span">
            <NavLink exact to='/' tag={ReactNavLink} activeClassName='active'>
              Ange Pagel
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <MenuIcon/>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink to='/about' tag={ReactNavLink} activeClassName='active'>
                  <FormattedMessage id="Navigation.about"/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/resume' tag={ReactNavLink} activeClassName='active'>
                  <FormattedMessage id="Navigation.resume"/>
                </NavLink>
              </NavItem>                 
              <NavItem>
                <NavLink to='/projects' tag={ReactNavLink} activeClassName='active'>
                  <FormattedMessage id="Navigation.projects"/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/blog' tag={ReactNavLink} activeClassName='active'>
                  <FormattedMessage id="Navigation.blog"/>
                </NavLink>
              </NavItem>

              {
                API.isAuth() ? (
                  <NavItem>
                    <NavLink to='/dashboard' tag={ReactNavLink} activeClassName='active'>
                      <FormattedMessage id="Navigation.dashboard"/>
                    </NavLink>
                  </NavItem>
                ) : ('')
              }

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
