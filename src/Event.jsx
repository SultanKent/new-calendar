import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ event, onDelete }) => {
  const handleDelete = () => {
    onDelete(event.id);
  };

  return (
    <li className="event">
      <span className="event-date">{event.date}</span>
      <span className="event-title">{event.title}</span>
      <button onClick={handleDelete}>Удалить</button>
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Event;
