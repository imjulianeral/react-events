import React, { Component } from 'react';
import axios from 'axios';

const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

export default class CategoriesProvider extends Component {
    state = {
        categories: []
    };

    token = 'KA6QSJLE4IRFLY4BMOEY';

    componentDidMount() {
        this.getCategories()
    }

    getCategories = async () => {
        const url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let resp = await axios.get(url);

        this.setState({ categories: resp.data.categories })
    }

    render() {
        return (
            <CategoriesContext.Provider
                value={{
                    categories: this.state.categories
                }}
            >
                {this.props.children}               
            </CategoriesContext.Provider>
        )
    }
}
