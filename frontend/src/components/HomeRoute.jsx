import React from 'react'

import '../styles/HomeRoute.scss'
import TopNavigation from './TopNavigationBar'
import PhotoList from './PhotoList'

const HomeRoute = ({ photos, topics, toggleFavorite, favoritedPhotos }) => {
  return (
    <div className="home-route">

      <TopNavigation topics={topics} favoritedPhotos={favoritedPhotos} />
      <PhotoList
       photos={photos}
       toggleFavorite={toggleFavorite}
       favoritedPhotos={favoritedPhotos}
      />

    </div>
  )
}

export default HomeRoute;