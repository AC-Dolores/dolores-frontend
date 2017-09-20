import React, {Component} from 'react';
import ScrollableComponent from '../Common/ScrollableComponent/ScrollableComponent'
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
      <ScrollableComponent scrollToBottom={this.fetchData}>
        <div className="main">
          <div className="content">
            {this.state.topics.map((item, index) => <TopicItem key={`topic-${index}`} topicItem={item}/>)}
          </div>
        </div>
      </ScrollableComponent>
    )
  }
}

export default Topics
