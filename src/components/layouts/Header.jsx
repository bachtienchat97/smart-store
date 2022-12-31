import React from "react";
import '../../assets/css/flexslider.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className="header">  
      <div className="header_top">
        <div className="logo">
          <Link to="/">
            <img src={require("../../assets/img/logo.png")} alt="logo" />
          </Link>
        </div>
        <div className="header_top_right">
          <div className="search_box">
            <form>
              <input
                type="text"
                defaultValue="Search for Products"
                onFocus={(e) => (e.target.value = "")}
                onBlur={(e) =>
                  e.target.value == ""
                    ? (e.target.value = "Search for Products")
                    : ""
                }
              />
              <input
                type="submit"
                value={"search"}
                style={{ textTransform: "uppercase" }}
              />
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
            <div id="language" className="wrapper-dropdown" tabIndex={1}>
              EN
              <strong className="opencart"> </strong>
              <ul className="dropdown languges">
                <li>
                  <a href="#" title="Français">
                    <span>
                      <img
                        src={require("../../assets/img/gb.png")}
                        alt="en"
                        width={26}
                        height={26}
                      />
                    </span>
                    <span className="lang">English</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Français">
                    <span>
                      <img
                        src={require("../../assets/img/gb.png")}
                        alt="fr"
                        width={26}
                        height={26}
                      />
                    </span>
                    <span className="lang">Français</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Español">
                    <span>
                      <img
                        src={require("../../assets/img/gb.png")}
                        alt="es"
                        width={26}
                        height={26}
                      />
                    </span>
                    <span className="lang">Español</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Deutsch">
                    <span>
                      <img
                        src={require("../../assets/img/gb.png")}
                        alt="de"
                        width={26}
                        height={26}
                      />
                    </span>
                    <span className="lang">Deutsch</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Russian">
                    <span>
                      <img
                        src={require("../../assets/img/gb.png")}
                        alt="ru"
                        width={26}
                        height={26}
                      />
                    </span>
                    <span className="lang">Russian</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="currency" title="currency">
            <div id="currency" className="wrapper-dropdown" tabIndex={1}>
              $<strong className="opencart"> </strong>
              <ul className="dropdown">
                <li>
                  <a href="#">
                    <span>$</span>Dollar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>€</span>Euro
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="login">
            <span>
              <a href="#">
                <img src={require("../../assets/img/login.png")} alt="login" />
              </a>
            </span>
          </div>
          <div className="clear" />
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}
