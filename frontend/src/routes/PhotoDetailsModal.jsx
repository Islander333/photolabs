import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

//photo Details modal (modal for when a photo is clicked on)
const PhotoDetailsModal = ({ photo, toggleModal, similarPhotos, favoritedPhotos, toggleFavorite }) => {
 
  return (
    <div className="photo-details-modal">

      {/* close button */}
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>


      {/* large photo */} 
      <div className='photo-details-modal__images'>
      <div className='photo-details-modal__fav-container'>
        <PhotoFavButton
        isFavorited={favoritedPhotos.includes(photo.id)}
        onClick={() => toggleFavorite(photo.id)} />
      </div>
        <img src={photo.urls.full} className='photo-details-modal__image' />
      </div>

      {/* profile details */}
      <div className='photo-details-modal__top-bar'>
        <div className='photo-details-modal__photographer-details'>
          <img src={photo.user.profile} className='photo-details-modal__photographer-profile'/>
          <div className='photo-details-modal__photographer-info'>
            <div>{photo.user.username}</div>
            <div className='photo-details-modal__photographer-location'>
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
  </div> 

  
      {/* Similar Photos */}
      <div className='photo-details-modal__header'>Similar Photos</div>

    <PhotoList
    photos={similarPhotos}
    toggleFavorite={toggleFavorite}
    favoritedPhotos={favoritedPhotos}
    toggleModal={toggleModal} />
     

          </div>
          
     
      
    
  )
};

export default PhotoDetailsModal;
