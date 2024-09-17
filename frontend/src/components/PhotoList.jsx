import React from "react";

import "../styles/PhotoList.scss";

import PhotoListItem from "./PhotoListItem";

//component for the list of photos
const PhotoList = ({ photos, toggleFavorite, favoritedPhotos, toggleModal }) => {
  return (
    <ul className="photo-list">
      {/* mapped through the list of photos to render each photo item */}
      {photos.map((photo) => (
        <PhotoListItem
         key={photo.id}
          photo={photo}
          isFavorited={favoritedPhotos.includes(photo.id)}
          toggleFavorite={toggleFavorite}
          toggleModal={toggleModal}
          />
      ))}

    </ul>
  );
};

export default PhotoList;
