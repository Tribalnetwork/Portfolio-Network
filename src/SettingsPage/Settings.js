import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Settings.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Settings() {
  let history = useHistory();
  return (
    <body>
      <div className="pageTitle">
        <IconButton
          className="backbutton"
          edge="end"
          color="white"
          onClick={() => history.goBack()}
        >
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Settings</h2>
      </div>
      <div className="settings">
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/wifi"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Wifi</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/support"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Support</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/termsofservice"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Terms of Service</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/privacypolicy"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Privacy Policy</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/account"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Account</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/notifications"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Notifications</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/downloadoptions"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Download Options</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/logout"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Logout</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
      </div>
    </body>
  );
}

export default Settings;

function Wifi() {
  let history = useHistory();

  return (
    <body>
      <div className="pageTitle">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Wifi and Cellular</h2>
      </div>
      <div className="button__withArrow">
        <Link
          className="button__link"
          to={"/settings/datausage"}
          style={{ textDecoration: "none" }}
        >
          <Button className="settings__Button">Data Usage</Button>
          <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
        </Link>
      </div>
      <div className="button__withArrow">
        <Link
          className="button__link"
          to={"/settings/wifionly"}
          style={{ textDecoration: "none" }}
        >
          <Button className="settings__Button">Wifi Only</Button>
          <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
        </Link>
      </div>
      <div className="button__withArrow">
        <Link
          className="button__link"
          to={"/settings/internetspeedtest"}
          style={{ textDecoration: "none" }}
        >
          <Button className="settings__Button">Internet Speed Test</Button>
          <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
        </Link>
      </div>
    </body>
  );
}

export { Wifi };

function Support() {
  let history = useHistory();

  return (
    <body>
      <div className="pageTitle">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Support</h2>
      </div>
      <div className="settings">
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/contactus"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Contact Us</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/tipsandsupport"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Tips and Support</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
      </div>
    </body>
  );
}

export { Support };

