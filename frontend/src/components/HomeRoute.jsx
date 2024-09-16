import React from 'react'

import '../styles/HomeRoute.scss'
import TopNavigation from './TopNavigationBar'
import PhotoList from './PhotoList'

const HomeRoute = ({ photos, topics, toggleFavorite, favoritedPhotos, toggleModal, selectTopic }) => {
  return (
    <div className="home-route">

      <TopNavigation topics={topics} favoritedPhotos={favoritedPhotos} selectTopic={selectTopic} />
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