import React, { Component } from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';
import { 
    Container,
    Navbar, 
    NavbarToggler, 
    Collapse, 
    Nav, 
    NavItem, 
    NavLink 
} from 'reactstrap';
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
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink exact to='/' tag={ReactNavLink} activeClassName='active'>
                                    Accueil
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/resume' tag={ReactNavLink} activeClassName='active'>
                                    Curriculum Vitæ
                                </NavLink>
                            </NavItem>                 
                            <NavItem>
                                <NavLink to='/projects' tag={ReactNavLink} activeClassName='active'>
                                    Projets
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;
