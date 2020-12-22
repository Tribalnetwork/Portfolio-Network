import React from "react";

import { Auth } from "aws-amplify";
import Container from "../Container";
import Button from "../Button";
import UserContext from "../UserContext";
import "./Submit.css";
import ReactPlayer from "react-player";
import { CodeSharp, FormatAlignCenter } from "@material-ui/icons";
import Select from 'react-select'
import axios from 'axios';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

//import { SelectPicker } from 'rsuite';
const benefitbullets = [
  " Free access to the app",
  "Create your Portfolio right on the app and download it at any time ",
  "Get help to make even more Projects",
  "Get Donations",
  "Get Feedback on your productions",
  "Get a professional review from the TFC (Tribal Film Council)",
  "Get help finding and entering your films into festivals",
  "Make connections in your industry",
  "Get your career Started",
];

var   queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var requestedId = JSON.stringify(urlParams.get("id"));
//  gets the user id of the user logged in
var requestingName = localStorage.getItem('CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.LastAuthUser');
var requestingUserData = localStorage.getItem(`CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.${requestingName}.userData`);
var parsed = JSON.parse(requestingUserData);
var requestingId = JSON.stringify(parsed.UserAttributes[0].Value)


const options = [
  { value: 'drama', label: 'Drama'  },
  { value: 'romance', label: 'Romance' },
  { value: 'horror', label: 'Horror' },
  { value: 'family', label: 'Family'  },
  { value: 'animation', label: 'Animation' },
  { value: 'documentary', label: 'Documentary' },
  { value: 'sport', label: 'Sport'  },
  { value: 'sci-fi', label: 'Sci-Fi' },
  { value: 'action', label: 'Action' },
  { value: 'comedy', label: 'Comedy'  },
  { value: 'musical', label: 'Musical' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'experimental', label: 'Experimental'  },
  { value: 'talks', label: 'Talks' },


]

const customStyles = {
  menu: (provided, state) => ({
   backgroundColor: "transparent"
  
  }),

  control: (_, { selectProps: { width } }) => ({
    backgroundColor: "transparent",
    height: 35,
    borderRadius: 15,
    border: "2px solid gold"

   
  }),

  singleValue: (provided, state) => {

   
  }
  ,

  input: (provided, state) => ({
    color: "white",
    fontFamily: "Roboto",
    backgroundColor: "transparent",
  }),

  placeholder: (provided, state) => ({
    color: "white",
    fontFamily: "Roboto",
    textalign: "center", 
    
    
  }),

  dropdownIndicator: (provided, state) => ({
     display: "none",
  }),

  menuList: (provided, state) => ({
  color : "white",
  }),
  
  singleValue: (provided, state) => ({
    color: "white",
    position: "center",
   })
 
  
}

 

const maxinput = 8;

