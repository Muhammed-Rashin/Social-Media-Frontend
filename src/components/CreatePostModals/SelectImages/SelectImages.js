import React from 'react';
import { Modal } from '@mui/material';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import './selectImages.css';

function SelectImages({ open, setOpen, setImage }) {
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="select-media">
        <header className="select-media-header">
          <h4>Create New Post</h4>
        </header>
        <div className="upload-icon-div">
          <CollectionsOutlinedIcon
            className="upload-icon"
            sx={{ fontSize: '100px' }}
          />
          <h2 className="">Drag Images Here</h2>
        </div>

        <div className="mt-8 text-center">
          <label htmlFor="file-upload" className="image-select-button">
            Select from computer
          </label>
          <input
            id="file-upload"
            accept="image/*"
            type="file"
            className="w-1/3 imageSelectionInput"
            onChange={(event) => setImage(event.target.files[0])}
          />
        </div>
      </div>
    </Modal>
  );
}

export default SelectImages;
