import React from 'react'
import {Amplify,Storage } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { getUser} from '../graphql/queries'
import { createGig,UpdateUser } from '../graphql/mutations'
import awsconfig from '../aws-exports';
import '@aws-amplify/ui/dist/style.css';
import UserContext from '../UserContext'
import './PostEvent.css';
import {Button, IconButton, Input} from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";


Amplify.configure(awsconfig);

export default class PostEvent extends React.Component {
  
  static contextType = UserContext  
  state = {
    imgUrl:null,
    title:null,
    synopsis:null,
    pro_dates:null,
    main_position:null,
    time:null,
    bring:null,

  }

  handleChange=(name,event)=>{
    this.setState({
        [name]:event.target.value
    })
  }




render(){
  
  return(
    <body>
    <div className="pageTitle">
      <Link to="/Events">
    <IconButton className="backbutton" edge="end" color="white"><ArrowBackIosIcon className="backIcon" /></IconButton></Link>
      <h2 className="text">Post an Event</h2>
    </div>
    <div className="PostanEvent">
    
    <div className="event-pic-div">
        <input className="input-button" type="file" id="img" name="img" accept="image/*" onChange={event =>this.addPhoto(event)}/>
    <img className="event-pic"  src={this.state.imgUrl} alt={"+"} />
    
    </div>
    <TextField
      id="title"
      label="Event Name"
      value={this.state.title}
      onChange={event=>this.handleChange('title',event)}
      margin="normal"
      variant="outlined"
    />
    <TextField
      id="main_position"
      label="Location"
      value={this.state.main_position}
      onChange={event=>this.handleChange('main_position',event)}
      margin="normal"
      variant="outlined"
    />
        <TextField
      id="pro_dates"
      label="Date"
      value={this.state.pro_dates}
      onChange={event=>this.handleChange('pro_dates',event)}
      margin="normal"
      variant="outlined"
    />
            <TextField
      id="time"
      label="Time"
      value={this.state.pro_dates}
      onChange={event=>this.handleChange('time',event)}
      margin="normal"
      variant="outlined"
    />
                <TextField
      id="bring"
      label="Bring"
      value={this.state.bring}
      onChange={event=>this.handleChange('bring',event)}
      margin="normal"
      variant="outlined"
    />
    <TextField
      id="synopsis"
      label="Details"
      value={this.state.synopsis}
      onChange={event=>this.handleChange('synopsis',event)}
      margin="normal"
      variant="outlined"
      multiline
      rows={4}
    />
      </div>

      <div className="submit">
    <Button variant="contained"  size="large" >Post</Button>
    </div>
    </body>
  )
    
}
}
