import React, { Component } from 'react';
import { uniqeMerge, minObjectByField } from '../../lib/arrayHelper'
import ScrollableComponent from '../Common/ScrollableComponent';
import {getTopics} from '../../Api/query';
import TopicItem from './TopicItem/TopicItem';

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
      const lastCursor = minObjectByField(topics, 'order').order;
      this.setState({topics: uniqeMerge(oldTopics, topics, 'id'), lastCursor})
    })
  }
  
  render() {
    return (
        <ScrollableComponent scrollToBottom={this.fetchData} clickAddMore={this.fetchData}>
          {this.state.topics.map((item) => <TopicItem key={`topic-${item.id}`} topicItem={item}/>)}
        </ScrollableComponent>
    )
  }
}

export default Topics
