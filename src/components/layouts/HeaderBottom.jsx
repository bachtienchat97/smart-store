import React from 'react'

export default function HeaderBottom() {
  return (
    <div className="header_bottom">
    <div className="header_bottom_left">
      <div className="section group">
        <div className="listview_1_of_2 images_1_of_2">
          <div className="listimg listimg_2_of_1">
            <a href="preview.html">
              {" "}
              <img src={require("../../assets/img/pic4.png")} alt="pic4" />
            </a>
          </div>
          <div className="text list_2_of_1">
            <h2>Iphone</h2>
            <p>Lorem ipsum dolor sit amet sed do eiusmod.</p>
            <div className="button">
              <span>
                <a href="preview.html">Detail</a>
              </span>
            </div>
          </div>
        </div>
        <div className="listview_1_of_2 images_1_of_2">
          <div className="listimg listimg_2_of_1">
            <a href="preview-5.html">
              <img src={require("../../assets/img/pic3.png")} alt="pic3" />
            </a>
          </div>
          <div className="text list_2_of_1">
            <h2>Samsung</h2>
            <p>Lorem ipsum dolor sit amet, sed do eiusmod.</p>
            <div className="button">
              <span>
                <a href="preview-5.html">Detail</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section group">
        <div className="listview_1_of_2 images_1_of_2">
          <div className="listimg listimg_2_of_1">
            <a href="preview-3.html">
              {" "}
              <img src={require("../../assets/img/pic3.jpg")} alt="pic3" />
            </a>
          </div>
          <div className="text list_2_of_1">
            <h2>Acer</h2>
            <p>Lorem ipsum dolor sit amet, sed do eiusmod.</p>
            <div className="button">
              <span>
                <a href="preview-3.html">Detail</a>
              </span>
            </div>
          </div>
        </div>
        <div className="listview_1_of_2 images_1_of_2">
          <div className="listimg listimg_2_of_1">
            <a href="preview-6.html">
              <img src={require("../../assets/img/pic1.png")} alt="pic1" />
            </a>
          </div>
          <div className="text list_2_of_1">
            <h2>Canon</h2>
            <p>Lorem ipsum dolor sit amet, sed do eiusmod.</p>
            <div className="button">
              <span>
                <a href="preview-6.html">Detail</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="clear" />
    </div>
    <div className="header_bottom_right_images">
      {/* FlexSlider */}
      <section className="slider">
        <div className="flexslider">
          <div
            className="flex-viewport"
            style={{ overflow: "hidden", position: "relative" }}
          >
            <ul
              className="slides"
              style={{
                width: "1200%",
                transitionDuration: "0.6s",
                transform: "translate3d(-2220px, 0px, 0px)",
              }}
            >
              <li
                className="clone"
                style={{ width: 555, float: "left", display: "block" }}
              >
                <img src={require("../../assets/img/4.jpg")} alt="img-4" />
              </li>
              <li
                style={{ width: 555, float: "left", display: "block" }}
                className
              >
                <img src={require("../../assets/img/1.jpg")} alt="pic1" />
              </li>
              <li
                className
                style={{ width: 555, float: "left", display: "block" }}
              >
                <img src={require("../../assets/img/2.jpg")} alt="pic2" />
              </li>
              <li
                className
                style={{ width: 555, float: "left", display: "block" }}
              >
                <img src={require("../../assets/img/3.jpg")} alt="pic3" />
              </li>
              <li
                className="flex-active-slide"
                style={{ width: 555, float: "left", display: "block" }}
              >
                <img src={require("../../assets/img/4.jpg")} alt="pic4" />
              </li>
              <li
                style={{ width: 555, float: "left", display: "block" }}
                className="clone"
              >
                <img src={require("../../assets/img/1.jpg")} alt="pic1" />
              </li>
            </ul>
          </div>
          <ol className="flex-control-nav flex-control-paging">
            <li>
              <a className>1</a>
            </li>
            <li>
              <a className>2</a>
            </li>
            <li>
              <a className>3</a>
            </li>
            <li>
              <a className="flex-active">4</a>
            </li>
          </ol>
          <ul className="flex-direction-nav">
            <li>
              <a className="flex-prev" href="#">
                Previous
              </a>
            </li>
            <li>
              <a className="flex-next" href="#">
                Next
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* FlexSlider */}
    </div>
    <div className="clear" />
    </div>
  )
}
