import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Settings.css";
import {  IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ClearIcon from '@material-ui/icons/Clear';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

// function Notifications() {
//   let history = useHistory();

//   return (
//     <body>
//       <div className="pageTitle">
//         <IconButton edge="end" color="white" onClick={() => history.goBack()}>
//           <ArrowBackIosIcon className="backIcon" />
//         </IconButton>
//         <h2 className="text">Notifications</h2>
//       </div>
//       <div className="settings"></div>
//     </body>
//   );
// }

function Notifications() {
    // generating objects
    // for future will need to bring data from API
    function generatenotify(_from, _subject, _body, _time, _read = false) {
      return { from: _from, subject: _subject, body: _body, time: _time, read: _read }
    }
    // template Data
    let testdata = [
      generatenotify("Tim Halbrook", "Hey how are you doing!", "Just checking in to see if you still want to have a meeting next Thursday. We were able to get the new filming location and it'll be ready for us next month! Get back to me when you can. Thanks, Tim", new Date(2020, 11, 9, 2, 3, 4))
      , generatenotify("Naura Cook", "Resechedule business team", "Body6", new Date(2020, 16, 9, 2, 3, 4))
      , generatenotify("Tina Fairbrooks", "Gig inquiry", "Body2", new Date(2020, 12, 9, 2, 3, 4), true)
      , generatenotify("Tribal Network", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
      , generatenotify("Tribal Network", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
      , generatenotify("Tribal Network", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
      , generatenotify("Tribal Network", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
      , generatenotify("Tribal Network", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
      , generatenotify("Tribal Network", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
      , generatenotify("Tribal Network", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
      , generatenotify("Tribal Network", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
      , generatenotify("Tribal Network", "You just got a star", "Body5", new Date(2020, 15, 9, 2, 3, 4), true)
    ]
    // states
    let history = useHistory();
    const [id, setid] = useState(-1);
    const [read, setread] = useState(false);
    const [data, setdata] = useState(testdata.sort((a, b) => a.time > b.time ? -1 : 1));
  
    // notification page header
    var header = (
      <div className="pageTitle notification-header">
        <IconButton
          edge="end"
          color="white"
          onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Notifications</h2>
      </div>
    )
  
    // console.log("read:"+ read)
    // console.log("data:"+ data)
  
    // if message is 
    if (!read || id === -1) {
      return (
          <div className='notifications-page'>
            {header}
            {/* notifications */}
            <main className='notification-box'>
              <div className="notifications-container">
                {
                  data.map((notify, index) => {
                    // if notify.read == true
                    // notify is the current notification
                    // index is the array index starting from 0
                    // console.log(notify, index)
  
                    // notifications that have not been read yet
                    if (notify.read)
                      return (
                        <div className="notification-row" style={{ backgroundColor: '#222222' }}>
                          <div className="notification-column" >
                            {/* <input type="radio" id={index} onClick={() => setid(index)} checked={index === id} /> */}
                            <div className='container'>
                              <div className='check'
                                id={index}
                                onClick={() => setid(index)}
                                style={index === id ? { background: "repeating-linear-gradient(to left,#D3C095,#A07923)", border: '4px solid #222222' } : { backgroundColor: "#222222" }}>
                              </div>
                            </div>
                          </div>
                          <p className="notification-column"  >  {notify.from} <span className='notification-bar'>|</span> {notify.subject} </p>
                        </div>
                      )
                    // notification that have been read
                    else
                      return (
                        <div className="notification-row" >
                          <div className="notification-column" >
                            {/* <input type="radio" id={index} onClick={() => setid(index)} checked={index === id} /> */}
                            <div className='container'>
                              <div className='check'
                                id={index}
                                onClick={() => setid(index)}
                                style={index === id ? { background: "repeating-linear-gradient(to left,#D3C095,#A07923)", border: '4px solid #15161B' } : { backgroundColor: "#15161B" }}>
                              </div>
                            </div>
                          </div>
                          <p className="notification-column">  {notify.from} <span className='notification-bar'>|</span> {notify.subject}</p>
                        </div>
                      )
                  }
                  )}
              </div>
              {/* buttons */}
              <div className='btns-container'>
                <button
                  className='clear-btn'
                  onClick={() => {
                    if (id !== -1) {
                      let tmp = data
                      tmp.splice(id, 1)
                      setdata(tmp)
                      setid(-1)
                      setread(false)
                    }
                  }}> <ClearIcon style={{color:"white"}} fontSize='large'/> </button>
                <button
                  className='read-btn'
                  onClick={() => {
                    if (id !== -1)
                      setread(true)
                  }}> <MailOutlineIcon style={{color:"white"}} fontSize='large'/> </button>
              </div>
            </main>
          </div>
      )
    }
    else {
      let entry = data[id]
      return (<body>
        {header}
        <h1> From: {entry.from} </h1>
        <p> {entry.body} </p>
  
        <div >
          <button onClick={() => {
            if (id !== -1) {
              let tmp = data
              tmp.splice(id, 1)
              setdata(tmp)
              setid(-1)
              setread(false)
            }
          }}> Trash current notification</button>
          <button onClick={() => {
            setid(-1)
            setread(false)
            let tmp = data;
            tmp[id].read = true
            setdata(tmp)
          }}> Check rest of notifications </button>
        </div>
      </body>)
  
    }
  
  }

  
  export default Notifications;