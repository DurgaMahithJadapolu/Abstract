import React from 'react';
import './Popup.css';

function Popup({ show, handleClose, handleSubmit }) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ title, description }); // Pass form data to the parent component
    handleClose(); // Close the popup after submission
  };

  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="newcardtext">Create a New Request</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="button" className="btn-cancel" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
