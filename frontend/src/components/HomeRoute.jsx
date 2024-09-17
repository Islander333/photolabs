import React from 'react'

import '../styles/HomeRoute.scss'
import TopNavigation from './TopNavigationBar'
import PhotoList from './PhotoList'


//Component for rendering the home page
const HomeRoute = ({
   photos,
   topics,
   toggleFavorite,
   favoritedPhotos,
    toggleModal,
    selectTopic,
    isDarkMode,
    toggleDarkMode,
     }) => {
  return (
    <div className="home-route">

      {/* Top nav bar with topics and favorited photos */}
      <TopNavigation
       topics={topics}
        favoritedPhotos={favoritedPhotos}
         selectTopic={selectTopic}
         toggleDarkMode={toggleDarkMode}
         />

      {/* List of photos, with ability to favorite and toggle the modal */}
      <PhotoList
       photos={photos}
       toggleFavorite={toggleFavorite}
       favoritedPhotos={favoritedPhotos}
       toggleModal={toggleModal}
      />

    </div>
  )
}

export default HomeRoute;