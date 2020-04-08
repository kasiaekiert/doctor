import React from "react";

import { ProductCard } from "./ProductCard.jsx";

export class ProductRow extends React.Component {
  render() {
    return (
      <div className='row'>
        {this.props.products.map(props => (
          <ProductCard key={props.id} {...props} />
        ))}
      </div>
    );
  }
}
