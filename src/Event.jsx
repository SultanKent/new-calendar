import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Event = ({ event, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(event.title);
  const [editedDate, setEditedDate] = useState(event.date);

  const handleDelete = () => {
    onDelete(event.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    // Perform save edit logic here
    onEdit(event.id, editedTitle, editedDate);
    setEditing(false);
    // Note: You might also want to update the local state to reflect the changes immediately
    setEditedTitle(editedTitle);
    setEditedDate(editedDate);
  };  

  const handleCancelEdit = () => {
    // Cancel edit and revert changes
    setEditedTitle(event.title);
    setEditedDate(event.date);
    setEditing(false);
  };

  return (
    <li className="event">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="date"
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
          />
          <div className="editing-buttons">
          <button onClick={handleSaveEdit}>Сохранить</button>
          <button onClick={handleCancelEdit}>Отмена</button>
          </div>
        </>
      ) : (
        <>
          <span className="event-date">{event.date}</span>
          <span className="event-title">{event.title}</span>
          <div className="event-buttons">
          <button onClick={handleEdit}>Редактировать</button>
          <button onClick={handleDelete}>Удалить</button>
          </div>
        </>
      )}
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Event;