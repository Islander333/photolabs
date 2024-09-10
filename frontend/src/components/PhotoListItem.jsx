import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  return (
   <div key={props.photo.id} className="photo-list__item">
  
  {/* Post image */}
    <img src={props.photo.imageSource} className="photo-list__image"/>

  {/* Profile Container */}
    
      <div className="photo-list__user-profile-container">
      <img src={props.photo.profile} className="photo-list__user-profile" />
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">{props.photo.username}</div>
        <div className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</div>
      </div>

      </div>

     

    
   </div>
  );

  
};

export default PhotoListItem;