function TermsOfService() {
  let history = useHistory();

  return (
    <body>
      <div className="pageTitle">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Terms of Service</h2>
      </div>

      {/* <h3 className="headertext">TERMS AND CONDITIONS</h3><br></br> */}
      <h3 className="headertext">www.Tribalnetwork.org </h3>
      <br></br>
      {/* <h3 className="headertext">Effective date: __October 2020</h3><br></br> */}

      <p className="termsBody">
        The Tribal Network Mobile Application (“App”) available on Apple App
        Store (IOS) and Google Play Store (Android) and www.TribalNetwork.org
        site (the “Site”) are owned and operated by Tribal III Inc. from
        Georgia, USA. Throughout the Site and the App, the terms “we”, “us”,
        “Tribal Network”, “App”, “platform” and “our” refer to Tribal III Inc.
        We offer the Tribal Network Site and the App, including all information,
        tools, and services available from this site to you, the user,
        conditioned upon your acceptance of all terms, conditions, policies, and
        notices stated here.<br></br>
        <br></br>
        By visiting our Site/App and/ or using any feature, you (“User” or
        “Customer”) engage in our “Service” and agree to be bound by the
        following terms and conditions (“Terms”), including those additional
        terms and conditions and policies referenced herein and/or available by
        hyperlink. These Terms and Conditions apply to all users of the Site and
        App including without limitation users who are browsers, customers,
        users, and/ or contributors of content.<br></br>
        <br></br>
        <strong>
          PLEASE READ THE FOLLOWING TERMS AND DISCLAIMERS CAREFULLY BEFORE USING
          THE SERVICES.
        </strong>
        <br></br>
        <br></br>
        Please read these Terms carefully before downloading, installing or
        using the App and when using our Site. By downloading, installing,
        accessing, the App or by browsing the Site, you accept and agree to
        these Terms which bind you legally. If you do not agree with these
        Terms, our Privacy Policy, or any other of our policy, you should not
        use the Services.<br></br>
        <br></br>
        1. <strong>General Information</strong>
        <br></br>
        <br></br>
        <strong>● What we do.</strong> Tribal III Inc. is a non-profit company
        that provides a cross-platform application to help independent
        filmmakers, especially those of whom are just starting their careers.
        The primary purpose of our app is to provide a platform for film workers
        to showcase their works. Also, social and donation features are provided
        to support their future careers.<br></br>
        <br></br>
        <strong>● Products/Features:</strong> The Tribal Network App features
        include Streaming Video, Live streaming, Social Networking, Post and
        snag Gigs. To find out more about Tribal Network products and services,
        please refer to the Tribal Network App or the Site.<br></br>
        <br></br>
        <strong>● Sole discretion.</strong> We reserve the right to
        add/discontinue any service anytime at our sole discretion and without
        notice. We also reserve the right to take appropriate steps to protect
        Tribal Network and/or its Members/Users from any abuse/misuse as it
        deems appropriate in its sole discretion.<br></br>
        <br></br>
        2. <strong>App Updates and Functionality</strong>
        <br></br>
        <br></br>
        From time to time, updates to our App may be made available through the
        App Store and Play Store. Depending on the update, and whether you
        utilized the App Store or Play Store to download and access the App, you
        may not be able to use the App until you have installed the latest
        version. In addition, you acknowledge that the App is provided over the
        Internet and mobile networks and so the quality and availability of the
        App may be affected by factors outside our reasonable control.
        Accordingly, we do not accept any responsibility for any connectivity
        issues that you may experience when using the App. In addition, you
        acknowledge and agree that you (and not us) are responsible for
        obtaining and maintaining all telecommunications, broadband and computer
        hardware, equipment and services needed to access and use the App, and
        for paying any data charges that may be charged to you by your network
        provider in connection with your use of the App.<br></br>
        <br></br>
        3. <strong>App Versions</strong>
        <br></br>
        <br></br>
        Access to the Tribal Network Site and App is free. Using the
        features/services of the App are paid with monthly subscription plans as
        per the pricing specified on the App and Site. You acknowledge that all
        subscriptions are recurring and will renew automatically unless
        cancelled. We do not provide any refunds for fees related to our plans
        that are on a monthly subscription. Once you have purchased any plan,
        you cannot ask for any refund.<br></br>
        <br></br>
        4. <strong>Store Rules</strong>
        <br></br>
        <br></br>
        With respect to downloading the App, you agree to comply with the App
        Store Rules and Play Store Rules, as applicable. You acknowledge that
        the availability of the App may be dependent on the App Store or Play
        Store from which you receive the App. You acknowledge these Terms are
        between you and Tribal Network and not with the App Store or Play Store.
        The App Store and Play Store are not responsible for the App, the
        content thereof, maintenance, support services, and warranty therefor,
        and addressing any claims relating thereto (e.g., product liability,
        legal compliance, or intellectual property infringement). You
        acknowledge that the App Store and Play Store (and their respective
        subsidiaries) are third party beneficiaries to these Terms and will have
        the right to enforce these Terms against you.<br></br>
        <br></br>
        5. <strong>Users</strong>
        <br></br>
        <br></br>
        Only registered users have an account can post content or broadcast a
        live stream. Our platform has the following types of users:<br></br>
        <br></br>• <strong>Artist</strong>
        <br></br>
        <br></br>
        These are users who have free access to the App and automatic Film
        festival entries by the Tribal Network app. If you’ve submitted one or
        more films and your work has been accepted to the app.<br></br>
        <br></br>• <strong>Supporters</strong>
        <br></br>
        <br></br>
        These are users who pay a subscription fee per month for full access to
        the app. Watch films and donate to the artists at any time. Payment
        agreement will be stated during sign up and may be subject to change.
        <br></br>
        <br></br>• <strong>Guests</strong>
        <br></br>
        <br></br>
        Guest users can watch public live-streams on the App. To upload content,
        they must have an account.<br></br>
        <br></br>
        6. <strong>Payments</strong>
        <br></br>
        <br></br>
        The payments on our platform our handled by a third party payment
        processor ‘Stripe’ and in respect to payment handling, the terms and
        policies of Stripe shall apply. Artist and Supporter users have a wallet
        that can receive donations and Ad revenue. Users can make a withdrawal
        any time. Please note that donations are non-refundable, authenticated,
        in app purchases.<br></br>
        <br></br>
        7. <strong>Content</strong>
        <br></br>
        <br></br>
        Users can upload any kind of content (including images/photos, text,
        audio files, videos, live streams) on the App and the Site. Content can
        be uploaded directly through the App. For any content uploaded on the
        Site, it needs to be approved and reviewed before its uploaded on the
        App. Any content we may deem inappropriate will be removed from the
        App/Site.<br></br>
        <br></br>
        8. <strong>Advertisements</strong>
        <br></br>
        <br></br>• Tribal Network may display advertisements (such as Google
        Adsense) from third parties on the App or may otherwise provide
        information about, or links to, third-party products or services. Tribal
        Network does not endorse or make any representations or warranties
        regarding any third party advertisements, products, services, promotions
        or vendors. Your dealings or correspondence with, or participation in
        promotions of, such third parties, and any terms, conditions, warranties
        or representations associated with such dealings or promotions, are
        solely between you and such third party. Tribal Network is not
        responsible or liable in any manner for any third party products or
        services, for any loss or damage of any sort incurred as the result of
        any products, services, dealings or promotions or as the result of the
        presence of such Third Party advertisers or third party information on
        the Services.<br></br>
        <br></br>• The Advertisements will only be displayed on the Tribal
        Network App and will not be displayed on any artists work.<br></br>
        <br></br>• The App also allows the users with the feature to earn
        revenue by displaying Ads. You can get more details on using this
        feature on the Tribal Network App.<br></br>
        <br></br>
        9. <strong>Live Streaming</strong>
        <br></br>
        <br></br>
        Live Streaming can be viewed by the general public on the platform and
        may appear through search engines. We employ a number of organizational,
        technical and physical safeguards designed to protect live streaming and
        other content. However, security risk is inherent in all internet and
        information technologies and we cannot guarantee the security of the
        information.<br></br>
        <br></br>
        10. <strong>No Responsibility</strong>
        <br></br>
        <br></br>
        Tribal Network has no liability for any loss incurred by any user,
        whether financial or otherwise, for any perceived failure by the user,
        whether justified or otherwise on the use of the Tribal Network products
        and services.<br></br>
        <br></br>
        11. <strong>Permitted use</strong> <br></br>
        <br></br>
        You agree to use the Site, App and the Services only for purposes that
        are permitted by these Terms and Conditions and in compliance with all
        applicable laws, regulations, and generally accepted practices or
        guidelines in the relevant jurisdictions. You may only use the Services
        for your non-commercial, non-exclusive, non-assignable,
        non-transferable, and limited personal use, and no other purposes.
        <br></br>
        <br></br>
        You will not (and will not attempt to):<br></br>
        <br></br>
        a. Use the Services for any illegal or unlawful purpose;<br></br>
        <br></br>
        b. Access any of the Services by any means other than through the
        interface that is provided by Tribal Network;<br></br>
        <br></br>
        c. Gain unauthorized access to Tribal Network’s computer system or
        engage in any activity that interferes with the performance of, or
        impairs the functionality or security of the Services, Tribal Network’s
        networks, and computer systems;<br></br>
        <br></br>
        d. Access any of the Services through any automated means or with any
        automated features or devices (including use of scripts or web
        crawlers);<br></br>
        <br></br>
        e. Access or collect any personally identifiable information, including
        any names, email addresses or other such information for any purpose,
        including, without limitation, commercial purposes;<br></br>
        <br></br>
        f. Reproduce, duplicate, copy, sell, trade, or resell any aspect of the
        Services for any purpose; and<br></br>
        <br></br>
        g. Reproduce, duplicate, copy, sell, trade or resell any products or
        services bearing any trademark, service mark, trade name, logo or
        service mark owned by Tribal Network in a way that is likely or intended
        to confuse the owner or authorized user of such marks, names or logos..
        <br></br>
        <br></br>
        12. <strong>Limited License</strong>
        <br></br>
        <br></br>
        We grant you a limited license to use the Services for personal
        non-commercial use only. You may not: (a) resell or make any commercial
        use of this Site and the App or any of the contents of our Services; (b)
        modify, adapt, translate, reverse engineer, decompile, disassemble or
        convert any of the contents of the Services not intended to be so read;
        (c) copy, imitate, mirror, reproduce, distribute, publish, download,
        display, perform, post or transmit any of the contents of the Services
        in any form or by any means; or (d) use any data mining, bots, spiders,
        automated tools or similar data gathering and extraction methods on the
        contents of the Services or to collect any information from the Site,
        App or any other user.<br></br>
        <br></br>
        Your use of this Site and the App is at your own risk. You agree that
        you will be personally responsible for your use of this Site and the
        App. If we determine, in our sole discretion, that you engaged in
        prohibited activities, were not respectful of other users, or otherwise
        violated the Terms and Conditions, we may deny you access to our
        Services on a temporary or permanent basis and any decision to do so is
        final.<br></br>
        <br></br>
        13. <strong>Accounts, Registrations, and Passwords</strong>
        <br></br>
        <br></br>
        You are solely responsible for maintaining the confidentiality of your
        account and password(s) and for restricting access to your computer and
        mobile/tablet. If you open an account, register, or otherwise provide us
        with any information, you agree to provide us with current, complete,
        and accurate information as requested by any forms. Tribal Network is
        not responsible for any errors or delays in responding to any inquiry or
        request caused by any incorrect, outdated, or incorrect information
        provided by you or any technical problems beyond the control of Tribal
        Network. You may not disclose the Password to another person or entity
        or permit another entity to access the Site and Apps using such a
        Password. You must notify Tribal Network immediately of any breach of
        security or unauthorized use of your account. Tribal Network cannot be
        responsible and disclaims all liability in connection with, the use of
        any information that you post or display on the Site and App. Multiple
        profiles of the same person are not allowed on the Site and App.
        <br></br>
        <br></br>
        14. <strong>Intellectual Property Rights</strong>
        <br></br>
        <br></br>
        Your use of the Site, App and its contents grants no rights to you
        concerning any copyright, designs, and trademarks and all other
        intellectual property and material rights mentioned, displayed, or
        relating to the Content (defined below) on the Site and App. All
        content, including third party trademarks, designs, and related
        intellectual property rights mentioned or displayed on this Site and the
        App, are protected by national intellectual property and other laws. Any
        unauthorized reproduction, redistribution or other use of the Content is
        prohibited and may result in civil and criminal penalties. You may use
        the Content only with our prior written and express authorization. To
        inquire about obtaining authorization to use the Content, please contact
        us at _____@Tribalnetwork.org<br></br>
        <br></br>
        In addition to the intellectual property rights mentioned above,
        "Content" is defined as any graphics, photographs, including all image
        rights, sounds, music, video, audio, or text on the Site and App.
        <br></br>
        <br></br>
        15. <strong>Monitoring Activity</strong>
        <br></br>
        <br></br>
        Tribal Network has no obligation to monitor this Site and the App or any
        portion thereof. However, we reserve the right to review any posted
        content and remove, delete, redact or otherwise modify such content, in
        our sole discretion, at any time and from time to time, without notice
        or further obligation to you. Tribal Network has no obligation to
        display or post any content. Tribal Network, subject to the Privacy
        Policy reserves the right to disclose, at any time and from time to
        time, any information or posted the content that it deems necessary or
        appropriate, including without limitation to satisfy any applicable,
        law, regulation, contractual obligation, legal, dispute process, or
        governmental request. Tribal Network shall have no liability in
        connection with any content or content submitted to, transmitted via, or
        displayed or posted on this Site and the App, regardless of whether
        provided by Tribal Network or any other party.<br></br>
        <br></br>
        16. <strong>Disclaimer</strong>
        <br></br>
        <br></br>
        TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, Tribal Network
        EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES AND REPRESENTATIONS, EXPRESS
        OR IMPLIED, INCLUDING ANY (A) WARRANTIES OF MERCHANTABILITY OR FITNESS
        FOR A PARTICULAR PURPOSE OR USE AS TO THE SITE, APP AND ITS CONTENT,
        INCLUDING THE INFORMATION, DATA, SOFTWARE, OR PRODUCTS CONTAINED
        THEREIN, OR THE RESULTS OBTAINED BY THEIR USE OR AS TO THE PERFORMANCE
        THEREOF, (B) WARRANTIES OR CONDITIONS ARISING THROUGH COURSE OF DEALING,
        AND (C) WARRANTIES OR CONDITIONS OF UNINTERRUPTED OR ERROR-FREE ACCESS
        OR USE. THE SITE AND APP AND ALL CONTENTS THEREIN AND COMPONENTS THEREOF
        ARE PROVIDED ON AN “AS IS” BASIS AND YOUR USE OF THE SITE AND APP IS AT
        YOUR OWN RISK.<br></br>
        <br></br>
        17. <strong>Limitation of Liability</strong>
        <br></br>
        <br></br>
        You agree that in no event shall Tribal Network be liable to you, or any
        third party, for any lost profits, incidental, consequential, punitive,
        special, or indirect damages arising out of or in connection with the
        Site and App or the Terms and Conditions, even if advised as to the
        possibility of such damages, regardless of whether the claim for such
        damages is based in contract, tort, strict liability or otherwise. This
        limitation on liability includes, but is not limited to, any (i) errors,
        mistakes, or inaccuracies in any Content or for any loss or damage of
        any kind incurred by you as a result of your use of or reliance on the
        Content; (ii) the transmission of any bugs, viruses, Trojan horses or
        the like which may infect your equipment, failure of mechanical or
        electronic equipment; (iii) unauthorized access to or use of the Site or
        Apps secure servers and/or any personal information and/or financial
        information stored therein; or (iv) theft, operator errors, strikes or
        other labor problems or any force majeure. You agree that you use the
        App and/or any Third Party Site at your own risk. You further understand
        and agree that we are not responsible or liable for your illegal,
        unauthorized, or improper use of information transmitted, monitored,
        stored or received using the App.<br></br>
        <br></br>
        18. <strong>Indemnification</strong>
        <br></br>
        <br></br>
        You agree to indemnify and hold Tribal Network and its subsidiaries,
        affiliates, officers, directors, agents, and employees, harmless from
        and against any suit, action, claim, demand, penalty or loss, including
        reasonable attorneys’ fees, made by or resulting from any third party
        due to or arising out of your use of our Services, breach of the Terms
        and Conditions or the materials it incorporates by reference, or your
        violation of any law, regulation, order or other legal mandates, or the
        rights of a third party.<br></br>
        <br></br>
        19. <strong>Dispute Resolution and Governing Laws</strong>
        <br></br>
        <br></br>
        In the event of a dispute arising out of or in connection with these
        terms or any contract between you and us, then you agree to attempt to
        settle the dispute by engaging in good faith with us in a process of
        mediation before commencing arbitration or litigation.<br></br>
        <br></br>
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of Georgia, USA and you hereby submit to the
        exclusive jurisdiction of the Georgia courts where Tribal Network is
        based in.<br></br>
        <br></br>
        20. <strong>Children</strong>
        <br></br>
        <br></br>
        You may not use or engage with our website and the App if you are under
        18 years of age. By using or engaging with the website, you also
        acknowledge and agree that you are permitted by your jurisdiction’s
        applicable law to use and/or engage with the website.<br></br>
        <br></br>
        21. <strong>Privacy</strong>
        <br></br>
        <br></br>
        For more information on how we collect your information and cookies,
        please refer to our Privacy Policy.<br></br>
        <br></br>
        22. <strong>Security</strong>
        <br></br>
        <br></br>
        We track of device IP addresses for the safety and security of our
        users. For more information on this section, please refer to our Privacy
        Policy.<br></br>
        <br></br>
        23. <strong>Changes</strong>
        <br></br>
        <br></br>
        We reserve the right to update and revise these Terms and Conditions at
        any time. You will know if these Terms and Conditions have been revised
        since your last visit to the website or the App by referring to the
        "Effective Date of Current Policy" date at the top of this page. Your
        use of our Site and App constitutes your acceptance of these Terms and
        Conditions as amended or revised by us from time to time, and you
        should, therefore, review these Terms and Conditions regularly.<br></br>
        <br></br>
        24. <strong>Electronic Communications</strong>
        <br></br>
        <br></br>
        When you visit the Site, use our App or send us e-mails, you are
        communicating with us electronically. In so doing, you consent to
        receive communications from us electronically. You agree that all
        agreements, notices, disclosures, and other communications that we
        provide to you electronically satisfy any legal requirement that such
        communication is in writing.<br></br>
        <br></br>
        25. <strong>Severability</strong>
        <br></br>
        <br></br>
        If any of these Terms and Conditions shall be deemed invalid, void, or
        for any reason unenforceable, that term shall be deemed severable and
        shall not affect the validity and enforceability of any remaining terms
        or conditions.<br></br>
        <br></br>
        26. <strong>Assignment</strong>
        <br></br>
        <br></br>
        We shall be permitted to assign, transfer, or subcontract our rights and
        obligations under these terms without your consent or any notice to you.
        You shall not be permitted to assign, transfer, or subcontract any of
        your rights and obligations under this agreement.<br></br>
        <br></br>
        27. <strong>Force Majeure</strong>
        <br></br>
        <br></br>
        Tribal Network is not liable for any delays caused by circumstances
        beyond Tribal Network’s control, e.g. general labor dispute, extreme
        weather, acts of war, fire, lightning, terrorist attacks, changed
        governmental orders, technical problems, defects in power-
        /tele-/computer communications or other communication and defects or
        delays in the service by sub-suppliers due to circumstances set forth
        above. Such circumstances shall result in relief from damages and other
        measures. If any such situation should arise, Tribal Network shall
        inform the Customer accordingly both at the beginning and the end of the
        period for the current situation. If the situation has lasted for more
        than two months, both the Customer and Tribal Network are entitled to
        terminate the purchase with immediate effect.<br></br>
        <br></br>
        28. <strong>Entire Agreement</strong>
        <br></br>
        <br></br>
        These Terms and Conditions set forth the entire understanding and
        agreement between you and Tribal Network concerning the subject matter
        herein and supersede all prior or contemporaneous communications and
        proposals, whether electronic, oral or written concerning the Site and
        App. A printed version of these Terms and Conditions and any notice
        given in electronic form shall be admissible in judicial or
        administrative proceedings based upon or relating to these Terms and
        Conditions to the same extent and subject to the same conditions as
        other business documents and records originally generated and maintained
        in printed form. Any rights not expressly granted herein are reserved.
        You may not assign the Terms and Conditions, or assign, transfer or
        sublicense your rights therein. A failure to act concerning a breach by
        you or others does not waive Tribal Network's right to act concerning
        subsequent or similar breaches.<br></br>
        <br></br>
        29. <strong>Violation and Termination</strong>
        <br></br>
        <br></br>
        Any conduct that in any way violates these Terms or any posted
        restrictions or guidelines may result, in our sole discretion, in the
        termination of your license and right to utilize the Services to access
        Content or for any other purpose, and/or our pursuit of any legal
        damages or remedies. If necessary, or as authorized under applicable
        law, we may cooperate with local, state and/or federal authorities to
        protect the Site, the App, the Services, the Content, Tribal Network,
        its Affiliates, Licensors, members, employees, agents and/or visitors;
        to comply with applicable laws; or to prevent unauthorized access or use
        of the Services or the Content. We retain the right to deny access to
        the Services, in our sole discretion, to any visitor/user for any
        reason, including for any violation of these Terms.<br></br>
        <br></br>
        30. <strong>Contact Us</strong>
        <br></br>
        <br></br>
        For any questions, complaints, and queries or to report any violations,
        kindly get in touch:<br></br>
        <br></br>
        <strong>Tribal III Inc.</strong>
        <br></br>
        <br></br>
        You can contact us at TribalNetwork.org; under ‘Settings’ and ‘Support’.
      </p>
    </body>
  );
}

