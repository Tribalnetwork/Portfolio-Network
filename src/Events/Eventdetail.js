import React from 'react'
import Amplify from 'aws-amplify';
import queryString from 'query-string';
import { API, graphqlOperation } from 'aws-amplify'
import { getGig } from '../graphql/queries'
import awsconfig from '../aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import UserContext from '../UserContext'
import './Eventdetail.css';
import {Button, IconButton, Input} from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
Amplify.configure(awsconfig);

export default class Eventdetail extends React.Component {
    static contextType = UserContext

    constructor(props) {
      super(props)
      this.id = queryString.parse(this.props.location.search).id
      this.state = {
        imgUrl:"https://images.unsplash.com/photo-1530023367847-a683933f4172?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        title:"Events1",
        synopsis:"new years dinner",
        dates:"1/1/21",
        main_position:"GA",
        time:"6pm to 8pm",
        bring:"a glass of wine",
          synopsis_class:"hidden_class",
          date_n_time_class:"hidden_class",
          position_class:"hidden_class",
          bring_class:"hidden_class"
      };
    }
    toggleClass=(class_name)=>{
        if(this.state[class_name]==='active_class'){this.setState({[class_name]:'hidden_class'});}
        else{this.setState({[class_name]:'active_class'});}
      }
    render(){
        return (
            <body>
                <div className="pageTitle">
                <Link to={'/events'} ><IconButton className="backbutton" edge="end" color="white" ><ArrowBackIosIcon className="backIcon" /></IconButton></Link>
                    <h2 className="text">{this.state.title}</h2>
                 </div>
                 <div className="PostEventDetails">
                    <img className="event-pic"  src={this.state.url} alt={"+"} />
                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('date_n_time_class')}>
                        <Button className="settings__Button">Date and Time</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state. date_n_time_class}>
                            <p>{this.state.dates}{this.state.time}</p>
                        </div>
                    </div>

                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('position_class')}>
                        <Button className="settings__Button">Main Location</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state.position_class}>
                            <p>{this.state.main_position}</p>
                        </div>
                    </div>

                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('bring_class')}>
                        <Button className="settings__Button">Bring</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state.bring_class}>
                            <p>{this.state.bring}</p>
                        </div>
                    </div>

                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('synopsis_class')}>
                        <Button className="settings__Button">Description</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state.synopsis_class}>
                            <p>{this.state.synopsis}</p>
                        </div>
                    </div>

                </div>
                <div className="submit">
                    <Button variant="contained"  size="large" >Apply</Button>
                </div>
            </body>
        )
    }
}