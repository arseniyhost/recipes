import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import logo from './../images/recipes-logo.png';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <div className={style.fragment}>
          <NavItem className={style.nameUser}>
            {user ? `Welcome ${user.name}` : ''}
          </NavItem>
          <NavItem>
            <NavLink activeClassName={style.active} to="/recipes">Recipes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={style.btnAdd} activeClassName={style.active} to="/addrecipe">Add Recipe</NavLink>
          </NavItem>
          <NavItem>
            <Logout />
          </NavItem>
        </div>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <div className={style.fragment}>
          <NavItem>
            <NavLink activeClassName={style.active} to="/recipes">Recipes</NavLink>
          </NavItem>
          <NavItem>
            <RegisterModal />
          </NavItem>
          <NavItem>
            <LoginModal />
          </NavItem>
        </div>
      </Fragment>
    );

    return (
      <div id={style.header}>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand>
              <NavLink className="text-white" to="/">
                <img className={style.logo} src={logo} alt="logo"/>
              </NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);
