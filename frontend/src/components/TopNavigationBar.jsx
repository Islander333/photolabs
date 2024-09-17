import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favoritedPhotos, selectTopic, toggleDarkMode }) => {

  //click handling for topics
  const handleClickTopic = (topicId) => {
    selectTopic(topicId)
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* Topics */}
      <TopicList
       topics={topics}
       onTopicClick={handleClickTopic}
       />

      {/* Dark Button */}
      <button onClick={toggleDarkMode} className='dark-mode-toggle'>
      <FontAwesomeIcon icon={faMoon} />
      </button>

      {/* Fav Badge */}
      <FavBadge favoritedCount={favoritedPhotos.length}/>

    </div>
  );
}

export default TopNavigation;