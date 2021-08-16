import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card   className='my-3 p-3 rounded' style={{justifyContent:"center"}}>
      <Link to={`/product/${product._id}`}>
        <Card.Img  className='image'style={{width:200,height:200 , justifycontent:"center" }} src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <h6>
              <strong style={{color:"brown" , justifyContent:"center"}}>{product.name}</strong>
            </h6>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <p>{product.price} TND</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
