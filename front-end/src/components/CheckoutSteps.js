import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div>
      <Nav className='justify-content-center mb-4'>
        <Nav.Item>
          {step1 ? (
            <LinkContainer to='/login'>
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Sign In</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step2 ? (
            <LinkContainer to='/shipping'>
              <Nav.Link>Shipping</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Shipping</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step3 ? (
            <LinkContainer to='/payement'>
              <Nav.Link>Payement</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Payement</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step4 ? (
            <LinkContainer to='/placeorder'>
              <Nav.Link>Place your Order</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Place your Order</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default CheckoutSteps;