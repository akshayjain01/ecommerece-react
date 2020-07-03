import React, { Component } from 'react';
//Internals
import AllItems from './Allitems';

class Products extends Component {

  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h1>All Mobiles</h1>
        </div>
        <AllItems />
      </div>
    );
  }
}

export default Products;