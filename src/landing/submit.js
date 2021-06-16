import React from "react";
import { useHistory } from 'react-router-dom'
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import "./submit.css";
import Select from 'react-select'
import axios from 'axios';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';

Amplify.configure(awsconfig);

// It easy to add new benefit the page should be able to adjust to accordingly . 
const benefitbullets = [
  "Get feedback from peers and supporters.",
  "Get discounted access.",
  "Get Donations",
  "Get new viewership.",
  "Get reviews from the TFC (Tribal Film Council).",
  "Get help finding and submitting to film festivals.",
  " Create your portfolio right on the app.",
];

//  gets the user id of the user logged in
const requestingName = localStorage.getItem('CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.LastAuthUser');
const requestingUserData = localStorage.getItem(`CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.${requestingName}.userData`);

// This will return user attributes: sub, email, given_name, and varified
const parsed = JSON.parse(requestingUserData);

let requestingId = undefined

if (parsed === null) {
  requestingId = 0;
} else {
  requestingId = JSON.stringify(parsed.UserAttributes[0].Value)
}



//// The max number of input field user on the page
//Updated API Code and added new parameters for films
const maxinput = 9;

class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: false,  //Determine whether to display the benefit list
      index: 0,  // index is the current input that display on the webpage
      Require: "",          // I use this required field to keep track of what input field user skip to give prompt to complete
      Film_id: "",    // FIlm ID create by using get New Date time stamp 
      user_id: "",
      Email: "",
      Phone: "",
      FilmInput: "",      //The Film user is uploading 
      FilmTrailerInput: "",  //Film Trailer user uploading Currently optional 
      film_cover_art: "",
      film_genre: "",
      film_status: 0,
      film_synopsis: "",
      film_title: "",
      url: "",
      imageUrl: "", //url for cover image
      date: "",
      readyToSubmit: "false",
      confirmation: "Thank you very much for submitting your film with Tribal, Please stay on the page until we have confirmation of receipt of your film",
      /* StatusIndicator: 0,   // This indicate the status of the film every new submission start as 0
       FilmLink: "",         //This will be the film link to an S3 buckets 
       backgroundvideo: "",
       film_submitted_date:"",
       film_link:"",
       film_trailer:"",
       film_cover_thumb:"",
       film_credits:"",
       film_year:"",
       film_length:""*/
      muteVideo: false, // true means mute the video and false means don't mute the video
      listGenres: []
    };

    this.Next = this.Next.bind(this);
    this.Previous = this.Previous.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getGenreList = this.getGenreList.bind(this);
  }

  componentDidMount() {
    this.setState({ MovieID: ((new Date()).getTime()) })
    this.setState({ film_status: 0 })
    this.setState({ user_id: requestingId })

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = year + "/" + month + "/" + day;
    this.setState({ date: newdate })
    this.setState({ status: 0 });

    // set genre list
    this.getGenreList()
  }

  // getGenreList from backend
  getGenreList() {
    // 1: get genre list from back end
    axios.get('https://6evel85j84.execute-api.us-east-1.amazonaws.com/default/getGenresList')
      .then(resp => {
        let options = resp.data.body.map(item => { return { value: item.genre_id, label: item.genre_desc } })
        // 2: set genres to select input
        this.setState({ listGenres: options })
      }).catch(err => {
        console.log(err)
      })
  }

  handleChange(event) {
    this.setState({ film_genre: event.value })
  }

  handleCheckBox = () => {
    if (this.state.checkBox === false) {
      this.setState({ checkBox: true });
      this.setState({ status: 3 });
    } else {
      this.setState({ checkBox: false });
      this.setState({ status: 0 });
    }
  }


  Submit = () => {
    this.Next();
    setTimeout(() => {
      if (this.state.readyToSubmit === true) {
        let formData = {
          "user_id": this.state.user_id,
          "film_submitted_date": this.state.date,
          "film_status": this.state.status,
          "film_title": this.state.film_title,
          "film_genre_id": this.state.film_genre,
          "film_synopsis": this.state.film_synopsis,
          "film_link": "",
          "film_trailer": "",
          "film_cover_art": this.state.film_cover_art.name,
          "film_cover_art_type": this.state.film_cover_art.type,
          "film_cover_thumb": "",
          "film_credits": "film credits here",
          "film_year": "1998",
          "film_length": "106",
          "film_file": this.state.FilmInput,
          "content_type": this.state.FilmInput.type
        }
        let dataAsJson = JSON.stringify(formData);
        axios.post("https://j9j2n6zof3.execute-api.us-east-1.amazonaws.com/dev", dataAsJson).then(res => {
          console.log(res.config.data)
          console.log(res)
          console.log(res.data)
          let newurl = res.data.body.url

          // if cover are is not empty then add presigned url to imgaeUrl
          this.state.film_cover_art ?
            this.setState({
              url: newurl,
              imageUrl: res.data.body.url_for_image
            })
            :
            this.setState({
              url: newurl
            })
        })
          .then(() => {
            // submitting film
            axios({
              url: this.state.url,
              method: 'put',
              data: this.state.FilmInput,
              headers: {
                'Content-Type': this.state.FilmInput.type
              }
            })
              .then(res => {
                console.log("Film Submited Successfuly")
                console.log(res)
                this.setState({ confirmation: "Thanks for submitting your film. The Tribal film council will make a determination within 21 days." })
              })
              .catch(err => {
                console.log("ERROR" + err)
                this.setState({ confirmation: "Uh-Oh! There was a problem submitting your film, please try again and if the problem persist, contact customer support." })
              });
            // submitting cover art
            if (this.state.imageUrl) {
              axios({
                url: this.state.imageUrl,
                method: 'put',
                data: this.state.film_cover_art,
                headers: {
                  'Content-Type': this.state.film_cover_art.type
                }
              })
                .then(res => {
                  console.log("COVER IMAGE HAS BEEN ADDED SUCCESSFUL")
                  console.log(res)
                })
                .catch(err => {
                  console.log("ERROR WHILE UPLOADING COVER IMAGE" + err)
                })
            }
          })
      }

    }, 1000);
  }

  ////Function That determine whether to display the nextInput field to user 
  Next() {
    ////keep track of field user left empty
    var Required = ''

    //if user not at the n-1 last input let user continue moving next with input
    if (this.state.index < maxinput - 1) {
      this.setState({ Require: "" })
      this.setState({ index: ((this.state.index % maxinput) + 1) });
    }

    ////check if all the required field are complete 
    //// if not display all the missing field
    //// user can press next to move foward unless all required field are fill out
    if (this.state.index === maxinput - 1) {
      this.setState({ Require: "" })
      if (this.state.Email === "") {
        Required = Required + " Email, "
      }
      if (this.state.Phone === "") {
        Required = Required + " Phone Number,  "
      }

      if (this.state.FilmInput === "") {
        Required = Required + " Upload A Film,  "
      }

      if (this.state.film_title === "") {
        Required = Required + " Title,  "
      }

      if (this.state.film_genre === "") {
        Required = Required + " Genre,  "
      }

      if (this.state.film_synopsis === "") {
        Required = Required + " Synopsis,  "
      }
      // adding film cover art to required fields
      console.log("Cover art name: ", this.state.film_cover_art.name)
      if (this.state.film_cover_art.name === undefined) {
        Required = Required + " Cover art,"
      }
      // user complete all the required fields this essential where I would trigger the logic to storage the film data 
      //create new film table
      //before showing the user the Thank for the submission
      if (Required === "") {
        //before change the input 
        this.setState({ index: ((this.state.index % maxinput) + 1) })
        this.setState({ readyToSubmit: true })
      }
    }
    if (Required !== "") {
      Required = Required + " Field(s) are Required"
      this.setState({ Require: Required })
      this.setState({ readyToSubmit: false })
    }

  }


  // allow user to navigate back to previous input field 
  Previous() {

    this.setState({ index: ((this.state.index % maxinput) - 1) });
  }



  render() {
    // const hasAccess = this.context.hasAccess;
    const listName = this.state.list ? "listcontainer1" : "listcontainer2";
    return (

      <div className={"submitcontainer"}>

        <VideoComponent mute={this.state.muteVideo} />

        <div className={"overlayercontainer"}>

          {/* background video: volume controlling buttons */}
          <div className="backgroundVideoVolumeControlButtons">
            {
              // Toggle background video between mute/unmute state
              this.state.muteVideo ?
                <VolumeOffOutlinedIcon onClick={() => this.setState({ muteVideo: false })} />
                :
                <VolumeUpOutlinedIcon onClick={() => this.setState({ muteVideo: true })} />
            }
          </div>

          {
            this.state.index !== 2 && this.state.index !== 5 &&
            <div className={listName}>
              <button onClick={() => this.setState({ list: !this.state.list })} className={"infobutton"}>
                {" "}
                Why Submit your Film ?{" "}
              </button>

              {
                this.state.list === true && (
                  <div className="bullets">
                    {
                      benefitbullets.map((benefit) => (
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

          <div className={"InfoSection"}>
            {/*Email address ?*/}
            {
              this.state.index === 0 &&
              <form className={"inputcontainer"}>
                <label for="email">Enter your Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  required
                  pattern="\A[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@↵(?:[A-Z0-9-]+\.)+[A-Z]{2,6}\Z"
                  onChange={(value) => this.setState({ Email: value.target.value })}
                ></input>
              </form>
            }
            {/* phone number */}
            {
              this.state.index === 1 &&
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

            {/* terms and conditions */}
            {
              this.state.index === 2 &&
              <div className={"termcontainer"}>
                <p>
                  <strong>Terms and Conditions</strong> <br />
                  by clicking next, you agree on Terms and Conditions. <br />
                  <div>
                    <a href="https://drive.google.com/file/d/1gI65dx69IBCAzFRvAgZ4Kl0EAUt9pxxm/view" target="_blank">
                      Read terms and conditions
                    </a>
                  </div>
                </p>
              </div>
            }

            {/* upload film */}
            {
              this.state.index === 3 &&
              <div className={"uploadcontainer"}>
                <label for="film">Upload Your Film</label>
                <input
                  type="file"
                  accept="video/*"
                  required
                  className="file-upload-btn"
                  onChange={(value) => this.setState({ FilmInput: value.target.files[0] })}
                />
                {console.log("files ", this.state.FilmInput)}
                <label className="check-container">
                  <span className="label-text">Tribal can use clips from my Film for Trailers</span>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>

                {console.log("film input data value ", this.state.FilmInput)}

              </div>
            }

            {/* film title */}
            {
              this.state.index === 4 &&
              <div className={"uploadcontainer"}>
                <label for="filmTitle"> Enter The Film Title</label>
                <input type="text" styles={{ cursor: "none,", border: "2px solid gold" }} required
                  onChange={(value) => this.setState({ film_title: value.target.value })}
                >
                </input >
              </div>
            }

            {/* Genra */}
            {
              this.state.index === 5 &&
              <div className={"genre"}>
                <Select
                  options={this.state.listGenres}
                  placeholder={"Select Genre"}
                  styles={customStyles}
                  onChange={this.handleChange} />
              </div>
            }

            {/* Trailer */}
            {
              this.state.index === 6 &&
              <div className={"uploadcontainer"}>
                <label for="Trailer">Upload Your Trailer</label>
                <input
                  type="file"
                  accept="video/*"
                  required
                  onChange={(value) => this.setState({ FilmTrailerInput: value.target.files[0] })}
                />
              </div>
            }
            {/* Synopsis */}
            {
              this.state.index === 7 &&
              <div className={"uploadcontainer"}>
                <label for="Synopsis">Synopsis</label>
                <textarea name="message" rows="10" cols="30"
                  placeholder="Write here..."
                  onChange={(object) => this.setState({ film_synopsis: object.target.value })}
                >

                </textarea>
                <div className="agreement">
                  <input type="checkbox" onChange={() => this.handleCheckBox()} />
                  <p>
                    Please check this box if your film is or contains
                    an Advertisement, Endorsement, or Sponsorship.
                  </p>
                </div>
              </div>
            }

            {/* film cover art */}
            {this.state.index === 8 &&
              <div className={"uploadcontainer"}>
                <label for="Coverart">Upload Your CoverArt</label>
                <input type="file" accept="image/*" required
                  onChange={(event) => this.setState({ film_cover_art: event.target.files[0] })} >
                </input>
                {console.log("files ", this.state.film_cover_art)}
                <div className={"RequiredFields"}>
                  <p> {this.state.Require} </p>
                </div>

              </div>

            }
            <div className={"lastinput"}>
              {
                this.state.index > 0 && this.state.index < maxinput &&
                <button onClick={() => this.Previous()}
                  type="submit"> Previous </button>
              }

              {this.state.index >= 0 && this.state.index < maxinput - 1 &&

                <button onClick={() => this.Next()}

                > Next </button>
              }

              {this.state.index === maxinput - 1 &&
                <button onClick={() => this.Submit()}
                > Submit </button>
              }

            </div>

            {
              this.state.index === (maxinput) &&
              <div className="thanks">
                <p>{this.state.confirmation}</p>
                {/* reload another film */}
                <Reload />
              </div>
            }

            <div className={"computerscreenrequire"}>
              <p> Please login on a laptop or a desktop to do the submit request</p>
            </div>

          </div>

        </div>
        {/*wrapper overlay container end */}
      </div>
    );
  }
}


function VideoComponent(Props) {
  const theme = useTheme();
  const breakPointQuery = useMediaQuery(theme.breakpoints.up(1024))
  // document.getElementsByTagName('video')[0].volume = 0.5;
  if (breakPointQuery) {
    return (
      <video
        className="backVideo"
        onloadstart="this.volume=0.1"
        autoPlay
        muted={Props.mute}
        volume={0.1}
        loop>
        <source src="https://tribal-auth-bg-video.s3.amazonaws.com/48+4Min+2-1.m4v" type="video/mp4" />
      </video>
    )
  } else {
    return null
  }

}
export default Submit;

const Reload = () => {
  let history = useHistory();

  return (
    <div className="submitAnotherFilmButton" onClick={() => history.go(0)}>
      Submit Another Film
    </div>
  )
}
//// React Selecter custom styler
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
    color: "white",
  }),

  singleValue: (provided, state) => ({
    color: "white",
    position: "center",
  })


}


/*
VIDEO SUBMISSION AGREEMENT
//www.Tribalnetwork.org
//Effective date: __October 2020
//The Tribal Network Mobile Application (“App”) available on Apple App Store (IOS) and Google Play Store (Android) and www.TribalNetwork.org site (the “Site”) are owned and operated by Tribal III Inc. from Georgia, USA. Throughout the Site and the App, the terms “we”, “us”, “Tribal Network”, “App”, “platform” and “our” refer to Tribal III Inc. Our platform serves as a digital community where film makers can post, communicate, collaborate, broadcast, generate income, build their portfolios and get feedback from their peers in a controlled environment. The following are the terms and conditions for submission of videos to the Tribal Network. This Video Submission Agreement applies to all users of the Tribal Network Site and the App.
//ALL USERS/ARTISTS MUST BE 18 YEARS OF AGE OR OLDER AT THE TIME OF UPLOADING. ALL ENTRIES/SUBMISSIONS MUST BE IN VIDEO FORM ONLY AND SUBMITTED IN ACCORDANCE WITH THE TERMS AND CONDITIONS LISTED BELOW. BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO THIS VIDEO SUBMISSION AGREEMENT AND ALL APPLICABLE LAWS. IF YOU DO NOT AGREE WITH THIS AGREEMENT, OUR TERMS AND CONDITIONS,  OUR PRIVACY POLICY, OR ANY OTHER OF OUR POLICY, YOU SHOULD NOT USE THE SERVICES
//1.	Submission Area. All Artists must submit their films through the web app “Submission Area” section of Tribal Network for desktop.

//2.	Requirements. Video types acceptable for submission require to be a Film, a Trailer, Cover Art, Title, Genre, Description and Credits. The platform is only allowed for Artists.

//3.	Responsibility. All Artists are responsible to add the credits properly for the Video when making the submission. Failure to add credits and if reported by any other user may result in termination of the account of the artist and permanent ban. If banned, the associated phone numbers, devices and emails of that artist will also be removed and restrained from making any further film submissions.

//4.	Permission.  By submitting a video, in addition to any other rights granted to us, which may be granted in any other agreement entered into between Tribal Network and any user, each user/artist irrevocably grants Tribal Network and its successors, assigns and licensees, the right to display the video/film on the Tribal Network Site, Tribal Network App or anywhere Tribal Network may deem fit including festivals and competitions, any and all media and for any purpose including but without limitation, any advertising and promotional purposes, and hereby release Tribal Network from any liability with respect thereto. We will inform you if we are entering any festival or competition on your behalf.
//Please note that we do not use an Artist’s work without telling them and we do not put advertisements on the artist’s work without permission.

//5.	Tribal Film Council (TFC).  The TFC can take up to 21 days or more to review your film/ product and further make a decision to either accept or deny it. If your film is denied, we will provide you the reason of refusal. You may be provided a chance to make amendment or fix something (e.g. fixing the sound or editing) and then you may re-submit again through an appeal. Our teams will need up to 2 weeks to review and make a decision after your appeal. Users who continue to submit the same film after a rejection shall be permanently banned from the Tribal Network platform.

//6.	Ratings.  Our platform allows users to give star ratings on artists’ films for specific aspects including but not limited to lighting, acting, sound, etc. Please note that star ratings or analytics are not influenced by the company unless the user has paid for promotion.

//7.	Reviews and Promotion.  Once a film is accepted by our team, the user can pay for a list of all TFC reviews and have the option to promote their film cover art and trailer throughout certain highlighted sections of the platform.

//8.	Donations. All donations generated from a film from supporters fully belong to the Artist and applicable to State and Government taxes which the Artist is solely responsible to pay.

//9.	Intellectual Property & Copyrights. You hereby make all warranties, representations and guarantees with respect to the Video you submit including but not limited to a representation and warranty that the Video does not infringe or violate the intellectual property rights or proprietary rights, rights of publicity or privacy, or other rights of any third party. You shall remain the owner of your video content after the submission as the video creator and are solely responsible for it. In no event Tribal Network is responsible for any copyright infringement if a person or company wants to pursue legal action. The Tribal Network is a product of a 501(c)3 corporation. All of the App’s content is submitted and displayed for the artistic educational development of our users. If you believe your copyright-protected work was posted on Tribal Network by someone without authorization, you may submit a copyright infringement notification. These requests should only be submitted by the copyright owner or an agent authorized to act on the owner's behalf. You can send us a notification with evidence and proper requirements as provided in the Digital Millennium Copyright Act (DMCA) on ---@tribalnetwork.org. Do not make false claims. Misuse of this process may result in the suspension of your account or other legal consequences.

//10.	Warrant. In addition, you represent and warrant that you (1) own the video you submit (2) will receive and maintain the necessary consents, permissions and approvals from anyone who appears in or is heard in any of your Video, including without limitation (i) permission for their image and/or voice to appear in that Video Content and (ii) permission for that Video to be submitted to us pursuant to these Terms.
//By submitting any video, you represent and warrant that you have full power and authority to agree to these Submission Terms, including without limitation the power and authority to grant all rights and licenses relating to the Video.

*/