import React from "react";
import { useHistory } from "react-router-dom";
import './settings.css';
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import { CenterFocusStrongSharp } from "@material-ui/icons";
import OtherTermsAndServices from "./OtherTermsAndServices";

function TermsOfService() {
      let history = useHistory();

      return (

            <div className='settingBody__tribalBeta'>
                  <div className="pageTitle setting__tribalBeta">
                        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                              <ArrowBackIosIcon className="backIcon" style={{ color: "white" }} />
                        </IconButton>
                        <h2 className="text settingText__tribalBeta">Terms of Service</h2>
                  </div>
                  <div style={{ marginBottom: "10rem" }}>
                        <h3>www.Tribalnetwork.org</h3>
                        <ol>
                              {/* Overview */}
                              <li style={style.li}>
                                    <strong style={style.strong}>Overview</strong>
                                    <p style={style.p}>
                                          The Tribal Network Beta website located on www.Tribalnetwork.org (“website”), the Tribal
                                          Network Web Application (“App”) located on <a style={style.a} href='https://www.tribalnetwork.org/'>www.Tribalnetwork.org</a> and the Tribal Network
                                          Beta App available on Google Playstore are owned and operated by Tribal III Inc. from USA.
                                          Throughout the Site, the terms “we”, “us”, “platform”, “Tribal Network Beta”, and “our” refer to
                                          Tribal III Inc.
                                    </p>
                                    <p style={style.p}>
                                          We offer Tribal Network Beta for users from USA and France, and make all information, tools,
                                          and services available from this site to you, the user, conditioned upon your acceptance of all
                                          terms, conditions, policies, and notices stated here.
                                    </p>
                                    <p style={style.p}>
                                          By visiting our site and/or when using our Web App, you (“User”) engage in our “Services” and
                                          agree to be bound by the following terms (“Terms”), including those additional terms and
                                          conditions and policies referenced herein and/or available by hyperlink. These Terms and
                                          Conditions apply to all users of the Site and the Web App including without limitation users who
                                          are browsers, users, volunteers and/ or contributors of content.
                                    </p>
                                    <p style={{ ...style.p, fontWeight: "700" }}>
                                          PLEASE READ THE FOLLOWING TERMS AND DISCLAIMERS CAREFULLY BEFORE
                                          USING THE SERVICES. IF YOU DO NOT AGREE WITH THESE TERMS, OUR PRIVACY
                                          POLICY, OR ANY OTHER OF OUR POLICY, YOU SHOULD NOT USE THE SERVICES.
                                    </p>
                              </li>
                              {/* General Information */}
                              <li style={style.li}>
                                    <strong style={style.strong}>General Information</strong>
                              </li>
                              {/* How It Works */}
                              <ul style={style.ul}>
                                    {/* How It Works */}
                                    <li style={{ ...style.li, paddingLeft: "0px" }}>
                                          <strong>How It Works:</strong>
                                          <p style={style.p}>
                                                Users can sign up for free, submit film for approval, watch and rate other films. If you
                                                have a film on the App, you will automatically have discounted access to the full app
                                                when it launches. The process is as follows:
                                                <br />
                                                - Submit your Indie film to be shown on the App and Get peer ratings.<br />
                                                - Watch films. <br />
                                                - Give star ratings to your peers&#39; films. <br />
                                          </p>
                                          <p style={style.p}>
                                                For more information on the services we offer and how it works, please find more details
                                                on our Site. Users can get more info on the ‘tips and support’ page under the settings
                                                tab in the mobile app AND the web app.
                                          </p>
                                    </li>
                                    {/* Sole discretion */}
                                    <li style={{ ...style.li, paddingLeft: "0px" }}>
                                          <strong>Sole discretion:</strong>
                                          <p style={style.p}>
                                                We reserve the right to add/discontinue any product or service anytime
                                                at the sole discretion and without notice. We also reserve the right to take appropriate
                                                steps to protect Tribal Network Beta and/or its Members/Users from any abuse/misuse
                                                as it deems appropriate in its sole discretion.
                                          </p>
                                    </li>
                              </ul>
                              {/* App Updates and Functionality */}
                              <li style={style.li}>
                                    <strong style={style.strong}>App Updates and Functionality:</strong>
                                    <p style={style.p}>
                                          From time to time, updates to the Web App may be made available.In addition, you
                                          acknowledge that the App is provided over the Internet and mobile networks and so the quality
                                          and availability of the App may be affected by factors outside our reasonable control.
                                          Accordingly, we do not accept any responsibility for any connectivity issues that you may
                                          experience when using the App. In addition, you acknowledge and agree that you (and not us)
                                          are responsible for obtaining and maintaining all telecommunications, broadband and computer
                                          hardware, equipment and services needed to access and use the App, and for paying any data
                                          charges that may be charged to you by your network provider in connection with your use of the
                                          App.
                                    </p>
                              </li>
                              {/* Permitted use */}
                              <li style={style.li}>
                                    <strong style={style.strong}>Permitted use:</strong>
                                    <p style={style.p}>
                                          You agree to use the Site, App and the Services only for purposes that are permitted by these
                                          Terms and Conditions and in compliance with all applicable laws, regulations, and generally
                                          accepted practices or guidelines in the relevant jurisdictions. You may only use the Services for
                                          your non-commercial, non-exclusive, non-assignable, non-transferable, and limited personal
                                          use, and no other purposes.
                                    </p>
                                    <p style={style.p}>You will not (and will not attempt to):</p>
                                    <ol style={style.ol}>
                                          <li style={style.li}>Use the Services for any illegal or unlawful purpose;</li>
                                          <li style={style.li}>
                                                Access any of the Services by any means other than through the interface that is
                                                provided by Tribal Network Beta;
                                          </li>
                                          <li style={style.li}>
                                                Gain unauthorised access to Tribal Network Beta’s computer system or engage in any
                                                activity that interferes with the performance of, or impairs the functionality or security of
                                                the Services, Tribal Network Beta’s networks, and computer systems;
                                          </li>
                                          <li style={style.li}>
                                                Access any of the the Services through any automated means or with any automated
                                                features or devices (including use of scripts or web crawlers);
                                          </li>
                                          <li style={style.li}>
                                                Access or collect any personally identifiable information, including any names, email
                                                addresses or other such information for any purpose, including, without limitation,
                                                commercial purposes;
                                          </li>
                                          <li style={style.li}>
                                                Reproduce, duplicate, copy, sell, trade, or resell any aspect of the Services for any
                                                purpose; and
                                          </li>
                                          <li style={style.li}>
                                                Reproduce, duplicate, copy, sell, trade or resell any products or services bearing any
                                                trademark, service mark, trade name, logo or service mark owned by Tribal Network
                                                Beta in a way that is likely or intended to confuse the owner or authorised user of such
                                                marks, names or logos.
                                          </li>
                                    </ol>
                              </li>
                              {/* Interaction with other Members */}
                              <li style={style.li}>
                                    <strong style={style.strong}>Interaction with other Members:</strong>
                                    <p style={style.p}>
                                          You are solely responsible for your communications with other Tribal Network Beta Members.
                                          Tribal Network Beta reserves the right, but has no obligation, to monitor disputes between you
                                          and other Members. Tribal Network Beta also reserves the right to take appropriate action
                                          against errant members. However, Tribal Network Beta is not obliged to share such action with
                                          other members, including complainants. Tribal Network Beta expressly disclaims any
                                          responsibility or liability for any transactions or interactions between the members inter-se.
                                    </p>
                              </li>
                              {/* General Conditions */}
                              <li style={style.li}>
                                    <strong style={style.strong}>General Conditions:</strong>
                                    <ul style={{ ...style.ul, marginLeft: "0px" }}>
                                          <li style={{ ...style.li, fontWeight: "600", paddingLeft: "0px" }}>
                                                WE SHALL USE THE FILMS TO MAKE TRAILERS; “HELP US LAUNCH OUR MAIN APP.
                                                WE’LL MAKE TRAILERS FROM YOUR FILMS”.</li>
                                          <li style={{ ...style.li, paddingLeft: "0px" }}>
                                                In consideration for your participation in providing the films to us, you hereby and
                                                irrevocably consent to the use, publication, distribution, reproduction, licensing,
                                                digitization, and/or re-release of the Film, by us as well as any employees, affiliates,
                                                associates, representatives, or agents for any legal reason or purpose, including but not
                                                limited to our organizations social media.
                                          </li>
                                          <li style={{ ...style.li, paddingLeft: "0px" }}>
                                                Our volunteers may use clips from your film in advertisements for social media or on our
                                                main website.
                                          </li>
                                          <li style={{ ...style.li, paddingLeft: "0px" }}>
                                                When the app&#39;s full version is released, your account will transfer to the new app and
                                                you will be able to continue use with a free trial.
                                          </li>
                                          <li style={{ ...style.li, paddingLeft: "0px" }}>
                                                Your continued use of the new App is deemed on acceptance of the expanded terms
                                                and policies.
                                          </li>
                                    </ul>
                              </li>
                              {/* Payments */}
                              <li style={style.li}>
                                    <strong style={style.strong}>Payments:</strong>
                                    <p style={style.p}>
                                          Access and the use of The Tribal Network Beta app is free! Once it is replaced with the full app,
                                          you will automatically have an account and you will have a free trial that includes 5 hours of film
                                          watch time and 1 hour of live streaming time.
                                    </p>
                                    <p style={style.p}>
                                          Artists (have at least one film on the app and) will be able to pay a discounted monthly
                                          subscription rate.
                                    </p>
                              </li>
                              {/* Accessibility Statement */}
                              <li style={style.li}>
                                    <strong style={style.strong}>Accessibility Statement:</strong>
                                    <p style={style.p}>
                                          This Accessibility Statement is for Tribal Network Beta and Tribalnetwork.org
                                          Tribal III Inc. is committed to ensuring digital accessibility for people with disabilities. We are
                                          continually improving the user experience for everyone and applying the relevant accessibility
                                          standards.
                                    </p>
                              </li>
                        </ol>
                        {/* Conformance status */}
                        <div style={style.div}>
                              <strong style={{ ...style.strong, textDecoration: "underline" }}>Conformance status</strong>
                              <p style={{ ...style.p, padding: "auto" }}>

                                    The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and
                                    developers to improve accessibility for people with disabilities. It defines three levels of
                                    conformance: Level A, Level AA, and Level AAA. Tribal Network Beta is partially conformant
                                    with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully
                                    conform to the accessibility standard.
                              </p>
                        </div>
                        {/* There are no restrictions for: */}
                        <div style={style.div}>
                              <strong>There are no restrictions for:</strong>
                              <ul style={{ ...style.ul, marginLeft: "1.2rem" }}>
                                    <li>Deaf users</li>
                                    <li>Limited hearing users.</li>
                                    <li>Non-verbal users</li>
                                    <li>Limited manipulation users</li>
                                    <li>Limited reach and strength users</li>
                                    <li>Cognitive user group</li>
                              </ul>
                        </div>
                        {/* There are some restrictions for: */}
                        <div style={style.div}>
                              <strong>There are some restrictions for:</strong>
                              <ul style={{ ...style.ul, marginLeft: "1.2rem" }}>
                                    <li>Users without vision</li>
                                    <li>Users with limited vision</li>
                                    <li>Users without perception of colour</li>
                              </ul>
                        </div>

                        {/* What we do about known issues */}
                        <div style={style.div}>
                              <strong>What we do about known issues:</strong>
                              <p style={style.p}>
                                    We work to achieve and maintain <a href="https://www.w3.org/TR/WCAG21/" style={style.a}>Web Content Accessibility Guidelines</a>(WCAG) 2.1 AA
                                    standards, but it is not always possible for all our content to be accessible. Where content is not
                                    accessible, we will state a reason, warn users and offer alternatives.
                              </p>
                        </div>
                        {/* Reporting accessibility issues */}
                        <div style={style.div}>
                              <strong>Reporting accessibility issues:</strong>
                              <p style={style.p}>
                                    If you if you find any accessibility issues with the Imperial Mobile native app, please
                                    contact <a href="mailto:support@tribalnetwork.org" style={style.a}>Support@tribalnetwork.org</a> who will endeavour to respond to you within 72 hours.
                              </p>
                        </div>
                        {/* Other Terms and service (from 9 to 29)*/}
                        <div style={style.div}>
                              <OtherTermsAndServices />
                        </div>
                        <div style={style.div}>
                              <p style={style.p}>
                                    E-mail: <a href="mailto:Support@tribalnetwork.org" style={style.a}>Support@tribalnetwork.org</a>
                              </p>
                              <p style={style.p}>
                                    Postal address:<br />
                                    300 Colonial Center Parkway, STE 100N <br />
                                    Roswell , GA 30076
                              </p>
                              <p style={style.p}>
                                    We will try our best to respond to feedback within 5 business days.
                              </p>
                        </div>
                  </div>
            </div>



      );
}

let style = {
      li: { textAlign: "left" },
      a: { color: "gold" },
      p: { marginLeft: "0px", marginTop: "0.25rem", fontSize: "17px", lineHeight: "22px", letterSpacing: "0.36px" },
      strong: { fontSize: "19px" },
      ul: { listStyleType: "disc", marginLeft: "0.5rem" },
      ol: { listStyleType: "lower-alpha", paddingLeft: "1rem" },
      div: { textAlign: "left", margin: "1rem", marginLeft: "1.5rem" }
}

export default TermsOfService;