export { TermsOfService };

function PrivacyPolicy() {
  let history = useHistory();

  return (
    <body>
      <div className="pageTitle">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Privacy Policy</h2>
      </div>

      <h3 className="headertext">www.Tribalnetwork.org </h3>
      <br></br>
      <h3 className="headertext">Effective date: __October 2020 </h3>
      <br></br>

      <p className="policyBody">
        The Tribal Network Site www.Tribalnetwork.org (the “Site”) and the
        Tribal Network Mobile Application (the “App”) is owned by Tribal III
        Inc. (“we”, “us”, “Tribal Network” and “our”) and operated from the
        United States. This privacy policy has been compiled to better serve
        those who are concerned with how their ‘Personally Identifiable
        Information’ (PII) is being used online. PII, as described in US privacy
        law and information security, is information that can be used on its own
        or with other information to identify, contact, or locate a single
        person, or to identify an individual in context. Please read our privacy
        policy carefully to get a clear understanding of how we collect, use,
        protect, or otherwise handle your PII.<br></br>
        <br></br>
        This Privacy Policy informs you of our policies regarding the
        collection, use, and disclosure of personal data when you use our
        Service and the choices you have associated with that data. We use your
        data to provide and improve the Service. Service means the Tribal
        Network website and the Tribal Network App operated by Tribal III Inc.
        <br></br>
        <br></br>
        For US residents, we adopt this notice to comply with the California
        Consumer Privacy Act of 2018 (“CCPA”) and other US privacy laws. Any
        terms defined in the CCPA have the same meaning when used in this
        Policy. For users from Europe, see below “General Data Protection
        Regulation of 2018 (GDPR), (EU) 2016/679.<br></br>
        <br></br>
        By using the Service, you agree to the collection and use of information
        in accordance with this policy. Unless otherwise defined in this Privacy
        Policy, terms used in this Privacy Policy have the same meanings as in
        our Terms and Conditions.<br></br>
        <br></br>
        <strong>PERSONAL INFORMATION WE COLLECT</strong>
        <br></br>
        <br></br>
        <strong>
          Personal information you provide to us (PII or Personal Data).
        </strong>{" "}
        Personal information you may provide to us through the Service or
        otherwise includes:<br></br>
        <br></br>
        <strong>• Personal data,</strong> personal information such as your
        name, profile picture, email and mailing addresses, phone number.
        <br></br>
        <br></br>
        <strong>• Registration data,</strong> such as information that you
        provide to register for an account or sign up.<br></br>
        <br></br>
        <strong>• Content.</strong> Any content you upload for the purpose of
        using our services.<br></br>
        <br></br>
        <strong>• Profile data,</strong> such as your username and password that
        you may set to establish an online account with us and your interests
        and preferences.<br></br>
        <br></br>
        <strong>• Marketing data,</strong> such as the email address or contact
        details that we use to send marketing communications and your
        preferences for receiving communications about our activities, events,
        sweepstakes and contests.<br></br>
        <br></br>
        <strong>• Purchase data,</strong> including your order history and
        information needed to process and fulfill your order, including order
        details, billing address.<br></br>
        <br></br>
        <strong>• Other information</strong> that we may collect which is not
        specifically listed here, but which we will use in accordance with this
        Privacy Policy or as otherwise disclosed at the time of collection.
        <br></br>
        <br></br>
        <strong>Automatic collection.</strong> We and our service providers may
        automatically log information about you, your computer or mobile device,
        and your activity occurring on or through the Sites, such as:<br></br>
        <br></br>
        <strong>• Device data,</strong> such as your computer or mobile device
        operating system type and version number, manufacturer and model,
        browser type, screen resolution, IP address, the website you visited
        before browsing our site, and general location information such as city,
        state or geographic area.<br></br>
        <br></br>
        <strong>• Online activity data,</strong> such as pages or screens you
        viewed, how long you spent on a page or screen, navigation paths between
        pages or screens, information about your activity on a page or screen,
        access times, and duration of access.<br></br>
        <br></br>
        When you download the Tribal Network App, we collect your device ID. As
        you access your account from the app we will collect your account
        activity<br></br>
        <br></br>
        <strong>Cookies and similar technologies.</strong> Some of our automatic
        data collection is facilitated by cookies and similar technologies.
        <br></br>
        <br></br>
        <strong>HOW WE USE YOUR PERSONAL INFORMATION</strong>
        <br></br>
        <br></br>
        We use your personal information for the following purposes and as
        otherwise described in this Privacy Policy or at the time of collection:
        <br></br>
        <br></br>
        <strong>Service delivery.</strong> We may use your personal information
        to:<br></br>
        <br></br>• provide, operate and improve the Service, such as to enable
        you to make purchases of in-app purchases;<br></br>
        <br></br>• establish and maintain your account on the Service;<br></br>
        <br></br>• communicate with you about the Service, including by sending
        you announcements, updates, security alerts, and support and
        administrative messages;<br></br>
        <br></br>• provide customer support and maintenance for the Service;
        <br></br>
        <br></br>
        <strong>Direct Marketing.</strong> We may use your personal information
        to send you Tribal Network-related marketing communications as permitted
        by law. You will have the ability to opt-out of our marketing and
        promotional communications as described in the Your Choices section
        below.<br></br>
        <br></br>
        <strong>For research and development.</strong> We may use your personal
        information for research and development purposes, including to analyze
        and improve the Service and our business.<br></br>
        <br></br>
        <strong>To create anonymous data.</strong> We may create aggregated,
        de-identified or other anonymous data records from your personal
        information and other individuals whose personal information we collect.
        We make personal information into anonymous data by excluding
        information (such as your name) that makes the data personally
        identifiable to you. We may use this anonymous data and share it with
        third parties for our lawful business purposes, including to analyze and
        improve the Service and promote our business.<br></br>
        <br></br>
        <strong>To comply with laws and regulations.</strong> We use your
        personal information as we believe necessary or appropriate to comply
        with applicable laws, lawful requests, and legal process, such as to
        respond to subpoenas or requests from government authorities.<br></br>
        <br></br>
        <strong>For compliance, fraud prevention and safety.</strong> We may use
        your personal information and disclose it to law enforcement, government
        authorities, and private parties as we believe necessary or appropriate
        to: (a) protect our, your or others’ rights, privacy, safety or property
        (including by making and defending legal claims); (b) audit our internal
        processes for compliance with legal and contractual requirements; (c)
        enforce the terms and conditions that govern the Service; and (d)
        protect, investigate and deter against fraudulent, harmful,
        unauthorized, unethical or illegal activity, including cyber-attacks and
        identity theft.<br></br>
        <br></br>
        <strong>With your consent.</strong> In some cases we may specifically
        ask for your consent to collect, use or share your personal information,
        such as when required by law.<br></br>
        <br></br>
        <strong>HOW WE SHARE YOUR PERSONAL INFORMATION</strong>
        <br></br>
        <br></br>
        We may share your personal information with the following third parties
        and as otherwise described in this Privacy Policy or at the time of
        collection:<br></br>
        <br></br>
        <strong>Service providers.</strong> Companies and individuals that
        provide services on our behalf or help us operate the Service or our
        business (such as order fulfillment, payment processing, customer
        support, hosting, analytics, email delivery, marketing, database
        management services, returns processing and risk and fraud mitigation).
        <br></br>
        <br></br>
        <strong>Third party platforms.</strong> Social media and other third
        party platforms that you connect to the Service, such as when you use
        options to access the Service by logging into a social media platform.
        Please note, we do not control the third party’s use of your personal
        information.<br></br>
        <br></br>
        <strong>The public.</strong> Other users of the Service and the public,
        when you disclose personal information for public use. For instance, you
        may be able review a product that you purchased, and we will display
        your name along with the content you submit. We do not control how other
        users or third parties use any personal information that you make
        available to them. Please be aware that any information you post
        publicly can be cached, copied, screen captured or stored elsewhere by
        others (e.g., search engines) before you have a chance to edit or remove
        it.<br></br>
        <br></br>
        <strong>Professional advisors.</strong> Professional advisors, such as
        lawyers, bankers, auditors and insurers, where necessary in the course
        of the professional services that they render to us.<br></br>
        <br></br>
        <strong>Authorities and others.</strong> Law enforcement, government
        authorities, and private parties, as we believe in good faith to be
        necessary or appropriate to comply with law or for the compliance, fraud
        prevention and safety purposes described above.<br></br>
        <br></br>
        <strong>YOUR CHOICES</strong>
        <br></br>
        <br></br>
        In this section, we describe the rights and choices available to all
        users.<br></br>
        <br></br>
        <strong>Access or update your account information.</strong> If you have
        registered for an account with us, you may review and update certain
        personal information in your account profile by logging into the
        account.<br></br>
        <br></br>
        <strong>Do Not Track.</strong> Some Internet browsers may be configured
        to send “Do Not Track” signals to the online services that you visit. We
        currently do not respond to “Do Not Track” or similar signals. To find
        out more about “Do Not Track,” please visit http://www.allaboutdnt.com
        <br></br>
        <br></br>
        <strong>Privacy settings and location data.</strong> Users of our App
        can disable our access to their device’s precise geo-location in their
        mobile device settings.<br></br>
        <br></br>
        <strong>Choosing not to share your personal information.</strong> If you
        do not provide information that we need to provide the Service, we may
        not be able to provide you with the Service or certain features. We will
        tell you what information you must provide to receive the Service when
        we request it.<br></br>
        <br></br>
        <strong>Third-party platforms or social media networks.</strong> If you
        choose to create an account through or connect the Service with another
        third-party platform, you may have the ability to limit the information
        that we may obtain from the third-party at the time you log in to the
        Service using the third-party’s authentication service or otherwise
        connect your account. You may also be able to control your settings
        through the third-party’s platform or service after you have connected
        your accounts.<br></br>
        <br></br>
        <strong>DELETING DATA AND INFORMATION</strong>
        <br></br>
        <br></br>
        Users on the App and Site can delete their Account. Once an account is
        deleted, we will erase ALL data of the User associated with their
        account including messages, their connections, and their personal
        information. The process can be undone once the user proceeds with the
        deletion of data.<br></br>
        <br></br>
        <strong>OTHER SITES AND SERVICES</strong>
        <br></br>
        <br></br>
        The Sites may contain links to other websites and online services
        operated by third parties. These links are not an endorsement of, or
        representation that we are affiliated with, any third party. In
        addition, our content may be included on web pages or online services
        that are not associated with us. We do not control third party websites
        or online services, and we are not responsible for their actions. Other
        websites and services follow different rules regarding the collection,
        use and sharing of your personal information. We encourage you to read
        the privacy policies of the other websites and online services you use.
        <br></br>
        <br></br>
        <strong>SECURITY PRACTICES</strong>
        <br></br>
        <br></br>
        The security of your personal information is important to us. We employ
        a number of organizational, technical and physical safeguards designed
        to protect the personal information we collect. However, security risk
        is inherent in all internet and information technologies and we cannot
        guarantee the security of your personal information.
        <strong>INTERNATIONAL DATA TRANSFERS</strong>
        <br></br>
        <br></br>
        Tribal Network is headquartered in the United States and may have
        service providers in other countries. Your personal information may be
        transferred to the United States or other locations outside of your
        state, province, country, or other governmental jurisdiction where
        privacy laws may not be as protective as those in your jurisdiction.
        <strong>CCPA – For U.S.</strong>
        <br></br>
        <br></br>
        <strong>Your California privacy rights.</strong> The CCPA grants
        California residents the following rights. However, these rights are not
        absolute, and in certain cases we may decline your request as permitted
        by law.<br></br>
        <br></br>
        <strong>• Information.</strong> You can request information about how we
        have collected, used and shared and used your Personal Information
        during the past 12 months.<br></br>
        <br></br>• The categories of Personal Information that we have
        collected.<br></br>
        <br></br>• The categories of sources from which we collected Personal
        Information.<br></br>
        <br></br>• The business or commercial purpose for collecting and/or
        selling Personal Information.<br></br>
        <br></br>• The categories of third parties with whom we share Personal
        Information.<br></br>
        <br></br>• Whether we have disclosed your Personal Information for a
        business purpose, and if so, the categories of Personal Information
        received by each category of third party recipient.<br></br>
        <br></br>• Whether we’ve sold your Personal Information, and if so, the
        categories of Personal Information received by each category of third
        party recipient.<br></br>
        <br></br>
        <strong>• Access.</strong> You can request a copy of the Personal
        Information that we have collected about you during the past 12 months.
        <br></br>
        <br></br>
        <strong>• Deletion.</strong> You can ask us to delete the Personal
        Information that we have collected from you.<br></br>
        <br></br>
        You are entitled to exercise the rights described above free from
        discrimination in the form of legally prohibited increases in the price
        or decreases in the quality of our Service.<br></br>
        <br></br>
        <strong>How to exercise your California rights.</strong> You may
        exercise your California privacy rights described above as follows:
        <br></br>
        <br></br>
        <strong>• Right to information, access and deletion.</strong> You can
        request to exercise your information, access and deletion rights by
        emailing ---@Tribalnetwork.org. We reserve the right to confirm your
        California residence to process your requests and will need to confirm
        your identity to process your requests to exercise your information,
        access or deletion rights. As part of this process, government
        identification may be required. Consistent with California law, you may
        designate an authorized agent to make a request on your behalf. In order
        to designate an authorized agent to make a request on your behalf, you
        must provide a valid power of attorney, the requester’s valid
        government-issued identification, and the authorized agent’s valid
        government issued identification. We cannot process your request if you
        do not provide us with sufficient detail to allow us to understand and
        respond to it.<br></br>
        <br></br>
        <strong>• Request a list of third party marketers.</strong> California’s
        “Shine the Light” law (California Civil Code § 1798.83) allows
        California residents to ask companies with whom they have formed a
        business relationship primarily for personal, family or household
        purposes to provide certain information about the companies’ sharing of
        certain personal information with third parties for their direct
        marketing purposes during the preceding year (if any). You can submit
        such a request by sending an email to ---@Tribalnetwork.org with “Shine
        the Light” in the subject line. The request must include your current
        name, street address, city, state, and zip code and attest to the fact
        that you are a California resident.<br></br>
        <br></br>
        We cannot process your request if you do not provide us with sufficient
        detail to allow us to understand and respond to it.<br></br>
        <br></br>
        <strong>GENERAL DATA PROTECTION REGULATION (GDPR)</strong>
        <br></br>
        <br></br>
        If you are from the European Economic Area (EEA), Tribal Network legal
        basis for collecting and using the personal information described in
        this Privacy Policy depends on the Personal Data we collect and the
        specific context in which we collect it.<br></br>
        <br></br>
        Tribal Network may process your Personal Data because:<br></br>
        <br></br>• We need to perform a contract with you<br></br>
        <br></br>• You have given us permission to do so<br></br>
        <br></br>• The processing is in our legitimate interests and it’s not
        overridden by your rights<br></br>
        <br></br>• For payment processing purposes<br></br>
        <br></br>• To comply with the law<br></br>
        <br></br>
        <strong>Retention of Data</strong>
        <br></br>
        <br></br>
        Tribal Network will retain your Personal Data only for as long as is
        necessary for the purposes set out in this Privacy Policy. We will
        retain and use your Personal Data to the extent necessary to comply with
        our legal obligations (for example, if we are required to retain your
        data to comply with applicable laws), resolve disputes, and enforce our
        legal agreements and policies.<br></br>
        <br></br>
        Tribal Network will also retain Usage Data for internal analysis
        purposes. Usage Data is generally retained for a shorter period of time,
        except when this data is used to strengthen the security or to improve
        the functionality of our Service, or we are legally obligated to retain
        this data for longer time periods.<br></br>
        <br></br>
        <strong>Transfer of Data</strong>
        <br></br>
        <br></br>
        Your information, including Personal Data, may be transferred to — and
        maintained on — computers located outside of your state, province,
        country or other governmental jurisdiction where the data protection
        laws may differ than those from your jurisdiction.<br></br>
        <br></br>
        Your consent to this Privacy Policy followed by your submission of such
        information represents your agreement to that transfer.<br></br>
        <br></br>
        Tribal Network will take all steps reasonably necessary to ensure that
        your data is treated securely and in accordance with this Privacy Policy
        and no transfer of your Personal Data will take place to an organization
        or a country unless there are adequate controls in place including the
        security of your data and other personal information.<br></br>
        <br></br>
        <strong>Disclosure of Data</strong>
        <br></br>
        <br></br>
        Legal Requirements<br></br>
        <br></br>
        Tribal Network may disclose your Personal Data in the good faith belief
        that such action is necessary to:<br></br>
        <br></br>• To comply with a legal obligation<br></br>
        <br></br>• To protect and defend the rights or property of Tribal
        Network<br></br>
        <br></br>• To prevent or investigate possible wrongdoing in connection
        with the Service<br></br>
        <br></br>• To protect the personal safety of users of the Service or the
        public<br></br>
        <br></br>• To protect against legal liability<br></br>
        <br></br>
        <strong>Security of Data</strong>
        <br></br>
        <br></br>
        The security of your data is important to us, but remember that no
        method of transmission over the Internet, or method of electronic
        storage is 100% secure. While we strive to use commercially acceptable
        means to protect your Personal Data, we cannot guarantee its absolute
        security.<br></br>
        <br></br>
        <strong>Your rights under the GDPR</strong>
        <br></br>
        <br></br>
        If you are a resident of the European Economic Area (EEA), you have
        certain data protection rights. Tribal Network aims to take reasonable
        steps to allow you to correct, amend, delete, or limit the use of your
        Personal Data.<br></br>
        <br></br>
        If you wish to be informed what Personal Data we hold about you and if
        you want it to be removed from our systems, please contact us.<br></br>
        <br></br>
        In certain circumstances, you have the following data protection rights:
        <br></br>
        <br></br>
        <strong>
          • The right to access, update or to delete the information we have on
          you.
        </strong>{" "}
        Whenever made possible, you can access, update or request deletion of
        your Personal Data directly within your account settings section. If you
        are unable to perform these actions yourself, please contact us to
        assist you.<br></br>
        <br></br>
        <strong>• The right of rectification.</strong> You have the right to
        have your information rectified if that information is inaccurate or
        incomplete.<br></br>
        <br></br>
        <strong>• The right to object.</strong> You have the right to object to
        our processing of your Personal Data.<br></br>
        <br></br>• The right of restriction. You have the right to request that
        we restrict the processing of your personal information.<br></br>
        <br></br>
        <strong>• The right to data portability.</strong> You have the right to
        be provided with a copy of the information we have on you in a
        structured, machine-readable and commonly used format.<br></br>
        <br></br>
        <strong>• The right to withdraw consent.</strong> You also have the
        right to withdraw your consent at any time where Tribal Network relied
        on your consent to process your personal information.<br></br>
        <br></br>
        Please note that we may ask you to verify your identity before
        responding to such requests.<br></br>
        <br></br>
        You have the right to complain to a Data Protection Authority about our
        collection and use of your Personal Data. For more information, please
        contact your local data protection authority in the European Economic
        Area (EEA).<br></br>
        <br></br>
        <strong>Service Providers</strong>
        <br></br>
        <br></br>
        We may employ third party companies and individuals to facilitate our
        Service (“Service Providers”), to provide the Service on our behalf, to
        perform Service-related services or to assist us in analyzing how our
        Service is used.<br></br>
        <br></br>
        These third parties have access to your Personal Data only to perform
        these tasks on our behalf and are obligated not to disclose or use it
        for any other purpose.<br></br>
        <br></br>
        <strong>ANALYTICS</strong>
        <br></br>
        <br></br>
        We may use third-party Service Providers to monitor and analyze the use
        of our Service.<br></br>
        <br></br>
        <strong>• Google Analytics</strong>
        <br></br>
        <br></br>
        Google Analytics is a web analytics service offered by Google that
        tracks and reports website traffic. Google uses the data collected to
        track and monitor the use of our Service. This data is shared with other
        Google services. Google may use the collected data to contextualize and
        personalize the ads of its own advertising network.<br></br>
        <br></br>
        For more information on the privacy practices of Google, please visit
        the Google Privacy & Terms web page:
        http://www.google.com/intl/en/policies/privacy/<br></br>
        <br></br>
        Advertising<br></br>
        <br></br>
        We may use third-party Service Providers to show advertisements to you
        to help support and maintain our Service.<br></br>
        <br></br>
        <strong>• AdMob by Google</strong>
        <br></br>
        <br></br>
        AdMob by Google is provided by Google Inc.<br></br>
        <br></br>
        You can opt-out from AdMob by Google service by following the
        instructions described by Google:
        https://support.google.com/ads/answer/2662922?hl=en<br></br>
        <br></br>
        For more information on how Google uses the collected information,
        please visit the “How Google uses data when you use our partners’ sites
        or app” page: http://www.google.com/policies/privacy/partners/ or visit
        the Privacy Policy of Google: http://www.google.com/policies/privacy/
        <br></br>
        <br></br>
        <strong>PAYMENTS</strong>
        We may provide in-app purchase and/or paid services within the Service.
        In that case, we use third-party services for payment processing (e.g.
        payment processors).<br></br>
        <br></br>
        We will not store or collect your payment card details. That information
        is provided directly to our third-party payment processors whose use of
        your personal information is governed by their Privacy Policy. These
        payment processors adhere to the standards set by PCI-DSS as managed by
        the PCI Security Standards Council, which is a joint effort of brands
        like Visa, Mastercard, American Express and Discover. PCI-DSS
        requirements help ensure the secure handling of payment information.
        <br></br>
        <br></br>
        The payment processors we work with are:<br></br>
        <br></br>
        <strong>• Apple Store In-App Payments</strong>
        <br></br>
        <br></br>
        Their Privacy Policy can be viewed at
        https://www.apple.com/legal/privacy/en-ww/<br></br>
        <br></br>
        <strong>• Google Play In-App Payments</strong>
        <br></br>
        <br></br>
        Their Privacy Policy can be viewed at
        https://www.google.com/policies/privacy/<br></br>
        <br></br>
        <strong>CHILDREN’S PRIVACY</strong>
        <br></br>
        <br></br>
        Our Service does not address anyone under the age of 18 (“Children”). We
        do not knowingly collect personally identifiable information from anyone
        under the age of 18. If you are a parent or guardian and you are aware
        that your Child has provided us with Personal Data, please contact us.
        If we become aware that we have collected Personal Data from children
        without verification of parental consent, we take steps to remove that
        information from our servers. We aim to comply with COPPA<br></br>
        <br></br>
        <strong>CHANGES TO THIS PRIVACY POLICY</strong>
        <br></br>
        <br></br>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.<br></br>
        <br></br>
        We will let you know via email and/or a prominent notice on our Service,
        prior to the change becoming effective and update the “effective date”
        at the top of this Privacy Policy.<br></br>
        <br></br>
        You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page.<br></br>
        <br></br>
        <strong>CONTACT US</strong>
        <br></br>
        <br></br>
        If you have any questions about this Privacy Policy, please contact us:
        <br></br>
        <br></br>
        ---@Tribalnetwork.org<br></br>
        <br></br>
        <br></br>
        <br></br>
      </p>
    </body>
  );
}

export { PrivacyPolicy };

function Account() {
  let history = useHistory();

  return (
    <body>
      <div className="pageTitle">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Account</h2>
      </div>
      <div className="settings">
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/personalize"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Personalize</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/changepassword"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Change Password</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/Hidden"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Hidden</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/mydonations"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">My Donations</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
      </div>
    </body>
  );
}

export { Account };

function Notifications() {
  let history = useHistory();

  return (
    <body>
      <div className="pageTitle">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Notifications</h2>
      </div>
      <div className="settings"></div>
    </body>
  );
}

export { Notifications };

function DownloadOptions() {
  let history = useHistory();

  return (
    <body>
      <div className="pageTitle">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Downloads</h2>
      </div>
      <div className="settings"></div>
    </body>
  );
}

export { DownloadOptions };

function Logout() {
  let history = useHistory();

  return (
    <body>
      <div className="pageTitle">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Logout</h2>
      </div>
      <div className="settings"></div>
    </body>
  );
}

export { Logout };
