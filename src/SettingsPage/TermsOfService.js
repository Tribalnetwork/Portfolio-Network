import React from "react";
import { useHistory } from "react-router-dom";
import "./Settings.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


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

export default TermsOfService;