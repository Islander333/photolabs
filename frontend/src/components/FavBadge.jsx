import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favoritedCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={favoritedCount > 0} />
      {favoritedCount > 0 && (
        <div className='fav-badge__count'>
          <span>{favoritedCount}</span>
          </div>
      )}
    </div>
  );
};

export default FavBadge;