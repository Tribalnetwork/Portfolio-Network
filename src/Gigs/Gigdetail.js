import React from 'react'
import Amplify from 'aws-amplify';
import queryString from 'query-string';
import { API, graphqlOperation } from 'aws-amplify'
import { getGig } from '../graphql/queries'
import awsconfig from '../aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import UserContext from '../UserContext'
import './Gigdetail.css';
import {Button, IconButton, Input} from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
Amplify.configure(awsconfig);

export default class Gigdetail extends React.Component {
    static contextType = UserContext

    constructor(props) {
      super(props)
      this.id = queryString.parse(this.props.location.search).id
      this.state = {
          url:null,
          synopsis:null,
          title:null,
          dates:null,
          pos_n_rates:null,
          exe_notes:null,
          stakeholders:null,
          audience:null,
          synopsis_class:"hidden_class",
          pro_dates_class:"hidden_class",
          pos_and_rates_class:"hidden_class",
          exe_notes_class:"hidden_class",
          stakeholders_class:"hidden_class",
          audience_class:"hidden_class"
      };
    }
    toggleClass=(class_name)=>{
        if(this.state[class_name]==='active_class'){this.setState({[class_name]:'hidden_class'});}
        else{this.setState({[class_name]:'active_class'});}
      }
    componentDidMount() {
        this.getInfo();
      }
    async getInfo() {
        try {
            const gig = await API.graphql(graphqlOperation(getGig, { id: this.id }));
            const gig_info=gig.data.getGig;
            this.setState({
                url:gig_info.imageUrl,
                title:gig_info.Title,
                synopsis:gig_info.Synopsis,
                dates:gig_info.Pro_dates,
                pos_n_rates:gig_info.Rates,
                exe_notes:gig_info.Exe_notes,
                stakeholders:gig_info.Stakeholders,
                audience:gig_info.Audience,

            });
          } catch (err) { console.log(err) }
    }
    render(){
        return (
            <body>
                <div className="pageTitle">
                <Link to={'/gigs'} ><IconButton className="backbutton" edge="end" color="white" ><ArrowBackIosIcon className="backIcon" /></IconButton></Link>
                    <h2 className="text">{this.state.title}</h2>
                 </div>
                 <div className="PostaGigDetails">
                 <img className="gig-pic"  src={this.state.url} alt={"+"} />
                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('synopsis_class')}>
                        <Button className="settings__Button">Synopsis</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state.synopsis_class}>
                            <p>{this.state.synopsis}</p>
                        </div>
                    </div>

                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('pro_dates_class')}>
                        <Button className="settings__Button">Production Dates</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state.pro_dates_class}>
                            <p>{this.state.dates}</p>
                        </div>
                    </div>

                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('pos_and_rates_class')}>
                        <Button className="settings__Button">Positions and rates</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state.pos_and_rates_class}>
                            <p>{this.state.pos_n_rates}</p>
                        </div>
                    </div>

                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('exe_notes_class')}>
                        <Button className="settings__Button">Executive notes</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state.exe_notes_class}>
                            <p>{this.state.exe_notes}</p>
                        </div>
                    </div>

                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('stakeholders_class')}>
                        <Button className="settings__Button">Stakeholders</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state.stakeholders_class}>
                            <p>{this.state.stakeholders}</p>
                        </div>
                    </div>

                    <div className="button__withArrow" >
                        <div className="item-wrapper" onClick={()=>this.toggleClass('audience_class')}>
                        <Button className="settings__Button">Target Audience</Button>
                        <ExpandMoreIcon fontSize="large" className="downIcon"   />
                        </div>
                        <div className={this.state.audience_class}>
                            <p>{this.state.audience}</p>
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