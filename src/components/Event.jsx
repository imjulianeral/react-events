import React from 'react';

const Event = ({ event: { logo, name: { text }, url, description } }) => {
    let desc = description.text;
    if (desc) {
        if (desc.length > 250) {
            desc = desc.substr(0, 250);
        }
    } else {
        desc = null
    }

    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    { logo ? <img src={ logo.url } alt={ text }/> : null }
                </div>
                <div className="uk-card-body">
                    <div className="uk-card-title">{ text }</div>
                    { desc }
                </div>
                <div className="uk-card-footer">
                    <a href={ url } target="_blank" rel="noopener noreferrer" className="uk-button uk-button-secondary"> See More </a>
                </div>
                
            </div>
        </div>
    );
};

export default Event;