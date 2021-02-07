import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Settings.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ClearIcon from '@material-ui/icons/Clear';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AttachmentSharpIcon from '@material-ui/icons/AttachmentSharp';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';

import "./Notifications.css"

function Notifications() {
  // generating objects
  // for future will need to bring data from API
  function generatenotify(_from, _subject, _body, _time, _read = false) {
    return { from: _from, subject: _subject, body: _body, time: _time, read: _read }
  }
  // template Data
  let testdata = [
    generatenotify("Tim Halbrook", "Hey how are you doing!", "Just checking in to see if you still want to have a meeting next Thursday.\rWe were able to get the new filming location and it'll be ready for us next month!\rGet back to me when you can.\rThanks,\rTim", new Date(2020, 20, 9, 2, 3, 4))
    , generatenotify("Naura Cook", "Resechedule business team", "Body6", new Date(2020, 16, 9, 2, 3, 4))
    , generatenotify("Tina Fairbrooks", "Gig inquiry", "Body2", new Date(2020, 12, 9, 2, 3, 4), true)
    , generatenotify("Junjie", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
    , generatenotify("Ty", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
    , generatenotify("Josh", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
    , generatenotify("Neck", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
    , generatenotify("Zack", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
    , generatenotify("Paul", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
    , generatenotify("Tallah", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
    , generatenotify("Osang", "Connection Request", "Body4", new Date(2020, 14, 9, 2, 3, 4))
    , generatenotify("Tanya", "You just got a star", "Body5", new Date(2020, 15, 9, 2, 3, 4), true)
  ]
  // states
  let history = useHistory();
  const [id, setid] = useState(-1);
  let [data, setdata] = useState(testdata.sort((a, b) => a.time > b.time ? -1 : 1));
  let [notifyState, setNotifyState] = useState(0); // 0 normal, 1 user is reading mesg, 2 is about to replay or email somebody
  let [counter, setCounter] = useState(0);
  let [selectedNotifys, setSelectedNotifys] = useState({}) // adding selected notifications

  function incrCounter() {
    let c = counter + 1;
    setCounter(c)
  }
  
  function decrCounter() {
    if (counter !== 0) {
      let c = counter - 1;
      setCounter(c)
    }
  }

  // notification page header
  var header = (
    <div className="pageTitle notification-header">
      {/* <IconButton
        edge="end"
        color="white"
        onClick={() => history.goBack()}>
        <ArrowBackIosIcon className="backIcon" />
      </IconButton> */}
      <h2 className="text" style={{ padding: '0px' }}>Notifications</h2>
      {
        notifyState === 0 ?
          <div className='selected-items'>
            {
              counter > 0 ? `${counter} Selected` : ''
            }
          </div> : null
      }
    </div>
  )

  if (notifyState === 0) {
    return (
      <div className='notifications-page'>
        {header}
        {/* notifications */}

        <main className='notification-box'>
          <div className="notifications-container">
            {
              data.map((notify, index) => {
                // notifications been opend 
                if (notify.read)
                  return (
                    <div className="notification-row" style={{ backgroundColor: '#222222' }}>
                      <div className="notification-column" >
                        <div className='container'>
                          <div
                            className='check'
                            onClick={() => {
                              // if it is false it means we don't have it or it is not been selected yet
                              selectedNotifys[index] === true ? decrCounter() : incrCounter();
                              selectedNotifys[index] === true ? selectedNotifys[index] = false : selectedNotifys[index] = true;
                            }}
                            style={selectedNotifys[index] === true ? { background: "repeating-linear-gradient(to left,#D3C095,#A07923)", border: '4px solid #222222' } : { backgroundColor: "#222222" }}>
                          </div>
                        </div>
                      </div>
                      <p className="notification-column"
                        onClick={() => { setNotifyState(1); setid(index) }} >
                        {notify.from} <span style={{ "margin": "auto 4px" }}>|</span> {notify.subject}
                      </p>
                    </div>
                  )
                // notification that have been read
                else
                  return (
                    <div className="notification-row" >
                      <div className="notification-column" >
                        <div className='container'>
                          <div className='check'
                            onClick={() => {
                              selectedNotifys[index] === true ? decrCounter() : incrCounter();
                              selectedNotifys[index] === true ? selectedNotifys[index] = false : selectedNotifys[index] = true;
                            }}
                            style={selectedNotifys[index] === true ? { background: "repeating-linear-gradient(to left,#D3C095,#A07923)", border: '4px solid #15161B' } : { backgroundColor: "#15161B" }}>
                          </div>
                        </div>
                      </div>
                      <p className="notification-column"
                        onClick={() => { setNotifyState(1); setid(index) }}>
                        {notify.from} <span style={{ "margin": "auto 4px" }}>|</span> {notify.subject}
                      </p>
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
                if (counter > 0) {
                  // delete
                  // 1 delete
                  let newDataSet = data;
                  console.log(selectedNotifys)
                  let position = 0;
                  let occur = 0;
                  for (const prop in selectedNotifys) {
                    if (selectedNotifys[prop] === true) {
                      position = parseInt(prop) - occur;
                      newDataSet = newDataSet.filter((_, index) => index !== position);
                      occur++;
                    }
                  }
                  setdata(newDataSet);
                  setCounter(0);
                  setSelectedNotifys({})
                } else {
                  // return back
                  history.goBack()
                }
              }}>
              {counter > 0 ? <DeleteOutlineSharpIcon style={{ color: "white", fontWeight: "200", fontSize: '2.25rem' }} /> : <ClearIcon style={{ color: "white", fontWeight: "200", fontSize: '2.5rem' }} />}
            </button>
            <button
              className='read-btn'
              onClick={() => {
                if (counter > 0) {
                  setNotifyState(2)
                }
              }
              }> <MailOutlineIcon style={{ color: "white", fontWeight: "200", fontSize: '2.5rem' }} /> </button>
          </div>
        </main>
      </div>
    )
  } else if (notifyState === 1) {
    // change state to read
    let newData = data;
    newData[id].read = true;
    let entry = data[id]
    // let p = entry.body
    // let regex = /\n/g
    // console.log(p.match(regex))
    // console.log(p.replace(regex, "<br/>"))
    // p = p.replace(regex, "<br/>")
    return (
      <div className='notifications-page'>
        {header}
        <main className='notification-box'>
          <h1 className='from'>
            From: {entry.from}
          </h1>
          <div className='notification-body'> 
            <p className='msg-subject'>{entry.subject}</p>
            <p className='msg-body'>{entry.body}</p>
            {/* <p className='msg-time'>{entry.time}</p> */}
          </div>

          <div className='btns-container'>
            <button
              className='clear-btn'
              onClick={() => {setNotifyState(0); setid(-1); setdata(newData)}}>
              <ClearIcon style={{ color: "white", fontWeight: "200", fontSize: '2.5rem' }} />
            </button>
            <button
              className='read-btn'
              onClick={() => {
                setNotifyState(2);
                setdata(newData);
              }}>
              <MailOutlineIcon style={{ color: "white" }} fontSize='large' />
            </button>
          </div>
        </main>
      </div>
    )
  } else if (notifyState === 2) {
    let to = '';

    if (id !== -1) {
      to = data[id].from;
    } else {
      for (const prop in selectedNotifys) {
        if (selectedNotifys[prop] === true) {
          // console.log(data[prop].from)
          to = to + data[prop].from + ', ';
        }
      }
    }

    return (
      <div className='notification-replay'>
        <div className='replay-header'>
          <IconButton
            style={{ paddingLeft: "18.25px" }}
            edge="end"
            color="white"
            onClick={() => {setNotifyState(0); setid(-1)}}>
            <ArrowBackIosIcon className="backIcon" style={{ fontSize: '1.2rem' }} />
          </IconButton>
          <h2>Email</h2>
        </div>
        <div className='replay-body'>
          {/* to */}
          <label>
            <h3 style={{ marginTop: "3rem" }}>To</h3>
            <input
              type='text'
              value={to}
              style={{ textAlign: 'left', paddingLeft: '5px', paddingRight: '5px' }}
            />
          </label>
          {/* subject */}
          <label>
            <h3 style={{ marginTop: "19px" }}>Subject</h3>
            <input type='text' style={{ textAlign: 'left' }} />
          </label>
          {/* message body */}
          <label>
            <h3 style={{ marginTop: "1.5rem" }}>Body</h3>
            <textarea />
          </label>
          <div className='msg-btns'>
            {/* attachment button */}
            <button type='button' className='msg-attachment'>
              <AttachmentSharpIcon style={{ color: "white" }} />
            </button>
            {/* send message */}
            <button type='button' className='send-msg'>
              <MailOutlineIcon style={{ color: "white", fontSize: '3rem' }} />
            </button>
          </div>

        </div>
      </div>
    )
  }
}


export default Notifications;