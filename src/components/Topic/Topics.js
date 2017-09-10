import React from 'react';
import TopicItem from './TopicItem/TopicItem'
import './Topics.scss'

const Topics = () => {
  
  const Topics = [
    { title: '阿里18周年年会：随处可见的黑科技', summary: "9月8日，阿里巴巴集团将在杭州黄龙体育中心召开2017集团年会，当天将会有4万名来自全世界各地的阿里员工来到现场，其中包括来自21个国家的800多名海外阿里巴巴员工，另外还有2万人将通过直播参与 ... 如此声势浩大的年会，作为一家高科技企业，阿里又将会在年会中应用什么样的黑科技呢 ... 据了解，阿里这次准备了40000只IoT手环，手环采用阿里自主研发的技术，可以实时精准控制，每个手环都独立接收和执行命令，并且可以在毫秒之内送达命令。"}
  ];
  
  return (
    <div className="main">
      <div className="content">
        {Topics.map((item, index) => <TopicItem key={`topic-${index}`} title={item.title} summary={item.summary} />)}
      </div>
    </div>
  )
  
};

export default Topics
