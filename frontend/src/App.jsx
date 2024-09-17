import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
//removed mocks and fetched real API data from useApplicationData
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  //Destructuring state and functions from custom hook
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

        {/* Conditional rendering for if the Photo modal is open */}
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
