import React from 'react';
import {Route} from 'react-router-dom'
import Topics from  '../Topic/Topics';
import News from  '../News/News';
import TechNews from  '../Tech/Tech';
import './Content.scss';

const Content = () =>
  (<div className="main">
    <div className="content">
      <Route path="/topics" component={Topics}/>
      <Route path="/news" component={News}/>
      <Route path="/technews" component={TechNews}/>
    </div>
  </div>);

export default Content;
