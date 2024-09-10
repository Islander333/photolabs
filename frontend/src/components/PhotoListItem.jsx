import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  return (
   <div key={props.id} className="photo-list-item">
  
  {/* Post image */}
    <img src={props.imageSource}/>

  {/* Profile Container */}
    <div className="profile-container">
      <img src={props.profile}/>

      <div className="profile-info">
        <div className="username">{props.username}</div>
        <div className="location">{props.location.city}, {props.location.country}</div>
      </div>

    </div>
   </div>
  );

  
};

export default PhotoListItem;
