import React, { Component } from 'react';

class ScrollableComponent extends Component {
  
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(){
    console.log('------called')
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    console.log(windowBottom)
    console.log(docHeight)
    if(windowBottom >= docHeight) {
      this.props.scrollToBottom()
    }
  }
  
  
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default ScrollableComponent
