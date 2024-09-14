import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



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


 //state to track the modal
 const [isModalOpen, setIsModalOpen] = useState(false);

 //function to toggle the modal
 const toggleModal = () => {
  console.log('toggle Modal')
  setIsModalOpen(prev => !prev);
 }

  return (
    <div className="App">

      <HomeRoute
       photos={photos}
        topics={topics}
        toggleFavorite={toggleFavorite}
        favoritedPhotos={favoritedPhotos}
        toggleModal={toggleModal} />

        {isModalOpen && 
        (<PhotoDetailsModal toggleModal={toggleModal} />)
        }

    </div>
  );
};

export default App;
