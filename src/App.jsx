import React from 'react';
import Header from './components/Header';
import CategoriesProvider from './context/CategoriesContext';
import EventsProvider from './context/EventsContext';
import Form from './components/Form';
import ListEvents from './components/ListEvents';

function App() {
  return (
    <CategoriesProvider>
      <EventsProvider>
        <Header/>
        <div className="uk-container">
          <Form/>
          <ListEvents/>
        </div>
      </EventsProvider>
    </CategoriesProvider>
  );
}

export default App;
