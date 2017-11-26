import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Header.scss';

export default () => <header>
  <div className="header">
    <nav className="nav-bar">
      <a className="logo">DOLORES</a>
      <div className="link-box">
        <Link to="/topics" className="link">热门话题</Link>
        <Link to="/news" className="link">科技动态</Link>
        <Link to="/technews" className="link" >开发者动态</Link>
      </div>
    </nav>
  </div>
</header>;
