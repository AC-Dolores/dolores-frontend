import React from 'react';
import Header from './components/Header/Header'
import { Route } from 'react-router-dom'
import Topics from  './components/Topic/Topics';
import News from  './components/News/News';

const App = () => {
  return <div>
    <Header />
    <div>
      <Route path="/topics" component={Topics} />
      <Route path="/news" component={News} />
    </div>
  </div>;
};

export default App;
