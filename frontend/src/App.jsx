import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';



const App = () => {

  const {
    state: { favoritedPhotos, isModalOpen, selectedPhoto, similarPhotos },
    toggleFavorite,
    toggleModal,
  } = useApplicationData();


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
