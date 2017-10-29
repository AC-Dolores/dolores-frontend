import React, { Component } from 'react';
import './scrollableComponent.scss';

class ScrollableComponent extends Component {
  
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      counter: 0
    };
  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
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
      this.setState({
        counter: this.state.counter + 1
      });
      
      if(this.state.counter < 3){
        this.props.scrollToBottom();
      }
    }
  }
  
  
  render(){
    return (
      <div>
        { this.props.children }
        { this.state.counter >=3 ? <div className="loadMoreBox"><div className="loadMoreButton" onClick={this.props.clickAddMore()}>加载更多</div></div>:null }
      </div>
    )
  }
}

export default ScrollableComponent
