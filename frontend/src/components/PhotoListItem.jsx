import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  /* Insert React */
  return (
   <div className="photo-list__item">


  {/* Img container with fav button */}
  <div className="photo-list__image-container">
    {/* Post image */}
    <PhotoFavButton/>
    <img src={props.photo.urls.regular} className="photo-list__image"/>
    
  </div>
  

  {/* Profile Container */}
      <div className="photo-list__user-profile-container">

      <img src={props.photo.user.profile} className="photo-list__user-profile" />
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">{props.photo.user.username}</div>
        <div className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</div>
      </div>

      </div>


   </div>
  );

  
};

export default PhotoListItem;
