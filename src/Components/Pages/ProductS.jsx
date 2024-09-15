import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../../Reduder/cartSlice'; // Ensure correct path

import img1 from './images/download.jpg';
import img2 from './images/download (1).jpg';
import img3 from './images/download (2).jpg';
import img4 from './images/vrl.jpg';
import img5 from './images/Watches.jpg';
import img6 from './images/lights.jpg';
import img7 from './images/CJ.jpg';
import img8 from './images/ij.jpg';
import img9 from './images/j.jpg';
import img10 from './images/tj.jpg';
import img11 from './images/is.jpg';
import img12 from './images/CS.jpg';
import img13 from './images/cts.jpg';
import img14 from './images/its.jpg';
import img15 from './images/sbi.jpg';
import img16 from './images/ook.jpg';
import img17 from './images/nike S.jpg';
import img18 from './images/puma S.jpg';
import img19 from './images/Addidas S.jpg';




const SpecialCard = ({ pic, name, price }) => (
  <div className="productsAll">
    <img src={pic} alt={name} />
    <h2>{name}</h2>
    <p>Price: {price} Rs</p>
  </div>
);




const products = [
  { pic: img1, id: 1, name: 'Samsung galaxy s22 Phone', price: 100000 },
  { pic: img3, id: 2, name: 'nokia a1 Phone', price: 20000 },
  { pic: img2, id: 3, name: 'Iphone X Phone', price: 30000 },
  { pic: img4, id: 4, name: 'VR Lences G', price: 30000 },
  { pic: img5, id: 5, name: 'Watches G', price: 2999 },
  { pic: img6, id: 6, name: 'Lights G', price: 1099 },
  { pic: img10, id: 7, name: 'Trouser jeans', price: 999 },
  { pic: img8, id: 8, name: 'Mufti jeans', price: 2999 },
  { pic: img9, id: 9, name: 'I jeans', price: 2599 },
  { pic: img7, id: 10, name: 'Cotten jeans', price: 1599 },
  { pic: img11, id: 11, name: 'I Shirts', price: 2599 },
  { pic: img12, id: 12, name: 'Cotten Shirts', price: 1999 },
  { pic: img13, id: 13, name: 'Cotten T-Shirt', price: 1199 },
  { pic: img14, id: 14, name: 'I T-Shirt', price: 2099 },
  { pic: img15, id: 15, name: 'Shekspear Book', price: 199 },
  { pic: img16, id: 16, name: 'Vande Bharat Book', price: 299 },
  { pic: img17, id: 17, name: 'Nike Shoes', price: 4000 },
  { pic: img18, id: 18, name: 'Puma Shoes', price: 3500 },
  { pic: img19, id: 19, name: 'Addidas Shoes', price: 3000 },
  // Add more products here
];

class ProductS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
    };
  }

  handleAddToCart = (product) => {
    this.props.addToCart(product);
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const filteredProducts = this.state.filter === 'all'
      ? products
      : products.filter(product => product.name.toLowerCase().includes(this.state.filter.toLowerCase()));

    return (
      <div className='product-sel'>
        <h2>Products that you can get from us</h2>
        <h3>Choose here what you want:</h3>
        <select onChange={(e) => this.setFilter(e.target.value)}>
          <option value="all">All Products</option>
          <option value="phone">Mobile-Phones</option>
          <option value="g">Gadgets</option>
          <option value="shoes">Shoes</option>
          <option value="book">Books</option>
          <option value="shirts">Shirts</option>
          <option value="jeans">Pants</option>
          <option value="t-shirt">T-shirts</option>
        </select>

        <ul className='pds'>
          {filteredProducts.map(product => (
            <li key={product.id}>
              <SpecialCard pic={product.pic} name={product.name} price={product.price} />
              <button onClick={() => this.handleAddToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(add(product)),
});

export default connect(null, mapDispatchToProps)(ProductS);
