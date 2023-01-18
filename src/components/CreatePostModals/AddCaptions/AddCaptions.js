/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Modal } from '@mui/material';
import './addCaptions.css';

function AddCaptions({
  open,
  setOpen,
  image,
  setCaption,
  setLocation,
  createPost,
}) {
  const preview = URL.createObjectURL(image);

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="add-caption">
        <header className="add-caption-header">
          <h4>Add Captions</h4>
          <button
            type="button"
            className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded post-button"
            onClick={createPost}
          >
            Post
          </button>
        </header>
        <div className="show-image-div">
          {' '}
          <img src={preview} alt="" />
        </div>
        <div className="add-captions-div">
          <textarea
            type="text"
            className="caption-input"
            placeholder="Add a caption ....."
            onChange={(e) => {
              setCaption(e.target.value);
            }}
          />

          <input
            type="text"
            className="location-input"
            placeholder="Add loacation"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
      </div>
    </Modal>
  );
}

export default AddCaptions;
