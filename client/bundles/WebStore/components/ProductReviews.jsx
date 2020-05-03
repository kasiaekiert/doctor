import React from "react";

export class ProductReviews extends React.Component {
  render() {
    return (
      <div className='card card-outline-secondary my-4'>
        <div className='card-header'>Product Reviews</div>
        <div className='card-body'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et
            enim aperiam inventore, similique necessitatibus neque non!
            Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi
            mollitia, necessitatibus quae sint natus.
          </p>
          <small className='text-muted'>Posted by Anonymous on 3/1/17</small>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et
            enim aperiam inventore, similique necessitatibus neque non!
            Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi
            mollitia, necessitatibus quae sint natus.
          </p>
          <small className='text-muted'>Posted by Anonymous on 3/1/17</small>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et
            enim aperiam inventore, similique necessitatibus neque non!
            Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi
            mollitia, necessitatibus quae sint natus.
          </p>
          <small className='text-muted'>Posted by Anonymous on 3/1/17</small>
          <hr />
          <a href='#' className='btn btn-primary'>
            Leave a Review
          </a>
        </div>
      </div>
    );
  }
}
