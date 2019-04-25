import React, { Component } from 'react'

export default class Form extends Component {

    nameRef = React.createRef();
    categoryRef = React.createRef();

    showOptions = (key) => {
        const category = this.props.categories[key];
        const { id, name_localized } = category;

        if(!id || !name_localized) return null;

        return(
            <option key={id} value={id}>{name_localized}</option>
        )
    }

    searchEvent = e => {
        e.preventDefault();

        const query = {
            name: this.nameRef.current.value,
            category: this.categoryRef.current.value
        }

        this.props.getEvents(query);
    }

    render() {
        const categories = Object.keys(this.props.categories);
        return (
        <form onSubmit={ this.searchEvent }>
            <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                    Search your event by name or category
                </legend>

                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input className="uk-input" type="text" ref={ this.nameRef } placeholder="Name of the event or city"/>
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <select className="uk-select" ref={ this.categoryRef }>
                            { categories.map(this.showOptions) }
                        </select>
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <button className="uk-button uk-button-danger">Search</button>
                    </div>
                </div>
            </fieldset>
        </form>
        )
    }
}
