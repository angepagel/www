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
                        <i class="material-icons">menu</i>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink to='/about' tag={ReactNavLink} activeClassName='active'>
                                    <i className='material-icons'>person</i> <span>À propos</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/resume' tag={ReactNavLink} activeClassName='active'>
                                    <i className='material-icons'>notes</i> <span>Curriculum Vitæ</span>
                                </NavLink>
                            </NavItem>                 
                            <NavItem>
                                <NavLink to='/projects' tag={ReactNavLink} activeClassName='active'>
                                    <i className='material-icons'>whatshot</i> <span>Projets</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/blog' tag={ReactNavLink} activeClassName='active'>
                                    <i className='material-icons'>edit</i> <span>Blog</span>
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
