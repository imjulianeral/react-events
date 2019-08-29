import React, { Component } from 'react'
import { CategoriesConsumer } from '../context/CategoriesContext';
import { EventsConsumer } from '../context/EventsContext';

export default class Form extends Component {
    state = {
        name: '',
        category: ''
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <EventsConsumer>
                { ({ events, getEvents }) => {
                    return (                    
                        <form onSubmit={ e => {
                            e.preventDefault();
                            getEvents(this.state);
                        } }>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Search your event by name or category
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input 
                                        type="text" 
                                        name="name"
                                        className="uk-input"
                                        placeholder="Name of the event or City"
                                        onChange={ this.handleChange }
                                    />
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select 
                                        name="category"
                                        className="uk-select"
                                        onChange={ this.handleChange }
                                    >
                                        <option defaultValue>Select a Category</option>
                                        <CategoriesConsumer>
                                            {({ categories }) => {
                                                return (
                                                    categories.map(category => (
                                                        <option 
                                                            key={category.id}
                                                            value={category.id}
                                                            data-uk-form-select
                                                        >
                                                            { category.name }
                                                        </option>
                                                    ))
                                                )
                                            }}
                                        </CategoriesConsumer>
                                    </select>
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <input type="submit" value="Search" className="uk-button uk-button-danger"/>
                                </div>
                            </div>                
                        </form>
                    )
                } }
            </EventsConsumer>
        )
    }
}
