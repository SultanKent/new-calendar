import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EventForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title,
      date,
    };
    onAdd(newEvent);
    setTitle('');
    setDate('');
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Добавить событие</h2>
      <div>
        <label htmlFor="event-title">Название:</label>
        <input
          id="event-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="event-date">Дата:</label>
        <input
          id="event-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
};

EventForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default EventForm;