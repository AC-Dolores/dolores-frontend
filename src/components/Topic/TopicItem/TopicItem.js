import React from 'react';


const TopicItem = ({topicItem}) => {
  
  return (
    <div className="topic">
      <h2 className="title">{topicItem.title}</h2>
      <div className="summary">{topicItem.summary}</div>
    </div>
  )
};

export default TopicItem
