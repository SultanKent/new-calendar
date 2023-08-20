import React from 'react';
import './App.scss';
import Calendar from './Calendar';
import EventForm from './EventForm';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [events, setEvents] = useLocalStorage('events', []);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  return (
    <div className="app">
      <h1>Календарь событий</h1>
      <Calendar events={events} onDelete={deleteEvent} />
      <EventForm onAdd={addEvent} />
    </div>
  );
};

export default App;