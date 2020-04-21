import React from "react";

export class SiteHeader extends React.Component {
  render() {
    return (
      <header>
        <div className='navbar navbar-dark bg-dark box-shadow'>
          <a href='/' className='navbar-brand d-flex align-items-center'>
            <strong>Web Store</strong>
          </a>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Features
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/products'>
                  SHOP
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Dropdown link
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <span className='navbar-brand'>
            In Cart: {this.props.shopping_cart_item_count}
          </span>
        </div>
      </header>
    );
  }
}