class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: false,
      index: 0,
      Name:"",
      Email: "",
      Phone: "",
      UserID:"",
      MovieID: "",
      FilmInput: "",
      FilmTrailerInput:"",
      StatusIndicator: 0,
      FilmLink: "",
      Synopsis: "", 


      
      
    };
    this.handleEnter = this.handleEnter.bind(this);
   //var video= https://submit-studio-background.s3.us-east-2.amazonaws.com/48+4min.mp4
  

   // console.log("this is the current state", this.state.list);
 
    console.log("REQUEST ID", requestingId)

    var result = null;
  
  

   
    
  }

  static contextType = UserContext;

  signOut() {
    Auth.signOut()
      .then(() => {
        this.props.history.push("/auth");
      })
      .catch((err) => console.log("error signing out... " + err));
  }

  componentDidMount() {
    this.setState({MovieID: ((new Date()).getTime())})
    this.setState({ StatusIndicator: 0 })
    this.setState({UserID: requestingId})
   
  
  }

  

  handleEnter(event)
  {
    if (event.code = "Enter") {
     // console.log("key press is ", event)
      this.setState({ index: ((this.state.index % maxinput) + 1) })
    }
    
  }
  render() {
    const hasAccess = this.context.hasAccess;
   
   
    return (
   
    <div className={"submitcontainer"}>
        {console.log("MovieID  ", this.state.MovieID)}
        {console.log("new status indicator ", this.state.StatusIndicator)}
       <div className={"videosubmit"}>
       <ReactPlayer
            className={"backVideo"}
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            width="100%"
            height="100%"
            playing={true}
            loop={true}
            
          
          />
        </div>

  <div className={"overlayercontainer"}>
        { this.state.index!=2 && this.state.index!=5 && 
        <div className={"listcontainer"}>
          <button onClick={() => this.setState({ list: !this.state.list })} className={"infobutton"}>
            {" "}
            Why Submit your Film ?{" "}
          </button>

          {this.state.list === true && (
            <div className="bullets">
           
              {benefitbullets.map((benefit) => (
                <div className={"Benefitlist"} key={benefit}>
                  <ul>
                    <li> {benefit}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        }

{/*start of info section ?*/}
<div className={"InfoSection"}>
 
         
 {this.state.index == 0 &&
  
     <form  className={"inputcontainer"}>
     <label for="email">Enter your Email</label>
     <input
       type="email"
       placeholder="Examplee@email.com"
     required
     pattern="\A[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@↵
     (?:[A-Z0-9-]+\.)+[A-Z]{2,6}\Z"
       onChange={(value) => this.setState({ Email: value.target.value })}
     
       value={this.state.Email}
       
   ></input>
   
     {console.log("value of email " , this.state.Email )}
     </form>

              
            }
            
            {this.state.index ===1 &&
            <form className={"inputcontainer"}>
              <label for="telephone">Enter phone number</label>
            <input type="tel"
              placeholder="xxx-xxx-xxxx"
              required
              pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
              onChange={(value) => this.setState({ Phone: value.target.value })}
              value={this.state.Phone}
              
              >

              </input>
             
            </form>
            }

{this.state.index ===2 &&
            <div className={"termcontainer"}>
              <p >
                Terms and Conditions Welcome to TribalNetwork! These terms and
                conditions outline the rules and regulations for the use of
                Tribal's Website, located at TribalNetwork.com. By accessing this
                website we assume you accept these terms and conditions. Do not
                continue to use TribalNetwork if you do not agree to take all of
                the terms and conditions stated on this page. The following
                terminology applies to these Terms and Conditions, Privacy
                Statement and Disclaimer Notice and all Agreements: "Client",
                "You" and "Your" refers to you, the person log on this website and
                compliant to the Company’s terms and conditions. "The Company",
                "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
                "Parties", or "Us", refers to both the Client and ourselves. All
                terms refer to the offer, acceptance and consideration of payment
                necessary to undertake the process of our assistance to the Client
                in the most appropriate manner for the express purpose of meeting
                the Client’s needs in respect of provision of the Company’s stated
                services, in accordance with and subject to, prevailing law of
                Netherlands. Any use of the above terminology or other words in
                the singular, plural, capitalization and/or he/she or they, are
                taken as interchangeable and therefore as referring to same.
                Cookies We employ the use of cookies. By accessing TribalNetwork,
                you agreed to use cookies in agreement with the Tribal's Privacy
                Policy. Most interactive websites use cookies to let us retrieve
                the user’s details for each visit. Cookies are used by our website
                to enable the functionality of certain areas to make it easier for
                people visiting our website. Some of our affiliate/advertising
                partners may also use cookies. License Unless otherwise stated,
                Tribal and/or its licensors own the intellectual property rights
                for all material on TribalNetwork. All intellectual property
                rights are reserved. You may access this from TribalNetwork for
                your own personal use subjected to restrictions set in these terms
                and conditions. You must not: Republish material from
                TribalNetwork Sell, rent or sub-license material from
                TribalNetwork Reproduce, duplicate or copy material from
                TribalNetwork Redistribute content from TribalNetwork This
                Agreement shall begin on the date hereof. Our Terms and Conditions
                were created with the help of the Terms And Conditions Generator
                and the Privacy Policy Generator. Parts of this website offer an
                opportunity for users to post and exchange opinions and
                information in certain areas of the website. Tribal does not
                filter, edit, publish or review Comments prior to their presence
                on the website. Comments do not reflect the views and opinions of
                Tribal,its agents and/or affiliates. Comments reflect the views
                and opinions of the person who post their views and opinions. To
                the extent permitted by applicable laws, Tribal shall not be
                liable for the Comments or for any liability, damages or expenses
                caused and/or suffered as a result of any use of and/or posting of
                and/or appearance of the Comments on this website. Tribal reserves
                the right to monitor all Comments and to remove any Comments which
                can be considered inappropriate, offensive or causes breach of
                these Terms and Conditions. You warrant and represent that: You
                are entitled to post the Comments on our website and have all
                necessary licenses and consents to do so; The Comments do not
                invade any intellectual property right, including without
                limitation copyright, patent or trademark of any third party; The
                Comments do not contain any defamatory, libelous, offensive,
                indecent or otherwise unlawful material which is an invasion of
                privacy The Comments will not be used to solicit or promote
                business or custom or present commercial activities or unlawful
                activity. You hereby grant Tribal a non-exclusive license to use,
                reproduce, edit and authorize others to use, reproduce and edit
                any of your Comments in any and all forms, formats or media.
                Hyperlinking to our Content The following organizations may link
                to our Website without prior written approval: Government
                agencies; Search engines; News organizations; Online directory
                distributors may link to our Website in the same manner as they
                hyperlink to the Websites of other listed businesses; and System
                wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site. These
                organizations may link to our home page, to publications or to
                other Website information so long as the link: (a) is not in any
                way deceptive; (b) does not falsely imply sponsorship, endorsement
                or approval of the linking party and its products and/or services;
                and (c) fits within the context of the linking party’s site. We
                may consider and approve other link requests from the following
                types of organizations: commonly-known consumer and/or business
                information sources; dot.com community sites; associations or
                other groups representing charities; online directory
                distributors; internet portals; accounting, law and consulting
                firms; and educational institutions and trade associations. We
                will approve link requests from these organizations if we decide
                that: (a) the link would not make us look unfavorably to ourselves
                or to our accredited businesses; (b) the organization does not
                have any negative records with us; (c) the benefit to us from the
                visibility of the hyperlink compensates the absence of Tribal; and
                (d) the link is in the context of general resource information.
                These organizations may link to our home page so long as the link:
                (a) is not in any way deceptive; (b) does not falsely imply
                sponsorship, endorsement or approval of the linking party and its
                products or services; and (c) fits within the context of the
                linking party’s site. If you are one of the organizations listed
                in paragraph 2 above and are interested in linking to our website,
                you must inform us by sending an e-mail to Tribal. Please include
                your name, your organization name, contact information as well as
                the URL of your site, a list of any URLs from which you intend to
                link to our Website, and a list of the URLs on our site to which
                you would like to link. Wait 2-3 weeks for a response. Approved
                organizations may hyperlink to our Website as follows: By use of
                our corporate name; or By use of the uniform resource locator
                being linked to; or By use of any other description of our Website
                being linked to that makes sense within the context and format of
                content on the linking party’s site. No use of Tribal's logo or
                other artwork will be allowed for linking absent a trademark
                license agreement. iFrames Without prior approval and written
                permission, you may not create frames around our Webpages that
                alter in any way the visual presentation or appearance of our
                Website. Content Liability We shall not be hold responsible for
                any content that appears on your Website. You agree to protect and
                defend us against all claims that is rising on your Website. No
                link(s) should appear on any Website that may be interpreted as
                libelous, obscene or criminal, or which infringes, otherwise
                violates, or advocates the infringement or other violation of, any
                third party rights. Your Privacy Please read Privacy Policy
                Reservation of Rights We reserve the right to request that you
                remove all links or any particular link to our Website. You
                approve to immediately remove all links to our Website upon
                request. We also reserve the right to amen these terms and
                conditions and it’s linking policy at any time. By continuously
                linking to our Website, you agree to be bound to and follow these
                linking terms and conditions. Removal of links from our website If
                you find any link on our Website that is offensive for any reason,
                you are free to contact and inform us any moment. We will consider
                requests to remove links but we are not obligated to or so or to
                respond to you directly. We do not ensure that the information on
                this website is correct, we do not warrant its completeness or
                accuracy; nor do we promise to ensure that the website remains
                available or that the material on the website is kept up to date.
                Disclaimer To the maximum extent permitted by applicable law, we
                exclude all representations, warranties and conditions relating to
                our website and the use of this website. Nothing in this
                disclaimer will: limit or exclude our or your liability for death
                or personal injury; limit or exclude our or your liability for
                fraud or fraudulent misrepresentation; limit any of our or your
                liabilities in any way that is not permitted under applicable law;
                or exclude any of our or your liabilities that may not be excluded
                under applicable law. The limitations and prohibitions of
                liability set in this Section and elsewhere in this disclaimer:
                (a) are subject to the preceding paragraph; and (b) govern all
                liabilities arising under the disclaimer, including liabilities
                arising in contract, in tort and for breach of statutory duty. As
                long as the website and the information and services on the
                website are provided free of charge, we will not be liable for any
                loss or damage of any nature.
                
            </p>
           
              
            </div>
            }
            
            {this.state.index ===3 &&
            <div className={"uploadcontainer"}>
              <label for="film">Upload Your Film</label>
              <input
                type="file"
                accept="video/*"
                required
                onChange={(value)=> this.setState({ FilmInput: value.target.files[0] })}
              />
                 {console.log( "files ", this.state.FilmInput)}

             
              {console.log("film input data value ", this.state.FilmInput)}
            </div>
            }
            
            {this.state.index ===4 &&
            <div className={"uploadcontainer"}>
              <label for="filmTitle"> Enter The Film Title</label>
            <input type="text" styles={{cursor: "none,", border:"2px solid gold"} }required   >

              </input >
             </div>
            }

        {this.state.index === 5 &&
            <div className={"genre"}>
              <Select options={options} placeholder={"Select Genre"} styles={customStyles} />
            </div>
          }

            
{this.state.index ===6 &&
            <div className={"uploadcontainer"}>
              <label for="Trailer">Upload Your Trailer</label>
              <input
                type="file"
                accept="video/*"
                required
                onChange={(value)=> this.setState({ FilmTrailerInput: value.target.files[0] })}
              />
              {console.log("this is the current film data " , this.state.FilmInput)}
            </div>
          }

            

        {this.state.index == 7 &&
            <div className={"uploadcontainer"}>
              <label for="Synopsis">Synopsis</label>
              <textarea name="message" rows="10" cols="30"
                value={this.state.Synopsis}
                onChange={(object) => this.setState({Synopsis: object.target.value})}
              >

              </textarea>
              {console.log("synosis : ", this.state.Synopsis)}
              </div>
              
          
          }
          {this.state.index == 8 &&
            <div className={"uploadcontainer"}>
              <label for="Coverart">Upload Your CoverArt</label>
              <input type="file" accept="image/*" required ></input>
            </div>
          
          }

       <div className={"lastinput"}>
            {this.state.index > 0 && this.state.index<maxinput &&
              <button onClick={() => { this.setState({ index: ((this.state.index % maxinput) - 1) }) }}
              type="submit"
              > Previous </button>
            }

            {this.state.index >= 0 && this.state.index<maxinput && 

              <button onClick={() => { this.setState({ index: ((this.state.index % maxinput) + 1) }) }}
              
              > Next </button>
            }


            </div>      

            {this.state.index ===(maxinput+1) && 

<div className="thanks">
  <p> Thank you very much for submitting your film with Tribal</p>

</div>


}

            
        <div  className={"computerscreenrequire"}>
          <p> Please login on a laptop or computer to do a submit request</p>
        </div>

</div> 
          
</div>
      {/*wrapper overlay container end */}  
      </div>
    );
  }
}

/* dont know how the style is apply because i didnt see any change */
const styles = {
  media: {
    backgroundColor: "red",
    width: "33%",
  },
};

export default Submit;
