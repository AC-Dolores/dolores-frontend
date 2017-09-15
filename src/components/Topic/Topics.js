import React from 'react';
import TopicItem from './TopicItem/TopicItem'
import './Topics.scss'

const Topics = () => {
  
  const Topics = [
      { title: '比特币江湖潜规则：中国势力控制51%矿池份额', summary: "最近四年，GBG业余时间专注一件事：将任天堂1985年生产的游戏主机，改装成挖矿机，开挖比特币 ... 根据规则，每10分钟，互联网上就会多出一个比特币加密数据块，全球所有的挖矿设备同时运算生成它，成功者，得比特币 ... 每10分钟一次机会，可是，整整四年，GBG一无所获，因为他的挖矿机太慢太慢。"},
    { title: '阿里18周年年会：随处可见的黑科技', summary: "9月8日，阿里巴巴集团将在杭州黄龙体育中心召开2017集团年会，当天将会有4万名来自全世界各地的阿里员工来到现场，其中包括来自21个国家的800多名海外阿里巴巴员工，另外还有2万人将通过直播参与 ... 如此声势浩大的年会，作为一家高科技企业，阿里又将会在年会中应用什么样的黑科技呢 ... 据了解，阿里这次准备了40000只IoT手环，手环采用阿里自主研发的技术，可以实时精准控制，每个手环都独立接收和执行命令，并且可以在毫秒之内送达命令。"}
  ];
  
  return (
    <div className="main">
      <div className="content">
        {Topics.map((item, index) => <TopicItem key={`topic-${index}`}  topicItem={item} />)}
      </div>
    </div>
  )
  
};

export default Topics
