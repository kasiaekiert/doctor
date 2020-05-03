import React from "react";

export class ProductHeader extends React.Component {
  render() {
    const price = this.props.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return (
      <div className='card mt-4'>
        <img
          className='card-img-top img-fluid'
          src='http://placehold.it/900x400'
          alt=''
        />
        <div className='card-body'>
          <h3 className='card-title'>{this.props.name}</h3>
          <h4>{price}</h4>
          <p className='card-text'>{this.props.description}</p>
          <span className='text-warning'>★ ★ ★ ★ ☆</span>
          4.0 stars
        </div>
      </div>
    );
  }
}
