import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        className='navbar'
        bg='light'
        
        expand='lg'
      >
        <Container 
        >
          <LinkContainer to='/'>

            <Navbar.Brand  > 
              <p  className='sweet' style={{ fontFamily:'cursive', fontSize:'30px', marginLeft:'0px' ,textShadow:'2px 2px 4px '}}> Sweet Home</p>
              </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <div  style={{color:'olive',fontFamily:'cursive', fontSize:'20px' ,textShadow:'2px 2px 4px '}}>
                  <i className='fas fa-shopping-cart' ></i>Cart{' '}
                  </div>
                  {cartItems.length > 0 && (
                    <span className='badge' style={{color:'rgb(138, 175, 245)'}}>{cartItems.length}</span>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link >
                    <div style={{color:'olive',fontFamily:'cursive', fontSize:'20px' ,textShadow:'2px 2px 4px '}}>
                    <i className='fas fa-user' ></i> Sign In
                    </div>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
