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
 //state to track selected photo details
 const [selectedPhoto, setSelectedPhoto] = useState(null);

 //function to toggle the modal
 const toggleModal = (photo) => {
  console.log('toggle Modal')
  setSelectedPhoto(photo)
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
        (<PhotoDetailsModal photo={selectedPhoto} toggleModal={toggleModal} />)
        }

    </div>
  );
};

export default App;
