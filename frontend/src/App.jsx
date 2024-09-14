import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';



const App = () => {

  //state to track favorited photos
 const [favoritedPhotos, setFavoritedPhotos] = useState([]);

 //function to toggle favorited photos
 const toggleFavorite = (photoId) => {
  setFavoritedPhotos((prevFavorites) => {
    if (prevFavorites.includes(photoId)) {
      return prevFavorites.filter(id => id !== photoId)
    }
    return [...prevFavorites, photoId];
  });
 }

  return (
    <div className="App">

      <HomeRoute
       photos={photos}
        topics={topics}
        toggleFavorite={toggleFavorite}
        favoritedPhotos={favoritedPhotos} />

    </div>
  );
};

export default App;
