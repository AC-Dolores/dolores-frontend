import React, { Component } from 'react';
import ScrollableComponent from '../Common/ScrollableComponent';
import NewsItem from './NewsItem/NewsItem';
import { getNews } from '../../Api/query';
import { uniqeMerge, minObjectByField } from '../../lib/arrayHelper'

class Topics extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      news: [],
      lastCursor: 0
    };
    this.fetchData = this.fetchData.bind(this)
  }
  
  componentDidMount(){
    this.fetchData()
  }
  
  fetchData(){
    getNews(this.state.lastCursor).then(news => {
      const oldNews = this.state.news;
      const lastCursor = minObjectByField(news, 'publishDate').publishDate;
      this.setState({news: uniqeMerge(oldNews, news, 'id'), lastCursor})
    })
  }
  
  
  render(){
    return (
    <ScrollableComponent scrollToBottom={this.fetchData} clickAddMore={this.fetchData}>
      {this.state.news.map((item) => <NewsItem key={`news-${item.id}`}  newsItem={item} />)}
    </ScrollableComponent>
    )
  }
}

export default Topics
