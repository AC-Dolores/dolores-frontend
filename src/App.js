import React from 'react';
import Header from './components/Header'
import { Link, Route } from 'react-router-dom'
import Topics from  './components/News';

const App = () => {
  return <div>
    <Header />
    <div>
      <Route path="/topics" component={Topics} />
    </div>
  </div>;
}

export default App;
