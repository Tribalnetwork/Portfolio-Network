import React from "react";
import "./css/dashboard.css";
import $ from "jquery";



const test = () => {
 
  React.useEffect(() => {
    $(document).ready(function () {
      $(".product_category_slider_four").slick({
        slidesToShow:5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
       arrows: true,
  appendArrows: $('.category_slider_arrow_box'),
  nextArrow: '<a class="category_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
  prevArrow: '<a class="category_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:4,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 2000,
              dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
               autoplay: false,
              autoplaySpeed: 1500,
                   dots: false,
                arrows: true,
            },
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 1500,
                  dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow:2,
              slidesToScroll: 1,
              autoplay: false,
            autoplaySpeed: 1500,
                   dots: false,
               arrows: true,
            },
          },
        ],
      });
    });
  },[])

  return (
    <>
   

  <section class="product_category_section_four">
    <div class="custom_container">
      <div class="common_slider_heading"><h3>My Watchlist</h3></div>
    <div class="product_category_main">
   
    <div class="product_category_list">
    <div class="category_slider_arrow_box_four"></div>
    <ul class="product_category_slider_four">
    <li>
      <div class="product_category_figure_box_four">
        <figure>
          <a href="#"
            ><img class="lazy" src=""
          /></a>
        </figure>
        <div class="product_category_figure_tags_four">
          <a href="#"><span>Season 1<small>Episode 2</small></span> <i class="fal fa-plus"></i></a>
        </div>
      </div>
    </li>
    <li>
      <div class="product_category_figure_box_four">
        <figure>
          <a href="#"
            ><img class="lazy" src=""
          /></a>
        </figure>
        <div class="product_category_figure_tags_four">
          <a href="#"><span>Season 1<small>Episode 2</small></span> <i class="fal fa-plus"></i></a>
        </div>
      </div>
    </li>
    <li>
      <div class="product_category_figure_box_four">
        <figure>
          <a href="#"
            ><img class="lazy" src=""
          /></a>
        </figure>
        <div class="product_category_figure_tags_four">
          <a href="#"><span>Season 1<small>Episode 2</small></span> <i class="fal fa-plus"></i></a>
        </div>
      </div>
    </li>
    <li>
      <div class="product_category_figure_box_four">
        <figure>
          <a href="#"
            ><img class="lazy" src=""
          /></a>
        </figure>
        <div class="product_category_figure_tags_four">
          <a href="#"><span>Season 1<small>Episode 2</small></span> <i class="fal fa-plus"></i></a>
        </div>
      </div>
    </li>
    <li>
      <div class="product_category_figure_box_four">
        <figure>
          <a href="#"
            ><img class="lazy" src=""
          /></a>
        </figure>
        <div class="product_category_figure_tags_four">
          <a href="#"><span>Season 1<small>Episode 2</small></span> <i class="fal fa-plus"></i></a>
        </div>
      </div>
    </li>
    <li>
      <div class="product_category_figure_box_four">
        <figure>
          <a href="#"
            ><img class="lazy" src=""
          /></a>
        </figure>
        <div class="product_category_figure_tags_four">
          <a href="#"><span>Season 1<small>Episode 2</small></span> <i class="fal fa-plus"></i></a>
        </div>
      </div>
    </li>
    </ul>
    </div>
    </div>
    </div>
  </section>  

    </>
  );
};

export default test;
