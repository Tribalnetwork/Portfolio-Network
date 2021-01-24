import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import "./Explore.css"
import HorizontalScrollerCircular from "../components/HorizontalScrollerCircular";
import UserContext from '../components/UserContext'
import WhatsNew from '../components/WhatsNew';
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listFilms,listLiveStreams } from '../graphql/queries'
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

export default class SportsPage extends React.Component {
    render() {
    return(
        <h1>Sports</h1>
        )
    }
}