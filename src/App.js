import './assets/css/style.css';
import './assets/css/menu.css';

function App() {
  return (
    <div className="wrap">
  <div className="header">
    <div className="header_top">
      <div className="logo">
        <a href="index.html"><img src={require('./assets/img/logo.png')} alt="logo"/></a>
      </div>
      <div className="header_top_right">
        <div className="search_box">
          <form>
            <input type="text" defaultValue="Search for Products" onFocus={(e) => e.target.value = ''} onBlur={(e) => e.target.value == '' ? e.target.value = 'Search for Products' : ''} /><input type="submit" value={'search'} style={{ textTransform: 'uppercase' }}/>
          </form>
        </div>
        <div className="shopping_cart">
          <div className="cart">
            <a href="#" title="View my shopping cart">
              <strong className="opencart"> </strong>
              <span className="cart_title">Cart</span>
              <span className="no_product">(empty)</span>
            </a>
          </div>
        </div>
        <div className="languages" title="language">
          <div id="language" className="wrapper-dropdown" tabIndex={1}>EN
            <strong className="opencart"> </strong>
            <ul className="dropdown languges">					
              <li>
                <a href="#" title="Français">
                  <span><img src={require('./assets/img/gb.png')} alt="en" width={26} height={26} /></span><span className="lang">English</span>
                </a>
              </li>
              <li>
                <a href="#" title="Français">
                  <span><img src={require('./assets/img/gb.png')} alt="fr" width={26} height={26} /></span><span className="lang">Français</span>
                </a>
              </li>
              <li>
                <a href="#" title="Español">
                  <span><img src={require('./assets/img/gb.png')} alt="es" width={26} height={26} /></span><span className="lang">Español</span>
                </a>
              </li>
              <li>
                <a href="#" title="Deutsch">
                  <span><img src={require('./assets/img/gb.png')} alt="de" width={26} height={26} /></span><span className="lang">Deutsch</span>
                </a>
              </li>
              <li>
                <a href="#" title="Russian">
                  <span><img src={require('./assets/img/gb.png')} alt="ru" width={26} height={26} /></span><span className="lang">Russian</span>
                </a>
              </li>					
            </ul>
          </div>
        </div>
        <div className="currency" title="currency">
          <div id="currency" className="wrapper-dropdown" tabIndex={1}>$
            <strong className="opencart"> </strong>
            <ul className="dropdown">
              <li><a href="#"><span>$</span>Dollar</a></li>
              <li><a href="#"><span>€</span>Euro</a></li>
            </ul>
          </div>
        </div>
        <div className="login">
          <span>
            <a href="#">
              <img src={require('./assets/img/login.png')} alt="login"/>
            </a>
          </span>
        </div>
        <div className="clear" />
      </div>
      <div className="clear" />
    </div>
    <div className="h_menu">
      <a id="touch-menu" className="mobile-menu" href="#">Menu</a>
      <nav>
        <ul className="menu list-unstyled">
          <li><a href="index.html">HOME</a></li>
          <li className="activate"><a href="products.html">Products</a>
            <ul className="sub-menu list-unstyled">
              <div className="nag-mother-list">
                <div className="navg-drop-main">
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 1</a></li>
                    <li><a href="products.html">Product 2</a></li>
                    <li><a href="products.html">Product 3</a>
                    </li>
                  </div>
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 1</a></li>
                    <li><a href="products.html">Product 2</a></li>
                    <li><a href="products.html">Product 3</a>
                    </li>
                  </div>
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 1</a></li>
                    <li><a href="products.html">Product 2</a></li>
                    <li><a href="products.html">Product 3</a></li>
                  </div>
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 1</a></li>
                    <li><a href="products.html">Product 2</a></li>
                    <li><a href="products.html">Product 3</a></li>
                  </div>
                  <div className="clear"> </div>
                </div>
                <div className="navg-drop-main">
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 4</a></li>
                    <li><a href="products.html">Product 5</a></li>
                    <li><a href="products.html">Product 6</a>
                    </li>
                  </div>
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 4</a></li>
                    <li><a href="products.html">Product 5</a></li>
                    <li><a href="products.html">Product 6</a>
                    </li>
                  </div>
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 4</a></li>
                    <li><a href="products.html">Product 5</a></li>
                    <li><a href="products.html">Product 6</a></li>
                  </div>
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 4</a></li>
                    <li><a href="products.html">Product 5</a></li>
                    <li><a href="products.html">Product 6</a></li>
                  </div>
                  <div className="clear"> </div>
                </div>
                <div className="navg-drop-main">
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 4</a></li>
                    <li><a href="products.html">Product 5</a></li>
                    <li><a href="products.html">Product 6</a>
                    </li>
                  </div>
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 4</a></li>
                    <li><a href="products.html">Product 5</a></li>
                    <li><a href="products.html">Product 6</a>
                    </li>
                  </div>
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 4</a></li>
                    <li><a href="products.html">Product 5</a></li>
                    <li><a href="products.html">Product 6</a></li>
                  </div>
                  <div className="nav-drop"> 
                    <li><a href="products.html">Product 4</a></li>
                    <li><a href="products.html">Product 5</a></li>
                    <li><a href="products.html">Product 6</a></li>
                  </div>
                  <div className="clear"> </div>
                </div>
              </div>
            </ul>
          </li>
          <li><a href="products.html">Top Brand</a>			
            <ul className="sub-menu list-unstyled sub-menu2">
              <div className="navg-drop-main">
                <div className="nav-drop nav-top-brand"> 
                  <li><a href="products.html">Product 1</a></li>
                  <li><a href="products.html">Product 2</a></li>
                  <li><a href="products.html">Product 3</a></li>					
                  <li><a href="products.html">Product 4</a></li>
                  <li><a href="products.html">Product 5</a></li>
                  <li><a href="products.html">Product 6</a></li>
                </div>								
              </div>
            </ul>
          </li>		
          <li><a href="faq.html">Services</a>
            <ul className="sub-menu list-unstyled sub-menu3">
              <div className="navg-drop-main">
                <div className="nav-drop"> 
                  <li><a href="products.html">Product 4</a></li>
                  <li><a href="products.html">Product 5</a></li>
                  <li><a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="nav-drop"> 
                  <li><a href="products.html">Product 4</a></li>
                  <li><a href="products.html">Product 5</a></li>
                  <li><a href="products.html">Product 6</a>
                  </li>
                </div>
                <div className="nav-drop"> 
                  <li><a href="products.html">Product 4</a></li>
                  <li><a href="products.html">Product 5</a></li>
                  <li><a href="products.html">Product 6</a></li>
                </div>
                <div className="nav-drop"> 
                  <li><a href="products.html">Product 4</a></li>
                  <li><a href="products.html">Product 5</a></li>
                  <li><a href="products.html">Product 6</a></li>
                </div>
                <div className="clear"> </div>
              </div>
            </ul>
          </li>
          <li><a href="about.html">About</a></li>
          <li><a href="#">Delivery</a></li>
          <li><a href="faq.html">Faqs</a></li>
          <li><a href="contact.html">CONTACT</a></li>
          <div className="clear"> </div>
        </ul>
      </nav> 
    </div>
    <div className="header_bottom">
      <div className="header_bottom_left">
        <div className="section group">
          <div className="listview_1_of_2 images_1_of_2">
            <div className="listimg listimg_2_of_1">
              <a href="#">
                <img src={require('./assets/img/pic4.png')} alt="preview" />
              </a>
            </div>
            <div className="text list_2_of_1">
              <h2>Iphone</h2>
              <p>Lorem ipsum dolor sit amet sed do eiusmod.</p>
              <div className="button"><span><a href="preview.html">Add to cart</a></span></div>
            </div>
          </div>			
          <div className="listview_1_of_2 images_1_of_2">
            <div className="listimg listimg_2_of_1">
            <a href="#">
                <img src={require('./assets/img/pic3.png')} alt="preview" />
              </a>
            </div>
            <div className="text list_2_of_1">
              <h2>Samsung</h2>
              <p>Lorem ipsum dolor sit amet, sed do eiusmod.</p>
              <div className="button"><span><a href="preview-5.html">Add to cart</a></span></div>
            </div>
          </div>
        </div>
        <div className="section group">
          <div className="listview_1_of_2 images_1_of_2">
            <div className="listimg listimg_2_of_1">
              <a href="preview-3.html"> <img src={require('./assets/img/pic3.jpg')} alt="preview" /></a>
            </div>
            <div className="text list_2_of_1">
              <h2>Acer</h2>
              <p>Lorem ipsum dolor sit amet, sed do eiusmod.</p>
              <div className="button"><span><a href="preview-3.html">Add to cart</a></span></div>
            </div>
          </div>			
          <div className="listview_1_of_2 images_1_of_2">
            <div className="listimg listimg_2_of_1">
              <a href="#">
                <img src={require('./assets/img/pic1.png')} alt="preview-6"/>
              </a>
            </div>
            <div className="text list_2_of_1">
              <h2>Canon</h2>
              <p>Lorem ipsum dolor sit amet, sed do eiusmod.</p>
              <div className="button"><span><a href="preview-6.html">Add to cart</a></span></div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
      <div className="header_bottom_right_images">
        {/* FlexSlider */}
        <section className="slider">
          <div className="flexslider">
            <ul className="slides">
              <li><img src={require('./assets/img/1.jpg')} alt="img1" /></li>
              <li><img src={require('./assets/img/2.jpg')} alt="img2" /></li>
              <li><img src={require('./assets/img/3.jpg')} alt="img3" /></li>
              <li><img src={require('./assets/img/4.jpg')} alt="img4" /></li>
            </ul>
          </div>
        </section>
        {/* FlexSlider */}
      </div>
      <div className="clear" />
    </div>	
    <div className="main">
      <div className="content">
        <div className="content_top">
          <div className="heading">
            <h3>Feature Products</h3>
          </div>
          <div className="sort">
            <p>Sort by:
              <select>
                <option>Lowest Price</option>
                <option>Highest Price</option>
                <option>In Stock</option>  				   				
              </select>
            </p>
          </div>
          <div className="show">
            <p>Show:
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
            <p>Result Pages:</p><ul>
              <li><a href="#">1</a></li>
              <li className="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li>[<a href="#"> Next&gt;&gt;&gt;</a>]</li>
            </ul><p />
          </div>
          <div className="clear" />
        </div>
        <div className="section group">
          <div className="grid_1_of_4 images_1_of_4">
            <a href="#">
              <img src={require('./assets/img/feature-pic1.png')} alt="preview-3" />
            </a>
            <h2>Lorem Ipsum is simply </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p><span className="strike">$528.22</span><span className="price">$505.22</span></p>
            <div className="button"><span><img src={require('./assets/img/cart.jpg')} alt="cart" /><a href="preview-3.html" className="cart-button">Add to Cart</a></span> </div>
            <div className="button"><span><a href="preview-3.html" className="details">Details</a></span></div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="#"><img src={require('./assets/img/feature-pic2.jpg')} alt="preview-2" /></a>
            <h2>Lorem Ipsum is simply </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p><span className="strike">$640.89</span><span className="price">$620.87</span></p>
            <div className="button"><span><img src={require('./assets/img/cart.jpg')} alt="cart" /><a href="preview-3.html" className="cart-button">Add to Cart</a></span> </div>
            <div className="button"><span><a href="#" className="details">Details</a></span></div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="#"><img src={require('./assets/img/feature-pic3.jpg')} alt="cart" /></a>
            <h2>Lorem Ipsum is simply </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p><span className="strike">$240.66</span><span className="price">$220.97</span></p>
            <div className="button"><span><img src={require('./assets/img/cart.jpg')} alt="cart" /><a href="preview-6.html" className="cart-button">Add to Cart</a></span> </div>
            <div className="button"><span><a href="#" className="details">Details</a></span></div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="#">
              <img src={require('./assets/img/feature-pic4.png')} alt="preview"/>
            </a>
            <h2>Lorem Ipsum is simply </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p><span className="strike">$436.22</span><span className="price">$415.54</span></p>
            <div className="button"><span><img src={require('./assets/img/cart.jpg')} alt="cart" /><a href="preview-3.html" className="cart-button">Add to Cart</a></span> </div>
            <div className="button"><span><a href="#" className="details">Details</a></span></div>
          </div>
        </div>
        <div className="content_bottom">
          <div className="heading">
            <h3>New Products</h3>
          </div>
          <div className="sort">
            <p>Sort by:
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
            <p>Show:
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
            <p>Result Pages:</p><ul>
              <li><a href="#">1</a></li>
              <li className="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li>[<a href="#"> Next&gt;&gt;&gt;</a>]</li>
            </ul><p />
          </div>
          <div className="clear" />
        </div>
        <div className="section group">
          <div className="grid_1_of_4 images_1_of_4">
            <a href="#"><img src={require('./assets/img/new-pic1.jpg')} alt="preview-3" /></a>
            <div className="discount">
              <span className="percentage">40%</span>
            </div>
            <h2>Lorem Ipsum is simply </h2>
            <p><span className="strike">$438.99</span><span className="price">$403.66</span></p>
            <div className="button"><span><img src={require('./assets/img/cart.jpg')} alt="cart" /><a href="preview-3.html" className="cart-button">Add to Cart</a></span> </div>
            <div className="button"><span><a href="preview-3.html" className="details">Details</a></span></div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="#"><img src={require('./assets/img/new-pic2.jpg')} alt="preview-4" /></a>
            <div className="discount">
              <span className="percentage">22%</span>
            </div>
            <h2>Lorem Ipsum is simply </h2>
            <p><span className="strike">$667.22</span><span className="price">$621.75</span></p>
            <div className="button"><span><img src={require('./assets/img/cart.jpg')} alt="cart" /><a href="preview-4.html" className="cart-button">Add to Cart</a></span></div>
            <div className="button"><span><a href="preview-4.html" className="details">Details</a></span></div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="#"><img src={require('./assets/img/feature-pic2.jpg')} alt="preview-2" /></a>
            <div className="discount">
              <span className="percentage">55%</span>
            </div>
            <h2>Lorem Ipsum is simply </h2>
            <p><span className="strike">$457.22</span><span className="price">$428.02</span></p>
            <div className="button"><span><img src={require('./assets/img/cart.jpg')} alt="cart" /><a href="preview-2.html" className="cart-button">Add to Cart</a></span> </div>
            <div className="button"><span><a href="preview-2.html" className="details">Details</a></span></div>
          </div>
          <div className="grid_1_of_4 images_1_of_4">
            <a href="#"> <img src={require('./assets/img/new-pic3.jpg')} alt="new-pic3" /></a>
            <div className="discount">
              <span className="percentage">66%</span>
            </div>
            <h2>Lorem Ipsum is simply </h2>					 
            <p><span className="strike">$643.22</span><span className="price">$457.88</span></p>
            <div className="button"><span><img src={require('./assets/img/cart.jpg')} alt="cart" /><a href="preview-2.html" className="cart-button">Add to Cart</a></span> </div>
            <div className="button"><span><a href="#" className="details">Details</a></span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="wrapper">	
        <div className="section group">
          <div className="col_1_of_4 span_1_of_4">
            <h4>Information</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#"><span>Advanced Search</span></a></li>
              <li><a href="#">Orders and Returns</a></li>
              <li><a href="#"><span>Contact Us</span></a></li>
            </ul>
          </div>
          <div className="col_1_of_4 span_1_of_4">
            <h4>Why buy from us</h4>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="faq.html">Customer Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="contact.html"><span>Site Map</span></a></li>
              <li><a href="preview-2.html"><span>Search Terms</span></a></li>
            </ul>
          </div>
          <div className="col_1_of_4 span_1_of_4">
            <h4>My account</h4>
            <ul>
              <li><a href="contact.html">Sign In</a></li>
              <li><a href="index.html">View Cart</a></li>
              <li><a href="#">My Wishlist</a></li>
              <li><a href="#">Track My Order</a></li>
              <li><a href="faq.html">Help</a></li>
            </ul>
          </div>
          <div className="col_1_of_4 span_1_of_4">
            <h4>Contact</h4>
            <ul>
              <li><span>+91-123-456789</span></li>
              <li><span>+00-123-000000</span></li>
            </ul>
            <div className="social-icons">
              <h4>Follow Us</h4>
              <ul>
                <li className="facebook"><a href="#" target="_blank"> </a></li>
                <li className="twitter"><a href="#" target="_blank"> </a></li>
                <li className="googleplus"><a href="#" target="_blank"> </a></li>
                <li className="contact"><a href="#" target="_blank"> </a></li>
                <div className="clear" />
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_right">
          <p>© 2013 Smart Store. All Rights Reserved | Design by <a href="http://w3layouts.com">W3Layouts</a> </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
