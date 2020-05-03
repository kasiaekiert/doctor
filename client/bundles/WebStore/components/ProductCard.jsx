import React from "react";

export class ProductCard extends React.Component {
  // This method is new
  render() {
    const amount = this.props.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return (
      <div className='col-md-4'>
        <div className='card mb-4 box-shadow'>
          <div className='product-image d-flex align-items-center justify-content-center'>
            <img src={this.props.thumbnail_url} />
          </div>

          <div className='card-body'>
            <p className='card-text'>
              <strong>
                <a href={this.props.url}>{this.props.name}</a>
              </strong>
              <br />
              {this.props.description}
            </p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-secondary'
                >
                  Add to Cart
                </button>
              </div>
              <div>{amount}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
