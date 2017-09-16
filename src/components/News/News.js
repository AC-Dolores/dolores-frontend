import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';
import { getNews } from '../../Api/query';

import './News.scss';

class Topics extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }
  
  componentDidMount(){
    getNews().then(news => this.setState({ news }))
  }
  
  
  render(){
    return (
      <div className="main">
        <div className="content">
          {this.state.news.map((item) => <NewsItem key={`key-${item.id}`}  newsItem={item} />)}
        </div>
      </div>
    )
  }
}

export default Topics
