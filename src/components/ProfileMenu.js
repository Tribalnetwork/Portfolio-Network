import React, { Component } from 'react';  
import "./ProfileMenu.css"



export default class Popup extends React.Component {  
    render() {  
	    return (  
		    <div className='popup'>  
			    <div className='popup_inner'>  
			    <h1 id="MENU"> MENU </h1>
				    <hr  id="unique_divier" /> <br/>
				    <button className="popup_element"><a> My Profile </a> </button> 
				    <br/> <br/><hr  className="popup_diver" /> <br/>

				    <button className="popup_element"><a> My Studio </a> </button> 
				    <br/> <br/><hr  className="popup_diver" /> <br/>
				    <button className="popup_element"><a> What can others see? </a> </button> 
				    <br/> <br/><hr  className="popup_diver" /> <br/>
				    <button  onClick={this.props.closePopup} className="popup_element"  id="EXIT">Exit   </button> 
			    </div>  
		    </div>  
	    );  
    }  
}  





