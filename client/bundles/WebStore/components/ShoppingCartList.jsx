import React from "react";

export class ShoppingCartList extends React.Component {
  formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  renderListItem(item) {
    const description = item.product.description || "Brief description";

    return (
      <li
        key={item.id}
        className='list-group-item d-flex justify-content-between lh-condensed'
      >
        <div>
          <h6 className='my-0'>{item.product.name}</h6>
          <small className='text-muted'>{description}</small>
        </div>
        <span className='text-muted'>
          {this.formatPrice(item.product.price)}
        </span>
      </li>
    );
  }

  render() {
    const count = this.props.shopping_cart_items.length;

    const totalPrice = this.props.shopping_cart_items
      .map((item) => item.product.price)
      .reduce((t, s) => t + s, 0);

    return (
      <>
        <h4 className='d-flex justify-content-between align-items-center mb-3'>
          <span className='text-muted'>Your cart</span>
          <span className='badge badge-secondary badge-pill'>{count}</span>
        </h4>
        <ul className='list-group mb-3'>
          {this.props.shopping_cart_items.map((item) =>
            this.renderListItem(item)
          )}
          <li className='list-group-item d-flex justify-content-between'>
            <span>Total (USD)</span>
            <strong>{this.formatPrice(totalPrice)}</strong>
          </li>
        </ul>
      </>
    );
  }
}
