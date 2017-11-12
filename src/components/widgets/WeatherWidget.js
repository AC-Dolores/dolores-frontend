import React from 'react';
import { DragSource } from 'react-dnd';

const widgetSource = {
  beginDrag(props) {
    return {
      text: props.text,
    };
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const WeatherWidget = ({ isDragging, connectDragSource, text }) => connectDragSource(
  <div style={{ opacity: isDragging ? 0.5 : 1 }}>
    {text}
  </div>,
 );

export default DragSource('widget', widgetSource, collect)(WeatherWidget);

