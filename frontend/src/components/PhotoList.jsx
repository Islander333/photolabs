import React from "react";

import "../styles/PhotoList.scss";

import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, toggleFavorite, favoritedPhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
         key={photo.id}
          photo={photo}
          isFavorited={favoritedPhotos.includes(photo.id)}
          toggleFavorite={toggleFavorite}
          />
      ))}

    </ul>
  );
};

export default PhotoList;
