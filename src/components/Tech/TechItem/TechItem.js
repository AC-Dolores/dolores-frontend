import React from 'react';
import "./TechItem.scss";

const TechItem = ({ TechItem }) => {
  const {title, summary, source, editor, url} = TechItem;
  return (
    <div className="news">
      <h2 className="title"><a href={url}>{title}</a></h2>
      <div className="summary">{summary}</div>
      <div className="source"><span>{source} / {editor}</span></div>
    </div>
  )
};

export default TechItem;
