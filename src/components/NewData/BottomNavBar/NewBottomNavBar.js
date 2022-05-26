import React from "react";
import "../StyleFolder/Stylefile.css";
import { Link } from 'react-router-dom';
const NewBottomNavBar = () => {
  return (
    <>
<footer>
<div class="custom_container">
<div class="footer_list">
<Link to="/home">
  <i class="fal fa-home"></i>
  <span>Home</span>
</Link>
<Link to="/search">
  <i class="fal fa-search"></i>
  <span>Search</span>
</Link>
<Link to="/streams">
  <i class="fal fa-bars"></i>
  <span>Tribal</span>
</Link>
<Link to="/profile">
  <i class="fal fa-user-friends"></i>
  <span>Social</span>
</Link>
<Link to="/settings">
  <i class="fal fa-cog"></i>
  <span>Settings</span>
</Link>

</div>

</div>

</footer>
    </>
    
    );
  };
  
  export default NewBottomNavBar;