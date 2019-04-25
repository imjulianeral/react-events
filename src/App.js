import React, { Component } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Events from './components/Events';

export default class App extends Component {
  state = {
    categories: [],
    events: []
  }

  token = 'VPQUC3DNG3L3SJRUP3C4';
  
  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url)
            .then(resp => { return resp.json() })
            .then(data => {
              this.setState({
                categories: data.categories
              });
            })
            .catch(err => console.error(err));
  }

  getEvents = async query => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${query.name}&sort_by=date&categories=${query.category}&token=${this.token}`;

    await fetch(url)
            .then(resp => { return resp.json() })
            .then(data => {
              this.setState({
                events: data.events
              });
            })
            .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="uk-container">
          <Form 
            categories={ this.state.categories }
            getEvents={ this.getEvents }
          />
          <Events/>
        </div>
      </div>
    )
  }
}
