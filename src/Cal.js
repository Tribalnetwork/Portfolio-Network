import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Cal.css'

export class Cal extends Component {

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
            <Calendar
            style={{ width: '100%' }}
            onChange={this.onChange}
            value={this.state.date}
            />
            </div>
        )
    }
}

export default Cal
