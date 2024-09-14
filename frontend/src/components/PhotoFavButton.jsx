import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


  


function PhotoFavButton({ isFavorited, onClick }) {

  return (
    <div
     className="photo-list__fav-icon"
      onClick={(event => {
        event.stopPropagation(); //added to stop propagation when clicking fav icon
        onClick();
      })}>
      <div className="photo-list__fav-icon-svg">
        {/* give selected state to the favIcon */}
        <FavIcon selected={isFavorited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;