import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Header.scss';

export  default () => <header>
  <nav className="Header">
    <Link to="/topics" className="Link">热门话题</Link>
    <Link to="/news">科技动态</Link>
    <Link to="/news">开发者动态</Link>
  </nav>
</header>
