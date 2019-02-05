import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
    Navbar, 
    NavbarToggler, 
    Collapse, 
    Nav, 
    NavItem, 
    NavLink 
} from 'reactstrap';
import './navigation.scss';

class NavElem extends Component {
    render() {
        return (
            <NavItem>
                <NavLink tag={Link} to={this.props.link}>{this.props.title}</NavLink>
            </NavItem>
        )
    }
}

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
            <Navbar light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavElem link='/' title='Accueil' />
                            <NavElem link='/resume' title='Curriculum Vitæ' />
                            <NavElem link='/projects' title='Projets' />
                        </Nav>
                    </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
