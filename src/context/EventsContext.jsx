import React, { Component } from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

export default class EventsProvider extends Component {
    state = { 
        events: []
    }

    token = 'KA6QSJLE4IRFLY4BMOEY';

    getEvents = async ({ name, category }) => {
        const url = `https://www.eventbriteapi.com/v3/events/search/?q=${name}&categories=${category}&sort_by=date&token=${this.token}&locale=es_ES`
        let resp = await axios.get(url);

        this.setState({ events: resp.data.events });
        console.log(this.state.events)
    }
    render() {
        return (
            <EventsContext.Provider
                value={{
                    events: this.state.events,
                    getEvents: this.getEvents
                }}
            >
                {this.props.children}               
            </EventsContext.Provider>
        )
    }
}
