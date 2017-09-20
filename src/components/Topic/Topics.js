import React, { Component } from 'react';
import { getTopics } from '../../Api/query';
import TopicItem from './TopicItem/TopicItem'
import './Topics.scss'

class Topics extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      topics: [],
      lastCursor: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    this.fetchData()
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(){
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if(windowBottom >= docHeight) {
      this.fetchData()
    }
  }
  
  fetchData(){
    getTopics(this.state.lastCursor).then(topics => {
      const oldTopics = this.state.topics;
      const lastCursor = topics[topics.length - 1].order;
      this.setState({topics:[...oldTopics, ...topics], lastCursor})
    })
  }
  
  render(){
    return (
      <div className="main">
        <div className="content">
          {this.state.topics.map((item, index) => <TopicItem key={`topic-${index}`}  topicItem={item} />)}
        </div>
      </div>
    )
  }
}

export default Topics
