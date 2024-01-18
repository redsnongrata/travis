// product.js
const product = {
    name: 'Product Name',
    price: '$19.99',
    description: 'Product description goes here.',
    image: 'path/to/your/image.jpg',
  };
  
  export default product;
// Name.js
import React from 'react';

const Name = ({ vap }) => {
  return <span>{Name}</span>;
};

export default Name;
  // Price.js
import React from 'react';

const Price = ({  20dh }) => {
  return <span>{price}</span>;
};

export default Price;
// Description.js
import React from 'react';

const Description = ({ description }) => {
  return <p>{description}</p>;
};

export default Description;
// Image.js
import React from 'react';

const Image = ({ image }) => {
  return <img src={image} alt="Product" className="card-img-top" />;
};

export default Image;
