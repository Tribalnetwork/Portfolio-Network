import React from 'react'
import {Amplify,Storage } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { getUser} from '../graphql/queries'
import { createGig,UpdateUser } from '../graphql/mutations'
import awsconfig from '../aws-exports';
import '@aws-amplify/ui/dist/style.css';
import UserContext from '../UserContext'
import './PostGig.css';
import {Button, IconButton, Input} from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


Amplify.configure(awsconfig);

export default class PostGig extends React.Component {
  
  static contextType = UserContext  
  state = {
    page:1,
    imgUrl:null,
    title:null,
    genre:null,
    synopsis:null,
    budgets:null,
    pro_dates:null,
    main_position:null,
    pos_and_rates:null,
    exe_notes:null,
    stakeholders:null,
    audience:null,
    budgets_class:"hidden_class",
    pro_dates_class:"hidden_class",
    pos_and_rates_class:"hidden_class",
    exe_notes_class:"hidden_class",
    stakeholders_class:"hidden_class",
    audience_class:"hidden_class",

  }

  handleChange=(name,event)=>{
    this.setState({
        [name]:event.target.value
    })
  }
  changePage=()=>{
    if(this.state.page===1){
      this.setState({
        page:2
      });
    }
    else{
      this.setState({
        page:1
      })
    }
  }
  toggleClass=(class_name)=>{
    if(this.state[class_name]==='active_class'){this.setState({[class_name]:'hidden_class'});}
    else{this.setState({[class_name]:'active_class'});}
  }
async addPhoto(evt) {
  const uuidv4 = require("uuid/v4");
    const newId=uuidv4();
  const name="events_n_gigs/"+newId+".png";
  Storage.put(name, evt.target.files[0], {
        contentType: 'image/png',
        ACL: 'public-read',
        visibility: 'public',
        level: 'public'
    })
    .then (result=> {
        console.log(result);
        this.setState({
            imgUrl:"https://d202tggnzywgd9.cloudfront.net/public/"+name
        })
    })
    .catch(err => console.log(err));
}
async submitPost(){
  const uuidv4 = require("uuid/v4");
    const newId=uuidv4();
  const data = {
    id: newId,
    imageUrl: this.state.imgUrl,
    Title: this.state.title,
    Genre: this.state.genre,
    Synopsis: this.state.synopsis,
    Budget: this.state.budgets,
    Pro_dates: this.state.pro_dates,
    Position: "Atlanta",
    Rates: this.state.pos_and_rates,
    Exe_notes: this.state.exe_notes,
    Stakeholders: this.state.stakeholders,
    Audience: this.state.audience,
    gigUserId: this.context.user.attributes.sub
  }
  console.log(await API.graphql(graphqlOperation(createGig, { input: data }))) ;
  alert("you successfully posted a gig!")
}
render(){
  
  if(this.state.page==1){
  return(
    <body>
    <div className="pageTitle">
    <IconButton className="backbutton" edge="end" color="white"><ArrowBackIosIcon className="backIcon" /></IconButton>
      <h2 className="text">Post a Gig</h2>
    </div>
    <div className="PostaGig">
    
    <div className="gig-pic-div">
        <input className="input-button" type="file" id="img" name="img" accept="image/*" onChange={event =>this.addPhoto(event)}/>
    <img className="gig-pic"  src={this.state.imgUrl} alt={"+"} />
    
    </div>
    <TextField
      id="title"
      label="title"
      value={this.state.title}
      onChange={event=>this.handleChange('title',event)}
      margin="normal"
      variant="outlined"
    />
    <TextField
      id="genre"
      label="genre"
      value={this.state.genre}
      onChange={event=>this.handleChange('genre',event)}
      margin="normal"
      variant="outlined"
    />
    <TextField
      id="synopsis"
      label="synopsis"
      value={this.state.synopsis}
      onChange={event=>this.handleChange('synopsis',event)}
      margin="normal"
      variant="outlined"
      multiline
      rows={4}
    />
      </div>
      <div>
     <IconButton className="forwardbutton" edge="end" color="white" onClick={this.changePage}><ArrowForwardIosIcon className="forwardIcon" /></IconButton>
      </div>
    </body>
  )}
  else{
    return (            
  <body>
    <div className="pageTitle">
    <IconButton className="backbutton" edge="end" color="white" onClick={this.changePage}><ArrowBackIosIcon className="backIcon" /></IconButton>
      <h2 className="text">Details</h2>
    </div>
    <div className="PostaGigDetails">

        <div className="button__withArrow" >
          <div className="item-wrapper" onClick={()=>this.toggleClass('budgets_class')}>
            <Button className="settings__Button">Budget</Button>
            <ExpandMoreIcon fontSize="large" className="downIcon"   />
          </div>
          <textarea className={this.state.budgets_class} id="budgets" name="budgets" rows="8" value={this.state.budgets} onChange={event=>this.handleChange('budgets',event)}></textarea>
        </div>

        <div className="button__withArrow" >
          <div className="item-wrapper" onClick={()=>this.toggleClass('pro_dates_class')}>
            <Button className="settings__Button">Production dates</Button>
            <ExpandMoreIcon fontSize="large" className="downIcon"   />
          </div>
          <textarea className={this.state.pro_dates_class} id="pro_dates" name="pro_dates" rows="8" value={this.state.pro_dates} onChange={event=>this.handleChange('pro_dates',event)}></textarea>
        </div>

        <div className="button__withArrow" >
          <div className="item-wrapper" onClick={()=>this.toggleClass('pos_and_rates_class')}>
            <Button className="settings__Button">Positions and Rates</Button>
            <ExpandMoreIcon fontSize="large" className="downIcon"   />
          </div>
          <textarea className={this.state.pos_and_rates_class} id="pos_and_rates" name="pos_and_rates" rows="8" value={this.state.pos_and_rates} onChange={event=>this.handleChange('pos_and_rates',event)}></textarea>
        </div>

        <div className="button__withArrow" >
          <div className="item-wrapper" onClick={()=>this.toggleClass('exe_notes_class')}>
            <Button className="settings__Button">Executive Notes</Button>
            <ExpandMoreIcon fontSize="large" className="downIcon"   />
          </div>
          <textarea className={this.state.exe_notes_class} id="exe_notes" name="exe_notes" rows="8" value={this.state.exe_notes} onChange={event=>this.handleChange('exe_notes',event)}></textarea>
        </div>

        <div className="button__withArrow" >
          <div className="item-wrapper" onClick={()=>this.toggleClass('stakeholders_class')}>
            <Button className="settings__Button">Stakeholders</Button>
            <ExpandMoreIcon fontSize="large" className="downIcon"   />
          </div>
          <textarea className={this.state.stakeholders_class} id="stakeholders" name="stakeholders" rows="8" value={this.state.stakeholders} onChange={event=>this.handleChange('stakeholders',event)}></textarea>
        </div>

        <div className="button__withArrow" >
          <div className="item-wrapper" onClick={()=>this.toggleClass('audience_class')}>
            <Button className="settings__Button">Target Audience</Button>
            <ExpandMoreIcon fontSize="large" className="downIcon"   />
          </div>
          <textarea className={this.state.audience_class} id="audience" name="audience" rows="8" value={this.state.audience} onChange={event=>this.handleChange('audience',event)}></textarea>
        </div>
    </div>
    <div className="submit">
    <Button variant="contained"  size="large" onClick={this.submitPost.bind(this)}>Post</Button>
    </div>
    </body>)
    }
}
}

