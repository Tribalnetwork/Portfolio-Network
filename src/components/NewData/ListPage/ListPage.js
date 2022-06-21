import React from "react";
import "../StyleFolder/Stylefile.css";
import "../StyleFolder/ListPage.css";
import poster from "../images/Poster.png";
import Video_box from "../images/Video-box.png";
import BlurOverlay from "../images/BlurOverlay.png";
const NewHeader = () => {
  return (
    <>
      {/* <div class="web_view_search_bar_main">
    <div class="web_view_search_bar">
  <form>
    <div class="web_view_search_bar_field"><input type="search" placeholder="Search here " /></div>
  </form>

</div>
</div> */}
      <section class="page-title-section">
        <img src={BlurOverlay} />
        <div class="page-title">
          <h2>Lists</h2>
        </div>
      </section>

      <div class="video_listing_page_list_tabs_section">
        <div class="custom_container">
          <div class="video_listing_page_list_single_tabs">
            <div class="video_listing_page_list_single_tabs_data">
              <a>New List +</a>
            </div>
            <div class="video_listing_page_list_single_tabs_data">
              <span>History</span>
            </div>
            <div class="video_listing_page_list_single_tabs_data">
              <span>Likes</span>
            </div>
            <div class="video_listing_page_list_single_tabs_data">
              <span>New List</span>
            </div>
          </div>
        </div>
      </div>

      <section class="video_listing_page_section">
        <div class="custom_container">
          <div class="video_listing_page_products">
            <ul>
              <li>
                <div class="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img class="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    class="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i class="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
              <li>
                <div class="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img class="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    class="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i class="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
              <li>
                <div class="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img class="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    class="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i class="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="video_listing_page_section_two">
        <div class="custom_container">
          <div class="video_listing_page_products_two">
            <div class="video_listing_page_products_two_main">
              <div class="video_listing_page_product_figure_box_two">
                <figure>
                  <a href="#">
                    <img class="lazy" src={Video_box} />
                  </a>
                </figure>

                <a
                  href="#"
                  class="video_listing_page_product_figure_tag_parent_link_two"
                >
                  <span>
                    <strong>Video Name</strong>
                    <small>8,964 views</small>
                  </span>
                  <object>
                    <a>
                      <i class="fal fa-plus"></i>
                    </a>
                  </object>
                </a>
              </div>
            </div>
            <div class="video_listing_page_products_two_main">
              <div class="video_listing_page_product_figure_box_two">
                <figure>
                  <a href="#">
                    <img class="lazy" src={poster} />
                  </a>
                </figure>

                <a
                  href="#"
                  class="video_listing_page_product_figure_tag_parent_link_two"
                >
                  <span>
                    <strong>Video Name</strong>
                    <small>8,964 views</small>
                  </span>
                  <object>
                    <a>
                      <i class="fal fa-plus"></i>
                    </a>
                  </object>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="video_listing_page_section">
        <div class="custom_container">
          <div class="video_listing_page_products">
            <ul>
              <li>
                <div class="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img class="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    class="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i class="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
              <li>
                <div class="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img class="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    class="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i class="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
              <li>
                <div class="video_listing_page_product_figure_box">
                  <figure>
                    <a href="#">
                      <img class="lazy" src={poster} />
                    </a>
                  </figure>

                  <a
                    href="#"
                    class="video_listing_page_product_figure_tag_parent_link"
                  >
                    <span>
                      <strong>Video Name</strong>
                      <small>8,964 views</small>
                    </span>
                    <object>
                      <a>
                        <i class="fal fa-plus"></i>
                      </a>
                    </object>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="video_listing_page_section_two">
        <div class="custom_container">
          <div class="video_listing_page_products_two">
            <div class="video_listing_page_products_two_main">
              <div class="video_listing_page_product_figure_box_two">
                <figure>
                  <a href="#">
                    <img class="lazy" src={Video_box} />
                  </a>
                </figure>

                <a
                  href="#"
                  class="video_listing_page_product_figure_tag_parent_link_two"
                >
                  <span>
                    <strong>Video Name</strong>
                    <small>8,964 views</small>
                  </span>
                  <object>
                    <a>
                      <i class="fal fa-plus"></i>
                    </a>
                  </object>
                </a>
              </div>
            </div>
            <div class="video_listing_page_products_two_main">
              <div class="video_listing_page_product_figure_box_two">
                <figure>
                  <a href="#">
                    <img class="lazy" src={poster} />
                  </a>
                </figure>

                <a
                  href="#"
                  class="video_listing_page_product_figure_tag_parent_link_two"
                >
                  <span>
                    <strong>Video Name</strong>
                    <small>8,964 views</small>
                  </span>
                  <object>
                    <a>
                      <i class="fal fa-plus"></i>
                    </a>
                  </object>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHeader;
