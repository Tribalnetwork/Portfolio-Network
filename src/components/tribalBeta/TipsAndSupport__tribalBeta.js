import React from "react";
import { useHistory } from "react-router-dom";
import './settings__tribalBeta.css';
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


function TipsAndSupport() {
    let history = useHistory();

    return (
        <div className='settingBody__tribalBeta'>
            {/* Header */}
            <div className="pageTitle setting__tribalBeta">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" style={{color: "white"}}/>
                </IconButton>
                <h2 className="text settingText__tribalBeta">Tips &amp; Support</h2>
            </div>

            {/* Body */}
            <div className="settings">
                <h3 className='tips-and-support-heading'>Tips</h3>
                <h4 className='tips-and-support-subheading'>What’s the difference between the website and the mobile app?</h4>
                <p className='tips-and-support-para'>
                    The web app is easy to access, especially if you don’t have enough storage on your phone.
                    This is where donations, cash outs, and purchases are confirmed and completed.
                    You can only submit films on Desktop. <br />
                    The mobile app allows you to download films, view a visual calendar on your To-do page, use
                    the ‘Call’ feature (coming soon).
                </p>
                <h4 className='tips-and-support-subheading'>Report a bug or glitch:</h4>
                <p className='tips-and-support-para'>
                    Take a screenshot or print screen and send your bug report to <a href='mailto: ops@tribaliii.org?subject=Reporting a Bug' style={{color: 'white'}}>ops@tribaliii.org</a>
                </p>
                <h4 className='tips-and-support-subheading'>Fair use:</h4>
                <p className='tips-and-support-para'>
                    Most visual transformative works are considered fair use if posted to our platform. We will never
                    advertise on your films.
                </p>
                <h4 className='tips-and-support-subheading'>Why submit your film?</h4>
                <p className='tips-and-support-para'>
                    - Get feedback from peers and supporters.<br />
                    - Get donations.<br />
                    - Get discounted access.<br />
                    - Get new viewership.<br />
                    - Get reviews from the TFC (Tribal Film Council).<br />
                    - Get help finding and submitting to film festivals.<br />
                    - Create your portfolio right on the app.
                </p>
                <h4 className='tips-and-support-subheading'>What are you able to do on this app?</h4>
                <p className='tips-and-support-para'>
                    - Watch and rate films.<br />
                    - Submit to get feedback and donations on your work.<br />
                    - Watch live-streams.<br />
                    - Livestream, run ads, cash out.<br />
                    - Post and join gigs/ events.<br />
                    - Build connections and collaborate with other artists.<br />
                    - Auction. (Coming soon)<br />
                    - Discuss topics on the app. (Coming soon)
                </p>
                <h4 className='tips-and-support-subheading'>How can I make money on the app?</h4>
                <p className='tips-and-support-para'>
                    You can ask for supporter donations at the end of your film and you can run ads while
                    live-streaming.
                </p>

                {/* support */}
                <h3 className='tips-and-support-heading'>Support</h3>
                <h4 className='tips-and-support-subheading'>Why can’t I post or stream?</h4>
                <h4 className='tips-and-support-subheading'>Why can’t I see gigs or events?</h4>
                <p className='tips-and-support-para'>
                    You may have been flagged too many times by other users. We are assessing your account
                    activity because of this and you will regain permissions or be permanently suspended or
                    partially suspended within 30 days.<br />
                    In the meantime, you can still watch films and live streams!
                </p>
                <p className='tips-and-support-para'>You can contact us at ops@tribaliii.org.</p>
                <h4 className='tips-and-support-subheading'>Why can’t I submit my film?</h4>
                <p className='tips-and-support-para'>
                    You have tried to submit inappropriate, declined, copy righted, or similar content too many
                    times. You can contact us at ops@tribaliii.org.
                </p>
                <h4 className='tips-and-support-subheading'>Why can’t I see certain content or users?</h4>
                <p className='tips-and-support-para'>
                    You may be under the age limit required to see certain events or content.<br />
                    Check to make sure that these users and content aren’t hidden in ‘Settings/Myaccount’.<br />
                    Films added to our database need up to 21 days to be reviewed by the TFC.<br />
                    You can contact us at ops@tribaliii.org.
                </p>
            </div>
        </div>
    );
}

export default TipsAndSupport;