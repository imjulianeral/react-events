import React from 'react';

const Event = (props) => {
    const {name} = props.data;
    let desc = props.data.description.text;

    if(!name || !desc) return null;

    if (desc.length > 100) {
       desc = desc.substr(0, 100);
    }

    return (
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                { props.data.logo !== null ?
                    <img src={ props.data.logo.url } alt={props.data.name.text} />
                    :
                    null    
                }
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{ props.data.name.text }</h3>
                <p>{desc}</p>
            </div>
            <div className="uk-card-footer">
                <a className="uk-button uk-button-secondary" href={ props.data.url } target="__blank">More about</a>
            </div>
        </div>
    );
};

export default Event;