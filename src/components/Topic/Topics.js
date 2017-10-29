import React, {Component} from 'react';
import ScrollableComponent from '../Common/ScrollableComponent';
import {getTopics} from '../../Api/query';
import TopicItem from './TopicItem/TopicItem'
import './Topics.scss'

class Topics extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      lastCursor: 0
    };
    this.fetchData = this.fetchData.bind(this);
  }
  
  componentDidMount(){
    this.fetchData()
  }
  
  fetchData() {
    getTopics(this.state.lastCursor).then(topics => {
      const oldTopics = this.state.topics;
      const lastCursor = topics[topics.length - 1].order;
      this.setState({topics: [...oldTopics, ...topics], lastCursor})
    })
  }
  
  render() {
    return (
    <div className="main">
      <div className="content">
        <ScrollableComponent scrollToBottom={this.fetchData} clickAddMore={this.fetchData}>
          {this.state.topics.map((item, index) => <TopicItem key={`topic-${index}`} topicItem={item}/>)}
        </ScrollableComponent>
      </div>
    </div>
      
     
    )
  }
}

export default Topics
