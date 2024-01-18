// App.js
import React from 'react';
import Product from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const firstName = "YourFirstName"; // Replace with your first name

const App = () => {
  const productData = require('./product');

  return (
    <div className="app-container">
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
        <Card.Body>
          <Image image={productData.image} />
          <Card.Title>
            <Name name={productData.name} />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Price price={productData.price} />
          </Card.Subtitle>
          <Card.Text>
            <Description description={productData.description} />
          </Card.Text>
        </Card.Body>
      </Card>
      <p className="greeting">{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</p>
    </div>
  );
};

export default App;
