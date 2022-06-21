import React from "react";
import "./css/dashboard.css";
import $ from "jquery";
const SideBarTwo = () => {
 
  React.useEffect(() => {
  $(document).ready(function () {
    $(".hamburger_img").click(function () {
      $(".top_responsive_header").toggleClass("active");
    });


    $(".personal_info").click(function () {
      if (!$(this).hasClass("active")) {
        $(".single_pofile_tab.active").removeClass("active");
        $(this).addClass("active");
      }
    });
    $(".password").click(function () {
      if (!$(this).hasClass("active")) {
        $(".single_pofile_tab.active").removeClass("active");
        $(this).addClass("active");
      }
    });
    $(".loyalty_points").click(function () {
      if (!$(this).hasClass("active")) {
        $(".single_pofile_tab.active").removeClass("active");
        $(this).addClass("active");
      }
    });

    $(".activity_logs").click(function () {
      if (!$(this).hasClass("active")) {
        $(".single_pofile_tab.active").removeClass("active");
        $(this).addClass("active");
      }
    });
    $(".change_password").click(function () {
      if (!$(this).hasClass("active")) {
        $(".single_pofile_tab.active").removeClass("active");
        $(this).addClass("active");
      }
    });
    $(".Policies").click(function () {
      if (!$(this).hasClass("active")) {
        $(".single_pofile_tab.active").removeClass("active");
        $(this).addClass("active");
      }
    });
  });


  $(".personal_info").click(function () {
    $("#personal_info_tab_content").css("display", "block");
    $("#loyalty_points_tab_content").css("display", "none");
    $("#change_password_tab_content").css("display", "none");
    $("#view_order_tab_content").css("display", "none");
    $("#policies_tab_content").css("display", "none");
    $("#activity_logs_tab_content").css("display", "none");
    $("#billing_tab_content").css("display", "none");
  });

  $(".loyalty_points").click(function () {
    $("#personal_info_tab_content").css("display", "none");
    $("#loyalty_points_tab_content").css("display", "block");
    $("#change_password_tab_content").css("display", "none");
    $("#activity_logs_tab_content").css("display", "none");
    $("#policies_tab_content").css("display", "none");
    $("#view_order_tab_content").css("display", "none");
    $("#billing_tab_content").css("display", "none");
  });

  $(".change_password").click(function () {
    $("#personal_info_tab_content").css("display", "none");
    $("#loyalty_points_tab_content").css("display", "none");
    $("#change_password_tab_content").css("display", "block");
    $("#activity_logs_tab_content").css("display", "none");
    $("#policies_tab_content").css("display", "none");
    $("#view_order_tab_content").css("display", "none");
    $("#billing_tab_content").css("display", "block");
  });

  $(".activity_logs").click(function () {
    $("#personal_info_tab_content").css("display", "none");
    $("#loyalty_points_tab_content").css("display", "none");
    $("#change_password_tab_content").css("display", "none");
    $("#policies_tab_content").css("display", "none");
    $("#activity_logs_tab_content").css("display", "block");
    $("#view_order_tab_content").css("display", "none");
    $("#billing_tab_content").css("display", "none");
  });
  $(".password").click(function () {
    $("#personal_info_tab_content").css("display", "none");
    $("#loyalty_points_tab_content").css("display", "none");
    $("#change_password_tab_content").css("display", "none");
    $("#activity_logs_tab_content").css("display", "none");
    $("#policies_tab_content").css("display", "none");
    $("#billing_tab_content").css("display", "none");
    $("#view_order_tab_content").css("display", "block");
  });
  $(".Policies").click(function () {
    $("#personal_info_tab_content").css("display", "none");
    $("#loyalty_points_tab_content").css("display", "none");
    $("#change_password_tab_content").css("display", "none");
    $("#activity_logs_tab_content").css("display", "none");
    $("#view_order_tab_content").css("display", "none");
    $("#billing_tab_content").css("display", "none");
    $("#policies_tab_content").css("display", "block");
  });
 
  

},[])

  return (
    <>
            <div class="pofile_list_section">
                  <div class="responsive_selector_text"> <a class="inner_hamburger_img"><i class="fad fa-bars"></i></a></div>
                 

                  <div class="pofile_list_details">
                    <div class="pofile_list_details_main">
                      <div class="single_pofile_tab_heading">
                        <small>Basics</small>
                      </div>
                      <div class="single_pofile_tab personal_info active">
                        <small>Profile</small>
                      </div>
                      <div class="single_pofile_tab password">
                        <small>Password</small>
                      </div>
                      <div class="single_pofile_tab loyalty_points">
                        <small>Email</small>
                      </div>
                    </div>
                    <div class="pofile_list_details_main">
                      <div class="single_pofile_tab_heading">
                        <small>Payment</small>
                      </div>
                      <div class="single_pofile_tab activity_logs">
                        <small>Crypto</small>
                      </div>
                      <div class="single_pofile_tab change_password">
                        <small>Billing</small>
                      </div>
                    </div>
                    <div class="pofile_list_details_main">
                      <div class="single_pofile_tab_heading">
                        <small>Misc</small>
                      </div>
                      <div class="single_pofile_tab Policies">
                        <small>Terms & Policies</small>
                      </div>
                    </div>
                  </div>
                </div>

     
    </>
  );
};

export default SideBarTwo;
