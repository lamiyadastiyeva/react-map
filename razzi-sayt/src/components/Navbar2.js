import React, { Component } from 'react';

class Navbar2 extends Component {
  render() {
    return (<div>
              <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">Razzi.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active me-3" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active me-3" aria-current="page" href="#">Shop</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active me-3" aria-current="page" href="#">Pages</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active me-3" aria-current="page" href="#">Blog</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active me-3" aria-current="page" href="#">Features</a>
              </li>
              
            </ul>

            <div className="icons d-flex ">
                <div className="search"><i class="fas fa-search me-4"></i></div>
                <div className="account"><i class="far fa-user me-4"></i></div>
                <div className="heart"><i class="far fa-heart me-4"></i></div>
                <div className="basket"><i class="fas fa-shopping-bag"></i></div>
            </div>
            
          </div>
        </div>
      </nav>
    </div>);
  }
}

export default Navbar2;
