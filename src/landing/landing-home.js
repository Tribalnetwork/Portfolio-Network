import React from 'react';
import './landing-home.css';
//import './App.css'
import './responsive-styles.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (

  <div className="Home">
      <div className="HomePage">

        <h1>TRIBAL<br/>NETWORK</h1>
        <h2>The Network for the modern entertainer</h2>


      <div className="navigation">

        <div>
        <Link to={'/explore'} style={{cursor: 'pointer'}} class='link'><div class='button'>LIVE</div></Link>
        
        </div>

        <div>
        <Link to={'/auth'} style={{cursor: 'pointer'}} class='link'><div class='button'>LOG IN</div></Link>
        </div>

        <div>
        <Link to={'/landing/Submit'} style={{cursor: 'pointer'}} class='link'><div class='button'>SUBMIT</div></Link>
        </div>

    </div>
        
      </div>

  </div>
    

  );

}


export default Home;
