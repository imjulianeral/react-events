import React, { Component } from 'react'
import Event from './Event';

export default class Events extends Component {
  render() {
    return (
      <div className="uk-child-width-1-4@m" uk-grid="true">
        { Object.keys(this.props.events).map(key => (
            <Event
                key={ key }
                data={ this.props.events[key] }
            />
        )) }
      </div>
    )
  }
}
