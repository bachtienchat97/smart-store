import React from 'react'

export default function Footer() {
  return (
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
  )
}

