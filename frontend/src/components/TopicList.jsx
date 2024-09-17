import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


//component for list of topics
const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* mapped through the topics to render each topic item */}
      {topics.map((topic) => (
        <TopicListItem
         key={topic.id}
          topic={topic}

          //added onClick to switch to selected topic
          onClick={() => onTopicClick(topic.id)}/>
      ))}
    </div>
  );
};

export default TopicList;
