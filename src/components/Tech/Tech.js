import React, { Component } from 'react';
import TechItem from './TechItem/TechItem';
import { uniqeMerge, minObjectByField } from '../../lib/arrayHelper'
import ScrollableComponent from '../Common/ScrollableComponent';
import { getTechNews } from '../../Api/query';

class Topics extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      techNews: [],
      lastCursor: 0
    };
    this.fetchData = this.fetchData.bind(this);
  }
  
  componentDidMount(){
    this.fetchData();
  }
  
  fetchData(){
    getTechNews(this.state.lastCursor).then(techNews => {
      const oldTechNews = this.state.techNews;
      const lastCursor = minObjectByField(techNews, 'publishDate').publishDate;
      this.setState({techNews: uniqeMerge(oldTechNews, techNews, 'id'), lastCursor})
    })
  }
  
  
  render(){
    return (
    <ScrollableComponent scrollToBottom={this.fetchData} clickAddMore={this.fetchData}>
      {this.state.techNews.map((item) => <TechItem key={`key-${item.id}`}  TechItem={item} />)}
    </ScrollableComponent>
    )
  }
}

export default Topics
