import React from 'react';
import { Link, Route } from 'react-router-dom'
import News from  './components/News';

const App = () => {
  return <div>
    <nav>
      <Link to="/news">News</Link>
    </nav>
    <div>
      <Route path="/news" component={News} />
    </div>
  </div>;
}

export default App;
