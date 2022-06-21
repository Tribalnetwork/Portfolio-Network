import React from "react";
import "../../StyleFolder/Stylefile.css";
import $ from "jquery";

const ListPageHeader = () => {
  React.useEffect(() => {
    $('.open_close_nav').click(function(){

      $('.responsive_nav_bar').toggleClass('responsive_bar');
      });

},[])

  return (
    <>
<header>
<div class="custom_container">
    <div class="header_bar">

        <div class="logo">
          <button class="nav_btn open_close_nav" type="button">
            <i class="fas fa-bars"></i>
        </button>
          <a href="index.html" class="web_header_logo"><h4>Tribal Beta</h4></a>
        </div>

        <div class="logo res_header_logo">
          <a href="index.html"><h4>Tribal Beta</h4></a>
        </div>
          
        <div class="nav_bar">
            <ul>
                <form>
                  <div class="header_custom_search_bar"><input type="search" placeholder="Search here " /><i class="fal fa-search"></i></div>
                </form>
            </ul>
            <div class="call_us">
                <a>Login/Register</a>
            </div>
        </div>
        
    </div>
<div class="header_responsive_search_bar">
<form>
<div class="res_header_custom_search_bar"><input type="search" placeholder="Search here " /><i class="fal fa-search"></i></div>
</form>
</div>
</div>
</header> 

<section class="responsive_nav_bar">
<div class="cancle_nav"><a class="open_close_nav"><i class="fas fa-times"></i></a></div>
<div class="responsive_nav">
<ul>
                <li><a>My Film</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Settings</a></li>
                <li><a>Login/Logout</a></li>
                
</ul>
</div>

</section>
</>
);
  };
  
  export default ListPageHeader;