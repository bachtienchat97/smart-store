import React, { useState, useEffect } from "react";
import 'assets/css/flexslider.css';
import { Link,useNavigate } from 'react-router-dom';
import Search from "components/search-products/Search";
import { SMART_STORE_USERNAME } from "constants";
import { useStore, actions } from "store";

export default function Header() {
  const [userLogin, setUserLogin] = useState([])
  const [ state, dispatch ] = useStore()
  const { users } = state;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(SMART_STORE_USERNAME));

  useEffect(() => {
    if(user) {
      setUserLogin(user);
      navigate("");
    }
  }, [users])

  const logout = async () => {
    await dispatch(actions.logoutUser([]))
    localStorage.removeItem(SMART_STORE_USERNAME);
    setUserLogin([])
  }

  return (
    <div className="header">  
      <div className="header_top">
        <div className="logo">
          <Link to="/">
            <img src={require("assets/img/logo.png")} alt="logo" />
          </Link>
        </div>
        <div className="header_top_right">
          <Search />
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
                        src={require("assets/img/gb.png")}
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
                        src={require("assets/img/gb.png")}
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
                        src={require("assets/img/gb.png")}
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
                        src={require("assets/img/gb.png")}
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
                        src={require("assets/img/gb.png")}
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
          {userLogin.length > 0 ? (<Link to="login">
          <div className="login-in">
            {userLogin.map(user => <span key={user}>{user.userName.at(0).toUpperCase()}</span>)}
            <div className="user">
              <div className="item-user">Trang cá nhân</div>  
              <div className="item-user">Sản phẩm yêu thích</div>  
              <div className="item-user" onClick={logout}>Đăng xuất</div>  
            </div>
          </div>
          </Link>) :  
          (<Link to="login"> 
            <div className="login">
              <span>
                <img src={require("assets/img/login.png")} alt="login" />
              </span>
            </div>
          </Link>)}
          <div className="clear" />
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}
