// This module (file) is just the remaining part of Terms and Services
// June 15, 2021
// Author: Neck
import React from 'react'

export default function OtherTermsAndServices() {
    // first have empty array 
    let terms = [];
    // second with each proparety add terms component (Title as key and conetent as conetent)
    for (let key in otherTerms) {
        terms.push(<Items key={key} title={key} conetent={otherTerms[key]} />)
    }

    // return Ordered List
    return (
        <ol start="9" style={style.ol}>
            {
                terms.map(item => item)
            }
        </ol>
    )
}

// display Items
function Items(props) {
    let termTitle = props.title
    let details = props.conetent
    return (
        <li>
            <strong style={style.strong}>{termTitle}:</strong>
            {
                details.map(item=><p style={style.p}>{item}</p>)
            }
        </li>
    )
}
// custom module
let style = {
    ol:{paddingLeft: "1rem"},
    strong: { fontSize: "19px" },
    p: { marginLeft: "0px", marginTop: "0.25rem", fontSize: "17px", lineHeight: "22px", letterSpacing: "0.36px" },
}

// Terms and conditions (Object)
let otherTerms = {
    "Limited License": [
        "We grant you a limited license to use the Services for personal non-commercial use only. You may not: (a) resell or make any commercial use of this Site and the App or any of the contents of our Services; (b) modify, adapt, translate, reverse engineer, decompile, disassemble or convert any of the contents of the Services not intended to be so read; (c) copy, imitate, mirror, reproduce, distribute, publish, download, display, perform, post or transmit any of the contents of the Services in any form or by any means; or (d) use any data mining, bots, spiders, automated tools or similar data gathering and extraction methods on the contents of the Services or to collect any information from the Site, App or any other user.",
        "Your use of this Site and the App is at your own risk. You agree that you will be personally responsible for your use of this Site and the App. If we determine, in our sole discretion, that you engaged in prohibited activities, were not respectful of other users, or otherwise violated the Terms and Conditions, we may deny you access to our Services on a temporary or permanent basis and any decision to do so is final."
    ],
    "Accounts, Registrations, and Passwords": [
        "You are solely responsible for maintaining the confidentiality of your account and password(s) and for restricting access to your computer and mobile/tablet.  If you open an account, register, or otherwise provide us with any information, you agree to provide us with current, complete, and accurate information as requested by any forms. Tribal Network Beta is not responsible for any errors or delays in responding to any inquiry or request caused by any incorrect, outdated, or incorrect information provided by you or any technical problems beyond the control of Tribal Network Beta. You may not disclose thePassword to another person or entity or permit another entity to access the Site and Apps using such a Password. You must notify Tribal Network Beta immediately of any breach of security or unauthorised use of your account. Tribal Network Beta cannot be responsible and disclaims all liability in connection with the use of any information that you post or display on the Site and App. Multiple profiles of the same person are not allowed on the Site and App."
    ],
    "Account Cancellations & Suspensions": [
        "You may cancel your account at any time in the app under 'settings' and 'support'. When the full app is up, you will have a total of 5 hours of film watch time and 1 hour of live streaming time. If you have used your free trial time and you have a film on the app, you will be required to pay a discounted monthly subscription cost. If you have failed to pay your account may be suspended. If your account is suspended, your films will stay up on the app until you can come back. If you have any issues, you can reach out to us under 'support' in 'settings'."
    ],
    "Intellectual Property Rights": [
        "Your use of the Site, App and its contents grants no rights to you concerning any copyright, designs, and trademarks and all other intellectual property and material rights mentioned, displayed, or relating to the Content (defined below) on the Site and App.  All Content, including third party trademarks, designs, and related intellectual property rights mentioned or displayed on this Site and the App, are protected by national intellectual property and other laws. Any unauthorised reproduction, redistribution or other use of the Content is prohibited and may result in civil and criminal penalties. You may use the Content only with our prior written and express authorisation. To inquire about obtaining authorisation to use the Content, please contact us at Support@tribalnetwork.org.",
        "In addition to the intellectual property rights mentioned above, 'Content' is defined as any graphics, photographs, including all image rights, sounds, music, video, audio, or text on the Site and App."
    ],
    "Digital Millennium Copyright Act": [
        "Tribal Network Beta expects all users to respect the intellectual property rights of others. Tribal Network Beta may remove material that appears in its sole discretion to infringe upon the intellectual property rights of others and we will terminate the access rights of any repeat infringer. If you are a copyright owner or an agent thereof and believe that any Content infringes upon your copyrights, you may notify us at Support@tribalnetwork.org.  The notification must include the following information: physical or electronic signature of the owner or authorized agent of the owner of the allegedly infringed work; identification of the allegedly infringed work; identification of the material that is claimed to be infringing and reasonably sufficient information for Tribal Network Beta to locate the material; contact information of the notifying party, such as an address, telephone number, and email; a statement that the notifying party has a good faith belief that the use of the material in the manner complained of is not authorized by the owner of the allegedly infringed work, its agent or the law; and a statement, under penalty of perjury that the information in the notification is accurate and the notifying party is the owner or authorized agent of the allegedly infringed work."
    ],
    "Monitoring Activity": [
        "Tribal Network Beta has no obligation to monitor this Site and the App or any portion thereof. However, we reserve the right to review any posted content and remove, delete, redact or otherwise modify such content, in our sole discretion, at any time and from time to time, without notice or further obligation to you."
    ],
    "Disclaimer": [
        "TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, TRIBAL NETWORK BETA EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES AND REPRESENTATIONS, EXPRESS OR IMPLIED, INCLUDING ANY (A) WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OR USE AS TO THE SITE, APP AND ITS CONTENT, INCLUDING THE INFORMATION, DATA, SOFTWARE, OR PRODUCTS CONTAINED THEREIN, OR THE RESULTS OBTAINED BY THEIR USE OR AS TO THE PERFORMANCE THEREOF, (B) WARRANTIES OR CONDITIONS ARISING THROUGH COURSE OF DEALING, AND (C) WARRANTIES OR CONDITIONS OF UNINTERRUPTED OR ERROR-FREE ACCESS OR USE. THE SITE AND APP AND ALL CONTENTS THEREIN AND COMPONENTS THEREOF ARE PROVIDED ON AN “AS IS” BASIS AND YOUR USE OF THE SITE AND APP IS AT YOUR OWN RISK."
    ],
    "Limitation of Liability": [
        "You agree that in no event shall Tribal Network Beta be liable to you, or any third party, for any lost profits, incidental, consequential, punitive, special, or indirect damages arising out of or in connection with the Site and App or the Terms and Conditions, even if advised as to the possibility of such damages, regardless of whether the claim for such damages is based in contract, tort, strict liability or otherwise. This limitation on liability includes, but is not limited to, any (i) errors, mistakes, or inaccuracies in any Content or for any loss or damage of any kind incurred by you as a result of your use of or reliance on the Content; (ii) the transmission of any bugs, viruses, Trojan horses or the like which may infect your equipment, failure of mechanical or electronic equipment; (iii) unauthorised access to or use of the Site or Apps secure servers and/or any personal information and/or financial information stored therein; or (iv) theft, operator errors, strikes or other labor problems or any force majeure.You agree that you use the App and/or any Third Party Sites at your own risk. You further understand and agree that we are not responsible or liable for your illegal, unauthorized, or improper use of information transmitted, monitored, stored or received using the App."
    ],
    "Indemnification": [
        "You agree to indemnify and hold Tribal Network Beta and its subsidiaries, affiliates, officers, directors, agents, and employees, harmless from and against any suit, action, claim, demand, penalty or loss, including reasonable attorneys’ fees, made by or resulting from any third party due to or arising out of your use of our Services, breach of the Terms and Conditions or the materials it incorporates by reference, or your violation of any law, regulation, order or other legal mandates, or the rights of a third party."
    ],
    "Dispute Resolution & Governing Laws": [
        "In the event of a dispute arising out of or in connection with these terms or any contract between you and us, then you agree to attempt to settle the dispute by engaging in good faith with us in a process of mediation before commencing arbitration or litigation.",
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States and you hereby submit to the exclusive jurisdiction of the US courts in the State where Tribal III Inc is located in."
    ],
    "Children": [
        "We do not knowingly collect personally identifiable information from anyone under the age of 14. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."
    ],
    "Privacy": [
        "We are committed to comply with the privacy laws and regulations applicable to our jurisdiction and shall process your personal information accordingly and not commit any breach."
    ],
    "Changes": [
        "We reserve the right to update and revise these Terms and Conditions at any time. You will know if these Terms and Conditions have been revised since your last visit to the website or the App. Your use of our Site and App constitutes your acceptance of these Terms and Conditions as amended or revised by us from time to time, and you should, therefore, review these Terms and Conditions regularly."
    ],
    "Electronic Communications": [
        "When you visit the Site, use our App or send us e-mails, you are communicating with us electronically. In so doing, you consent to receive communications from us electronically. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communication is in writing."
    ],
    "Severability": [
        "If any of these Terms and Conditions shall be deemed invalid, void, or for any reason unenforceable, that term shall be deemed severable and shall not affect the validity and enforceability of any remaining terms or conditions."
    ],
    "Assignment": [
        "We shall be permitted to assign, transfer, or subcontract our rights and obligations under these terms without your consent or any notice to you. You shall not be permitted to assign, transfer, or subcontract any of your rights and obligations under this agreement."
    ],
    "Force Majeure": [
        "Tribal Network Beta is not liable for any delays caused by circumstances beyond Tribal Network Beta’s control, e.g. general labour dispute, extreme weather, acts of war, fire, lightning, terrorist attacks, changed governmental orders, technical problems, defects in power- /tele-/computer communications or other communication and defects or delays in the service by sub-suppliers due to circumstances set forth above. Such circumstances shall result in relief from damages and other measures."
    ],
    "Entire Agreement": [
        "These Terms and Conditions set forth the entire understanding and agreement between you and Tribal Network Betaconcerning the subject matter herein and supers all prior or contemporaneous communications and proposals, whether electronic, oral or written concerning the Site and App. A printed version of these Terms and Conditions and any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to these Terms and Conditions to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. Any rights not expressly granted herein are reserved. You may not assign the Terms and Conditions, or assign, transfer or sublicense your rights therein. A failure to act concerning a breach by you or others does not waive Tribal Network Beta's right to act concerning subsequent or similar breaches."
    ],
    "Relationship": [
        "No agency, partnership, joint venture or employment relationship is created as a result of these Terms and neither of us has any authority of any kind to bind the other in any respect."
    ],
    "Violation and Termination": [
        "Any conduct that in any way violates these Terms or any posted restrictions or guidelines may result, in our sole discretion, in the termination of your license and right to utilize the Services to access Content or for any other purpose, and/or our pursuit of any legal damages or remedies. If necessary, or as authorized under applicable law, we may cooperate with local, state and/or federal authorities to protect the Sites, the App, the Services, the Content, Tribal Network Beta, its Affiliates, Licensors, members, employees, agents and/or visitors; to comply with applicable laws; or to prevent unauthorized access or use of the Services or the Content. We retain the right to deny access to the Services, in our sole discretion, to any visitor/user for any reason, including for any violation of these Terms."
    ],
    "Contact/Feedback": [
        "We welcome your feedback on the accessibility of Tribal Network Beta. Please let us know if you encounter accessibility barriers on the Tribal Network Beta app or Tribal Network website:"
    ]
}



