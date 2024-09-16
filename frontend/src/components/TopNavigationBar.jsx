import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favoritedPhotos, selectTopic }) => {

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

      {/* Fav Badge */}
      <FavBadge favoritedCount={favoritedPhotos.length}/>

    </div>
  );
}

export default TopNavigation;