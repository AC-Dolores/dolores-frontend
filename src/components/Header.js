import React from 'react';
import { Link, Route } from 'react-router-dom';

export  default () => <header>
  <nav>
    <Link to="/topics">热门话题</Link>
    <Link to="/news">科技动态</Link>
    <Link to="/news">开发者动态</Link>
  </nav>
</header>
