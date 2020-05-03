import React from "react";
import { ShopSidebar } from "./ShopSidebar.jsx";
import { ProductHeader } from "./ProductHeader.jsx";
import { ProductReviews } from "./ProductReviews.jsx";

export class ProductPage extends React.Component {
  render() {
    return (
      <div className='row'>
        <ShopSidebar />
        <div className='col-lg-9'>
          <ProductHeader {...this.props} />
          <ProductReviews />
        </div>
      </div>
    );
  }
}
