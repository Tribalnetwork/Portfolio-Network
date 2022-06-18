import React from "react";
import "./css/dashboard.css";
import Profile from "./Profile";
import Password from "./Password";
import Email from "./Email";
// import CreditCard from "./CreditCard";
import Billing from "./Billing";
import Policies from "./Policies";

import SideBarTwo from "./SideBarTwo";

const Setting = () => {

  return (
    <>
     <div class="page_parent">   
    
       <section class="profile_page_section">
          <div class="custom_container">
          <div class="profile_page_section_main">
            <div class="profile_page_main_heading">
              <h6>Account Settings</h6>
            </div>
            <div class="inner_container">
              <div class="pofile_page_main_box">
           
             <SideBarTwo />
              <div class="profile_tabs_data_section">
              <Profile />
              <Password /> 
              <Email />
              {/* <CreditCard />  */}
              <Billing />
              <Policies />
              </div>
             
            </div>
            </div>
            </div>
            </div>
            </section>
     
       </div>   
     

    </>
  );
};

export default Setting;
