import React from 'react';
import './settings__tribalBeta.css';
import { Button, IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ReactComponent as ArrowIcon } from '../../icons/tribalBeta__settings__arrow.svg';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


export const Settings__tribalBeta = () => {
  let history = useHistory();

  // for modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h2 id="simple-modal-title" style={logoutStyle.h2}>Good bye for now!</h2>
    </div>
  );


  return (
    <div className='settingBody__tribalBeta'>

      <div className="pageTitle setting__tribalBeta">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text settingText__tribalBeta">Settings</h2>
      </div>

      <div className="settings">

        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/settings/mobileapp"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Mobile App</Button>
            {/*<KeyboardArrowRightIcon fontSize="large" className="rightIcon" />*/}
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/settings/support"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Support</Button>
            {/*<KeyboardArrowRightIcon fontSize="large" className="rightIcon" />*/}
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/settings/termsofservice"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Terms of Service</Button>
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>
        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/settings/privacypolicy"}
            style={{ textDecoration: "none" }} >
            <Button className="settings__Button settingsButton__tribalBeta">Privacy Policy</Button>
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/auth"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Password Reset</Button>
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

        {/* Logout */}
        <div className="button__withArrow buttonArrow__tribalBeta">

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
          <Link
            onClick={
              () => {
                handleOpen()
                setTimeout(() => {
                  handleClose()
                  history.push('/signin');
                  // history.push('/auth');
                }, 2000);
              }
            }
            className="button__link"
            // to={"/settings/logout"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Log out</Button>
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

      </div>
    </div>
  )
}


const logoutStyle = {
  h2: {
    fontFamily: 'Roboto',
    fontSize: '30px',
    color: 'white',
    background: 'repeating-linear-gradient(30deg, #121215, #2c2c2e )',
    lineHeight: '18px',
    letterSpacing: '-0.08px',
    textAlign: 'center',
    padding: '4rem',
    boxShadow: '0px 0px 30px 2px #1c1c1e',
    borderRadius: '4px'
  }
}