import React from 'react';
import Header from './components/Header/Header'
import { Route } from 'react-router-dom'
import Topics from  './components/Topic/Topics';

const App = () => {
  return <div>
    <Header />
    <div>
      <Route path="/topics" component={Topics} />
    </div>
  </div>;
}

export default App;
