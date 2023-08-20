import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const Calendar = ({ events, onDelete }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const currentYear = currentTime.getFullYear();
  const currentMonth = currentTime.toLocaleString('default', { month: 'long' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getTimeRemaining = (eventDate) => {
    const eventTime = new Date(eventDate);
    const timeDiff = eventTime.getTime() - currentTime.getTime();

    if (timeDiff > 0) {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return `${days}д ${hours}ч ${minutes}м ${seconds}с`;
    }

    return 'Событие уже прошло';
  };

  return (
    <div className="calendar">
      <div className="current-time">
        <p>{currentMonth} {currentYear}</p>
        <p>{currentTime.toLocaleTimeString()}</p>
      </div>
      <h2>События</h2>
      {events.length === 0 ? (
        <p>Нет запланированных событий</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <Event event={event} onDelete={onDelete} />
              <div className="event-time-remaining">{getTimeRemaining(event.date)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Calendar;