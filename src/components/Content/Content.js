import React from 'react';
import { Route } from 'react-router-dom';
import Topics from '../Topic/Topics';
import News from '../News/News';
import TechNews from '../Tech/Tech';
import Widgets from '../widgets';
import './Content.scss';

const Content = () =>
  (<div className="main">
    <div className="content">
      <Route path="/topics" component={Topics} />
      <Route path="/news" component={News} />
      <Route path="/technews" component={TechNews} />
    </div>
    <div className="widgets">
      <Widgets />
    </div>
  </div>);

export default Content;
