import React from 'react'

import '../styles/HomeRoute.scss'
import TopNavigation from './TopNavigationBar'
import PhotoList from './PhotoList'

const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">

      <TopNavigation topics={topics} />
      <PhotoList photos={photos} />

    </div>
  )
}

export default HomeRoute;