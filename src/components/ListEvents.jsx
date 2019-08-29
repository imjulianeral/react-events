import React, { Fragment } from 'react';
import { EventsConsumer } from '../context/EventsContext';
import Event from './Event';

const ListEvents = () => {
    return (
        <Fragment>
            <h3 className="uk-text-center">Results</h3>
            <div className="uk-child-width-1-3@m" uk-grid="true">
                <EventsConsumer>
                    { ({ events }) => (
                        events.map(event => (
                            <Event
                                key={ event.id }
                                event={ event }
                            />
                        ))
                    ) }
                </EventsConsumer>
            </div>
        </Fragment>
    );
};

export default ListEvents;