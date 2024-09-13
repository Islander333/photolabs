import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


  


function PhotoFavButton() {

 const [isFavorited, setIsFavorited] = useState(false);
 const handleClick = () => {
  setIsFavorited(!isFavorited);
  console.log('favorite button clicked!')
 };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* give selected state to the favIcon */}
        <FavIcon selected={isFavorited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;