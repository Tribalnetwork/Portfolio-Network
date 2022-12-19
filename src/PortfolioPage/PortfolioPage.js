import React from "react";
import poster from "./images/Poster.png";
import profile from "./images/Profile_image.svg";
import left from "./images/LeftV.svg";
import right from "./images/RightV.svg";
const PortfolioPage = () => {
  return (
    <div>
      <div className="custom_container outerwidthP">
        <div className="row">
          <div className="col-md-4">
            <div
              style={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={left} className="mr-2" /> <img src={profile} />
              <img src={right} className="ml-2" />{" "}
            </div>
          </div>
          <div className="col-md-8">
            {" "}
            <h1
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: " 400",
                fontSize: "30px",
                marginTop: "70px",
                marginBottom: "40px",
              }}
            >
              Name
            </h1>
            <h5
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: " 400",
                fontSize: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Bio
            </h5>
            <p
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: " 400",
                fontSize: "16px",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "0px",
              }}
            >
              This is my favorite app to use for work! I love to write and
              operate camera. Sometimes i will act, but I’d much rather be
              behind the camera making magic!
            </p>{" "}
            <div className="video_listing_page_list_single_tabs_data">
              <span>Resume</span>
            </div>
          </div>
        </div>
        <input type="search" className="searchPortfolio" placeholder="Search" />
      </div>
      <section className="video_listing_page_section">
        <div className="container">
          <h1
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: " 400",
              fontSize: "30px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            My Links
          </h1>

          <div className="video_listing_page_products">
            <ul>
              <li>
                <div className="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img className="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    className="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i className="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
              <li>
                <div className="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img className="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    className="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i className="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
              <li>
                <div className="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img className="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    className="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i className="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="video_listing_page_section">
        <div className="container">
          <div className="video_listing_page_products">
            <ul>
              <li>
                <div className="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img className="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    className="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i className="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
              <li>
                <div className="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img className="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    className="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i className="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
              <li>
                <div className="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img className="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    className="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i className="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
