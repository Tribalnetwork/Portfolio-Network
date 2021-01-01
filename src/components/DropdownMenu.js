import React, { Component } from 'react';  
import "./DropdownMenu.css"



export default class Popup extends React.Component {  
    render() {  
	    return (  
                    <div className='popup'> 
                            {/* <h1 style={{  color: 'white' }}>  MENU </h1> */}
                            <div className="flex-container">

                                    <h1 id="MENU">  MENU </h1>
                                    <hr className="solid" />
                                    <div ><a href={this.props.link1}> {this.props.text1} </a> </div>  
                                    <hr className="solid" /> 
                                    <div ><a href={this.props.link2}> {this.props.text2} </a> </div>  
                                    <hr className="solid" /> 
                                    {/* <div onClick={this.props.link3}>{this.props.text3}</div> */}  
                                    <div ><a href={this.props.link3}> {this.props.text3} </a> </div>  
                                    <hr className="solid" /> 
                                    <div onClick={this.props.closePopup} style={{color:"#757575"}}>Exit</div>  
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <br/>
                            </div>
                    </div>  

            );  
    }  
}  





