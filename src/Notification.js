import React, { Component } from 'react'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'
import NotificationManager from 'react-notifications/lib/NotificationManager'

export class Notification extends Component {
    showNotification() {
        NotificationManager.success('copied', '', 1000);
    };

    render() {
        return (
            <div>
                <button onClick={this.showNotification()}>Click me!</button>
            </div>
        )
    }
}

export default Notification
