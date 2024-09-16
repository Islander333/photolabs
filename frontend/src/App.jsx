import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';

/*import photos from 'mocks/photos';
import topics from 'mocks/topics';*/

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';



const App = () => {

  const {
    state: { favoritedPhotos, isModalOpen, selectedPhoto, similarPhotos, photoData, topicData },
    toggleFavorite,
    toggleModal,
    selectTopic
  } = useApplicationData();


  return (
    <div className="App">

      <HomeRoute
       photos={photoData}
        topics={topicData}
        toggleFavorite={toggleFavorite}
        favoritedPhotos={favoritedPhotos}
        toggleModal={toggleModal}
        selectTopic={selectTopic} />

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
