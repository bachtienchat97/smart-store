import React from "react";

export default function Product() {
  return (
    <div className="main">
      <div className="content">
        <div className="content_top">
          <div className="heading">
            <h3>Feature Products</h3>
          </div>
          <div className="sort">
            <p>
              Sort by:
              <select>
                <option>Lowest Price</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
                <option>Lowest Price</option>
                <option>Lowest Price</option>
                <option>In Stock</option>
              </select>
            </p>
          </div>
          <div className="show">
            <p>
              Show:
              <select>
                <option>4</option>
                <option>8</option>
                <option>12</option>
                <option>16</option>
                <option>20</option>
                <option>In Stock</option>
              </select>
            </p>
          </div>
          <div className="page-no">
            <p>Result Pages:</p>
            <ul>
              <li>
                <a href="#">1</a>
              </li>
              <li className="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                [<a href="#"> Next&gt;&gt;&gt;</a>]
              </li>
            </ul>
            <p />
          </div>
          <div className="clear" />
        </div>
        <div className="section group">
          <div className="grid_1_of_4 images_1_of_4">
            <a href="preview-3.html">
              <img src={require('../../assets/img/feature-pic1.png')} alt="pic1" />
            </a>
            <h2>Lorem Ipsum is simply </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p>
              <span className="strike">$528.22</span>
              <span className="price">$505.22</span>
            </p>
            <div className="button">
              <span>
                <img src={require('../../assets/img/cart.jpg')} alt="cart" />
                <a href="preview-3.html" className="cart-button">
                  Add to Cart
                </a>
              </span>{" "}
            </div>
            <div className="button">
              <span>
                <a href="preview-3.html" className="details">
                  Details
                </a>
              </span>
            </div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="preview-2.html">
              <img src={require('../../assets/img/feature-pic2.jpg')} alt="pic2" />
            </a>
            <h2>Lorem Ipsum is simply </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p>
              <span className="strike">$640.89</span>
              <span className="price">$620.87</span>
            </p>
            <div className="button">
              <span>
                <img src={require('../../assets/img/cart.jpg')} alt="cart" />
                <a href="#" className="cart-button">
                  Add to Cart
                </a>
              </span>{" "}
            </div>
            <div className="button">
              <span>
                <a href="#" className="details">
                  Details
                </a>
              </span>
            </div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="preview-4.html">
              <img src={require('../../assets/img/feature-pic3.jpg')} alt="pic3" />
            </a>
            <h2>Lorem Ipsum is simply </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p>
              <span className="strike">$240.66</span>
              <span className="price">$220.97</span>
            </p>
            <div className="button">
              <span>
                <img src={require('../../assets/img/cart.jpg')} alt="cart" />
                <a href="preview-6.html" className="cart-button">
                  Add to Cart
                </a>
              </span>{" "}
            </div>
            <div className="button">
              <span>
                <a href="#" className="details">
                  Details
                </a>
              </span>
            </div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="preview-4.html">
              <img src={require('../../assets/img/feature-pic4.png')} alt="pic4" />
            </a>
            <h2>Lorem Ipsum is simply </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p>
              <span className="strike">$436.22</span>
              <span className="price">$415.54</span>
            </p>
            <div className="button">
              <span>
                <img src={require('../../assets/img/cart.jpg')} alt="cart" />
                <a href="preview-4.html" className="cart-button">
                  Add to Cart
                </a>
              </span>{" "}
            </div>
            <div className="button">
              <span>
                <a href="#" className="details">
                  Details
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="content_bottom">
          <div className="heading">
            <h3>New Products</h3>
          </div>
          <div className="sort">
            <p>
              Sort by:
              <select>
                <option>Lowest Price</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
                <option>Lowest Price</option>
                <option>Lowest Price</option>
                <option>In Stock</option>
              </select>
            </p>
          </div>
          <div className="show">
            <p>
              Show:
              <select>
                <option>4</option>
                <option>8</option>
                <option>12</option>
                <option>16</option>
                <option>20</option>
                <option>In Stock</option>
              </select>
            </p>
          </div>
          <div className="page-no">
            <p>Result Pages:</p>
            <ul>
              <li>
                <a href="#">1</a>
              </li>
              <li className="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                [<a href="#"> Next&gt;&gt;&gt;</a>]
              </li>
            </ul>
            <p />
          </div>
          <div className="clear" />
        </div>
        <div className="section group">
          <div className="grid_1_of_4 images_1_of_4">
            <a href="preview-3.html">
              <img src={require('../../assets/img/new-pic1.jpg')} alt="pic1" />
            </a>
            <div className="discount">
              <span className="percentage">40%</span>
            </div>
            <h2>Lorem Ipsum is simply </h2>
            <p>
              <span className="strike">$438.99</span>
              <span className="price">$403.66</span>
            </p>
            <div className="button">
              <span>
              <img src={require('../../assets/img/cart.jpg')} alt="cart" />
                <a href="preview-3.html" className="cart-button">
                  Add to Cart
                </a>
              </span>{" "}
            </div>
            <div className="button">
              <span>
                <a href="preview-3.html" className="details">
                  Details
                </a>
              </span>
            </div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="preview-4.html">
              <img src={require('../../assets/img/new-pic2.jpg')} alt="pic2" />
            </a>
            <div className="discount">
              <span className="percentage">22%</span>
            </div>
            <h2>Lorem Ipsum is simply </h2>
            <p>
              <span className="strike">$667.22</span>
              <span className="price">$621.75</span>
            </p>
            <div className="button">
              <span>
                <img src={require('../../assets/img/cart.jpg')} alt="cart" />
                <a href="preview-4.html" className="cart-button">
                  Add to Cart
                </a>
              </span>
            </div>
            <div className="button">
              <span>
                <a href="preview-4.html" className="details">
                  Details
                </a>
              </span>
            </div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="preview-2.html">
              <img src={require('../../assets/img/feature-pic2.jpg')} alt="feature-pic2" />
            </a>
            <div className="discount">
              <span className="percentage">55%</span>
            </div>
            <h2>Lorem Ipsum is simply </h2>
            <p>
              <span className="strike">$457.22</span>
              <span className="price">$428.02</span>
            </p>
            <div className="button">
              <span>
                <img src={require('../../assets/img/cart.jpg')} alt="cart" />
                <a href="preview-2.html" className="cart-button">
                  Add to Cart
                </a>
              </span>{" "}
            </div>
            <div className="button">
              <span>
                <a href="preview-2.html" className="details">
                  Details
                </a>
              </span>
            </div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="preview-2.html">
              <img src={require('../../assets/img/new-pic3.jpg')} alt="new-pic3" />
            </a>
            <div className="discount">
              <span className="percentage">66%</span>
            </div>
            <h2>Lorem Ipsum is simply </h2>
            <p>
              <span className="strike">$643.22</span>
              <span className="price">$457.88</span>
            </p>
            <div className="button">
              <span>
                <img src={require('../../assets/img/cart.jpg')} alt="cart" />
                <a href="preview-2.html" className="cart-button">
                  Add to Cart
                </a>
              </span>{" "}
            </div>
            <div className="button">
              <span>
                <a href="#" className="details">
                  Details
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}