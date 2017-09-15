import React, { Component } from 'react';
import { getTopics } from '../../Api/query';
import TopicItem from './TopicItem/TopicItem'
import './Topics.scss'

class Topics extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      topics: []
    }
  }
  
  componentDidMount(){
    getTopics().then(topics => this.setState({ topics }))
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
