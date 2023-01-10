import React  from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import topBrandApis from 'api/topBrand.js';

function Navbar() {
  // const [ topBrand, setTopBrand ] = useState([])
  // let componentMounted = true;
  // useEffect(() => {
  //     const getTopBrand = async () => {
  //     const result = await topBrandApis.getTopBrandList();
  //     if(componentMounted) {
  //       setTopBrand(result);
  //     }
  //     return () => {
  //       componentMounted = false;
  //     }
  //   }
  //   getTopBrand();
  // }, [])

  return (
    <div className="h_menu">
    <a id="touch-menu" className="mobile-menu" href="#">
      Menu
    </a>
    <nav>
      <ul className="menu list-unstyled">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li className="activate">
          <Link to="/products">Products</Link>
          <ul className="sub-menu list-unstyled">
            <div className="nag-mother-list">
              <div className="navg-drop-main">
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 1</a>
                  </li>
                  <li>
                    <a href="products.html">Product 2</a>
                  </li>
                  <li>
                    <a href="products.html">Product 3</a>
                  </li>
                </div>
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 1</a>
                  </li>
                  <li>
                    <a href="products.html">Product 2</a>
                  </li>
                  <li>
                    <a href="products.html">Product 3</a>
                  </li>
                </div>
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 1</a>
                  </li>
                  <li>
                    <a href="products.html">Product 2</a>
                  </li>
                  <li>
                    <a href="products.html">Product 3</a>
                  </li>
                </div>
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 1</a>
                  </li>
                  <li>
                    <a href="products.html">Product 2</a>
                  </li>
                  <li>
                    <a href="products.html">Product 3</a>
                  </li>
                </div>
                <div className="clear"> </div>
              </div>
              <div className="navg-drop-main">
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 4</a>
                  </li>
                  <li>
                    <a href="products.html">Product 5</a>
                  </li>
                  <li>
                    <a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 4</a>
                  </li>
                  <li>
                    <a href="products.html">Product 5</a>
                  </li>
                  <li>
                    <a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 4</a>
                  </li>
                  <li>
                    <a href="products.html">Product 5</a>
                  </li>
                  <li>
                    <a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 4</a>
                  </li>
                  <li>
                    <a href="products.html">Product 5</a>
                  </li>
                  <li>
                    <a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="clear"> </div>
              </div>
              <div className="navg-drop-main">
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 4</a>
                  </li>
                  <li>
                    <a href="products.html">Product 5</a>
                  </li>
                  <li>
                    <a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 4</a>
                  </li>
                  <li>
                    <a href="products.html">Product 5</a>
                  </li>
                  <li>
                    <a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 4</a>
                  </li>
                  <li>
                    <a href="products.html">Product 5</a>
                  </li>
                  <li>
                    <a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="nav-drop">
                  <li>
                    <a href="products.html">Product 4</a>
                  </li>
                  <li>
                    <a href="products.html">Product 5</a>
                  </li>
                  <li>
                    <a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="clear"> </div>
              </div>
            </div>
          </ul>
        </li>
        <li>
          <a href="products.html">Top Brand</a>
          <ul className="sub-menu list-unstyled sub-menu2">
            <div className="navg-drop-main">
              <div className="nav-drop nav-top-brand">
                {/* {topBrand.map(item => (<li key={item.id}>
                  <span>
                  {item.name}
                  </span>
                </li>))} */}
              </div>
            </div>
          </ul>
        </li>
        <li>
          <a href="faq.html">Services</a>
          <ul className="sub-menu list-unstyled sub-menu3">
            <div className="navg-drop-main">
              <div className="nav-drop">
                <li>
                  <a href="products.html">Product 4</a>
                </li>
                <li>
                  <a href="products.html">Product 5</a>
                </li>
                <li>
                  <a href="products.html">Product 6</a>
                </li>
              </div>
              <div className="nav-drop">
                <li>
                  <a href="products.html">Product 4</a>
                </li>
                <li>
                  <a href="products.html">Product 5</a>
                </li>
                <li>
                  <a href="products.html">Product 6</a>
                </li>
              </div>
              <div className="nav-drop">
                <li>
                  <a href="products.html">Product 4</a>
                </li>
                <li>
                  <a href="products.html">Product 5</a>
                </li>
                <li>
                  <a href="products.html">Product 6</a>
                </li>
              </div>
              <div className="nav-drop">
                <li>
                  <a href="products.html">Product 4</a>
                </li>
                <li>
                  <a href="products.html">Product 5</a>
                </li>
                <li>
                  <a href="products.html">Product 6</a>
                </li>
              </div>
              <div className="clear"> </div>
            </div>
          </ul>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="#">Delivery</a>
        </li>
        <li>
          <a href="faq.html">Faqs</a>
        </li>
        <li>
          <a href="contact.html">CONTACT</a>
        </li>
        <div className="clear"> </div>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar;
