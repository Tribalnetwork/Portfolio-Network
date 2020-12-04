import React, { Component } from 'react';  
import "./ProfileMenu.css"



export default class Popup extends React.Component {  
    render() {  
	    return (  
                    <div className='popup'> 
                            {/* <h1 style={{  color: 'white' }}>  MENU </h1> */}
                            <div className="flex-container">

                                    <h1 id="MENU">  MENU </h1>
                                    <hr className="solid" />
                                    <div onClick={() => console.log("Clicked")}  >My Profile</div>
                                    <hr className="solid" /> 
                                    <div>My Studio</div>
                                    <hr className="solid" /> 
                                    <div>What an others see?</div>  
                                    <hr className="solid" /> 
                                    <div style={{color:"#757575"}}>Exit</div>  
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <br/>
                            </div>
                    </div>  

            );  
    }  
}  





