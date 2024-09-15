import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, toggleModal }) => {
  //log photo details when modal opens
  useEffect(() => {
    if (photo) {
      console.log(photo)
    }
  }, [photo]);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
