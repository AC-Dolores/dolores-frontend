import React, { Component } from 'react';
import TechItem from './TechItem/TechItem';
import { getTechNews } from '../../Api/query';

import './Tech.scss';

class Topics extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      techNews: []
    }
  }
  
  componentDidMount(){
    getTechNews().then(techNews => this.setState({ techNews }))
  }
  
  
  render(){
    return (
      <div className="main">
        <div className="content">
          {this.state.techNews.map((item) => <TechItem key={`key-${item.id}`}  TechItem={item} />)}
        </div>
      </div>
    )
  }
}

export default Topics
