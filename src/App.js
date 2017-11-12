import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Header from './components/Header/Header';
import Content from './components/Content/Content';


const App = () => <div>
  <Header />
  <Content />

</div>;

export default DragDropContext(HTML5Backend)(App);
