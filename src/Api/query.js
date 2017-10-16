import api from './api';
import { READHUBENDPOINT } from '../config';
import { extractTopicData, extractNewsData, extractTechData } from '../lib/dataService'

const dataServiceMap = {
  'topic' : extractTopicData,
  'news': extractNewsData,
  'technews': extractTechData
};

export const getItems =(channel) => (lastCursor = 0) => {
  const params = lastCursor ? `?lastCursor=${lastCursor}&pageSize=10` : `?pageSize=10`;
  const path = `${READHUBENDPOINT}/${channel}` + params;
  return api(path).then(resp => resp.data.map(item => { return dataServiceMap[channel](item)}))
};

export const getTopics = getItems("topic");
export const getNews = getItems('news');
export const getTechNews = getItems('technews');
