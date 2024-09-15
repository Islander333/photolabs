import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



const App = () => {

  //state to track favorited photos
 const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  //state to track the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  //state to track selected photo details
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  //state to track similar photos
  const [similarPhotos, setSimilarPhotos] = useState([])



 //function to toggle favorited photos
 const toggleFavorite = (photoId) => {
  setFavoritedPhotos((prevFavorites) => {
    if (prevFavorites.includes(photoId)) {
      return prevFavorites.filter(id => id !== photoId)
    }
    return [...prevFavorites, photoId];
  });
 }



 //function to toggle the modal
 const toggleModal = (photo) => {
  console.log('toggle Modal')
  
  if (photo && photo.similar_photos) {
    const relatedPhotos = Object.values(photo.similar_photos);
    setSimilarPhotos(relatedPhotos)
  } else {
    setSimilarPhotos([]);
  }

  setSelectedPhoto(photo);
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
        (<PhotoDetailsModal
           photo={selectedPhoto}
            toggleModal={toggleModal}
            similarPhotos={similarPhotos}
            favoritedPhotos={favoritedPhotos}
            toggleFavorite={toggleFavorite} />)
        }

    </div>
  );
};

export default App;
