import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = ({ photo, toggleFavorite, isFavorited }) => {
  /* Insert React */
  return (
   <div className="photo-list__item">


  {/* Img container with fav button */}
  <div className="photo-list__image-container">
    {/* Post image */}
    <PhotoFavButton
    isFavorited={isFavorited}
    onClick={() => toggleFavorite(photo.id)}
    />
    <img src={photo.urls.regular} className="photo-list__image"/>
    
  </div>
  

  {/* Profile Container */}
      <div className="photo-list__user-profile-container">

      <img src={photo.user.profile} className="photo-list__user-profile" />
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">{photo.user.username}</div>
        <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
      </div>

      </div>


   </div>
  );

  
};

export default PhotoListItem;
