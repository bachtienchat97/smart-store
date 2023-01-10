import React from 'react'
import { useState, useEffect } from 'react';
import { product } from 'api';
import HeaderBottom from 'components/layouts/HeaderBottom';

export default function Home() {
  const [ products, setProducts ] = useState([]);
  let componentMounted = true;

  useEffect(() => {
      const getProduct = async () => {
      const result = await product.getProductList();
      if(componentMounted) {
        setProducts(result);
      }
      return () => {
        componentMounted = false;
      }
    }
    getProduct();
  }, [])

  return (
    <>
      <HeaderBottom/>
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
              {products.map(item => (
                <div className="grid_1_of_4 images_1_of_4" key={item.id}>
                <a href="#">
                  <img src={item.img} alt="item.name" />
                </a>
                <h2>{item.name.substring(0,25)}...</h2>
                <p>{item.description.substring(0,30)}...</p>
                <p><span className="strike">${item.original_price}</span><span className="price">${item.discount_price}</span></p>
                <div className="button"><span><img src={require('../../assets/img/cart.jpg')} alt="cart" /><a href="preview-3.html" className="cart-button">Add to Cart</a></span> </div>
                <div className="button"><span><a href="preview-3.html" className="details">Details</a></span></div>
              </div>
              ))}
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
             {products.map(item => (
               <div className="grid_1_of_4 images_1_of_4" key={item.id}>
               <a href="#"><img src={item.img} alt={item.name} /></a>
               <div className="discount">
                 <span className="percentage">{item.discount_percent}%</span>
               </div>
               <h2>{item.name.substring(0,25)}...</h2>
               <p><span className="strike">${item.original_price}</span><span className="price">${item.discount_price}</span></p>
               <div className="button"><span><img src={require('../../assets/img/cart.jpg')} alt="cart" /><a href="preview-3.html" className="cart-button">Add to Cart</a></span> </div>
               <div className="button"><span><a href="preview-3.html" className="details">Details</a></span></div>
             </div>
             ))}
            </div>
          </div>
        </div> 
    </>
  )
}
